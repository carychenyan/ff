var dodoedu = {
    staticPath: "http://dev-images.dodoedu.com",
    hostname: "http://dev.dodoedu.com"
    // staticPath: "http://static.dodoedu.com",
    // hostname: "http://www.dodoedu.com"
}

jQuery.extend({
    // 动态加载样式文件
    getCss: function(url){
        $("<link>").attr({ 
            rel: "stylesheet",
            type: "text/css",
            href: url
        }).appendTo("head");
    },
    // ajax跨域请求方法
    JSONP: function(method, url, data, callback){
        $.ajax({
            type: method,
            async: false,
            url: url,
            data: data,
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            success: function(json){
                callback(json);
            },
            error: function(){
                alert('fail');
            }
        });
    }
});

jQuery.fn.extend({
    // 获取内容的自动分词数据
    getTokenize: function (content, limit) {
        var main = this;
        $.JSONP('get', dodoedu.hostname + '/Tag/tokenize', {'content': content, 'limit': limit}, function (data) {
            var html = '';
            for (var i in data) {
                html += '<em>' + data[i].word + '</em>';
            }
            main.addClass('recTag').html(html);
        });
    },

    // 获取对象的标签列表
    getTargetTag: function () {
        if (this.length <= 0) {
            return false;
        }
        var main = this;
        var target = this.data('target');
        var targetid = this.data('targetid');
        main.extend({
            countItem: main.find('.tag-count'),
            contentItem: main.find('.tag-content')
        });

        $.JSONP('get', dodoedu.hostname + '/Tag/detail', {target:target, targetid: targetid}, function(json){
            if (json.length > 0) {
                main.countItem.html(json.length);
                var html = '';
                for (i in json) {
                    html += '<a href="javascript:;">' + json[i].tag_name + '</a>'
                }
                main.contentItem.html(html);
            }
        });
        return main;
    },

    // 获取分类热门标签
    getTargetTopTag: function () {
        if (this.length <= 0) {
            return false;
        }
        var main = this;
        var target = this.data('target');
        jQuery.JSONP('get', dodoedu.hostname + '/Tag/targetTop', {'target': target}, function (data) {
            var html = '常用标签：';
            for (i in data) {
                html += '<em>' + data[i].tag_name + '</em>';
            }
            main.html(html);
        });
        return main;
    },

    // 序列号标签数据用于提交
    serializeTagData: function () {
        var tagData = new Array();
        this.each(function (i) {
            tagData.push($(this).val());
        });
        return tagData;
    },

    /**
     *标签建议自动完成
     */
    showTagSuggest: function (tagData) {
        if (this.length <= 0) {
            return false;
        }

        var main = this;
        main.html('<div class="editTag"><span class="clearFloat">标签可以帮助用户更好的发现您的内容,标签间请用“逗号”隔开，最多可添加5个标签。</span><div class="floatL">标签：</div><div style="width:562px;" class="tagBox floatL"><div class="recText floatL"><input name="blogTag" type="text" id="blogTag" autocomplete="off"></div><div id="suggest-search" class="SQ_searchTips"></div></div><span class="clearFloat">智能推荐：<span id="tag-tokenize" style="display: inline;padding: 0;" class="recTag"></span></span></div>');

        main.extend({
            tagArr: [],
            tipItem: main.find('div.SQ_searchTips'),
            inputItem: main.find('input').showSuggest(
                // 自动建议的包装项
                main.find('div.SQ_searchTips'),
                // 自动建议的请求地址 
                dodoedu.hostname + '/Tag/suggest/keyword/',
                // 自动建议每一项的生成
                function (data) {
                    return '<div class="suggest-item">' + data.tag_name + '</div>';
                },
                // 当点击建议项时执行的函数 
                function (element) {
                    main.renderItem($(element).text());
                }
            ).bind({
                    blur: function (e) {
                        if (main.tipItem.is(':hidden')) {
                            main.renderInput(e.target.value);
                        }
                    }
                }),
            // 输入框的原始宽度
            inputWidth: main.find('div.recText').width()

        }).renderTag(main.inputWidth);

        // 如果需要向服务器获取原来的标签数据
        if (main.data('targetid')) {
            var requestData = {
                target: main.data('target'),
                targetid: main.data('targetid')
            };
            $.JSONP('get', dodoedu.hostname + '/Tag/detail', requestData, function(json){
                for (i in json) {
                    main.renderItem(json[i].tag_name, main.inputWidth);
                }
            })
        }

        $('div.recTag').find('em').live({
            click: function(e){
                main.renderItem($(this).text());
            }
        });

        return main;
    },

    // 标签渲染
    renderTag: function (inputWidth) {
        if (this.length <= 0) {
            return false;
        }
        var main = this;
        main.extend({
            inputItem: main.find('input').extend({
                // 宽度自适应
                autoWidth: function (parentWidth) {
                    // 获取改元素相对于父元素的相对位置
                    var position = this.prevAll().width() + 28;
                    this.width(this.width() - position);
                }
            }).bind({
                keyup: function (e) {
                    var value;
                    switch (e.keyCode) {
                        case 188: // ','
                        case 186: // ';'
                            value = e.target.value.slice(0, -1);
                            main.renderInput(value);
                            break;
                        case 32: // ' '
                            var origin_value = e.target.value;
                            // 如果最后一个字符是空格
                            if (origin_value.charAt(origin_value.length - 1) == ' ') {
                                value = jQuery.trim(e.target.value);
                                main.renderInput(value);
                            }
                            break;
                    }
                }
            }),
            // 渲染用户输入
            renderInput: function (value) {
                if (value.length >= 2) {
                    main.renderItem(value);
                } else {
                    main.inputItem.val(value);
                }
            },
            // 渲染一个标签
            renderItem: function (value, parentWidth) {
                // 一个对象的标签数量不得超过5个
                if (main.find('span.tag-item').length < 5) {
                    // 如果已有标签中不存在
                    if(main.tagArr && $.inArray(value, main.tagArr) < 0){
                        main.tagArr.push(value);
                        main.inputItem.before('<span class="tag-item">' + value + '<input type="hidden" name="tags[' + value + ']" value="' + value + '"><em class="del"><em></em></em></span>').val('');
                        if (parentWidth == 'undefined') {
                            parentWidth = inputWidth;
                        }
                        //main.inputItem.autoWidth(parentWidth);
                        main.initTagItem(main.tagArr);
                    }
                } else {
                    alert('最多只能有5个标签!');
                }
            }
        });
        return main;
    },

    // 接收者元素绑定事件
    initTagItem: function (tagArr) {
        return this.unbind().bind({
            // 点击删除
            click: function (e) {
                var $target = $(e.target);
                // 事件委托，只有点击的元素是em才移除元素
                if ($target.is('em')) {
                    var inputItem = $target.parents('span');
                    delete tagArr[$.inArray(inputItem.find(':hidden').val(), tagArr)];
                    inputItem.remove();
                }
            }
        }).find('span').bind({
                // 鼠标悬浮效果
                mouseover: function (e) {
                    $(this).addClass('active');
                },
                mouseout: function (e) {
                    $(this).removeClass('active');
                }
            });
    }
});

jQuery.fn.extend({
    showSuggest: function(wrapper, url, htmlCall, clickCall, fixposition){
        if(this.length <= 0){
            return false;
        }

        if(!fixposition){
            fixposition = {
                left: -6,
                top: 16
            }
        }
        var main = this;
        return main.attr('autocomplete', 'off').extend({
            // 搜索建议选项
            suggestItem: null,
            // 当前选中的搜索建议索引值
            currentIndex: null,
            currentItem: null,
            activeColor: '#F6F6F6',
            itemColor: '#FFFFFF',
            // 搜索建议
            showsuggest: function(keyword){
                $.JSONP('get', url + keyword, {}, function(data){
                    if (data.length > 0) {
                        var html = '<div class="SQ_searchTipsCon">';
                        jQuery.each(data, function(item){
                            html += htmlCall(data[item]);
                        });
                        html += '</div>';
                        var position = main.position();
                        main.suggestItem = wrapper.css({
                            left:position.left + fixposition.left +'px',
                            top: position.top + fixposition.top + 'px'
                        }).html(html).show().find('div.suggest-item');
                        main.suggestItem.bind({
                            click: function(e){
                                clickCall(this);
                                wrapper.hide();
                            }
                        }).hover(
                            function(e){
                                this.style.backgroundColor=main.activeColor;
                            },
                            function(e){
                                this.style.backgroundColor=main.itemColor;
                            }
                        );
                    } else {
                        wrapper.hide();
                    }
                });
            },
            // 选中上一个搜索建议
            selectPrev: function(){
                if (main.currentIndex == null || main.currentIndex <= 0) {
                    main.currentIndex = main.suggestItem.length;
                };
                main.currentIndex -= 1;
                main.focusCurrent();
            },
            // 选中上一个搜索建议
            selectNext: function(){
                if (main.currentIndex == null) {
                    main.currentIndex = -1;
                };
                main.currentIndex += 1;
                main.focusCurrent();
            },
            // 当前元素获取焦点
            focusCurrent: function(){
                main.currentItem = jQuery(main.suggestItem.get(main.currentIndex));
                main.val(main.currentItem.text());
                main.currentIndex %= main.suggestItem.length;
                main.suggestItem.css('backgroundColor', main.itemColor);
                main.currentItem.css('backgroundColor', main.activeColor);
            },
            init: function(){
                // 当当前元素失去焦点时，隐藏建议项
                $('body').bind({
                    click: function(e){
                        wrapper.hide();
                    }
                });
                return main;
            }
        }).bind({
                keydown: function(e){
                    if(e.keyCode == 13){
                        if(main.currentIndex != null){
                            main.currentItem.trigger('click');
                        }
                        // 阻止回车提交事件
                        e.preventDefault();
                        return false;
                    }
                },
                keyup: function(e){
                    switch(e.keyCode){
                        // 向下键
                        case 40:
                            main.selectNext();
                            break;
                        // 向上键
                        case 38:
                            main.selectPrev();
                            break;
                        // 回车事件
                        case 13:
                            break;
                        default:
                            var e_value = jQuery.trim(e.target.value);
                            if(e_value.length > 0){
                                main.showsuggest(e_value);
                            }
                    }

                }
            }).init();
    }
});

jQuery(function ($) {
    $.getCss(dodoedu.staticPath + '/shequPage/tag/style/tagbox.css');
    $('.show-detail-tags').getTargetTag();

    $('.input-tags').showTagSuggest();
});