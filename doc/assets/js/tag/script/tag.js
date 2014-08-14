// 用户js加载
var LoadJs_tag = true;

jQuery(function ($) {
    //loadjscssfile(commonParams.dodoStaticPath + '/shequPage/tag/style/tagbox.css', 'css');
    //// 自动加载建议插件
    //if (typeof(LoadJs_suggest) == 'undefined') {
    //    loadjscssfile(commonParams.dodoStaticPath + '/shequPage/common/suggest.js', 'js');
    //}

    $('.show-detail-tags').getTargetTag();
});

jQuery.fn.extend({
    // 获取内容的自动分词数据
    getTokenize: function (content, limit) {
        var main = this;
        $.post('/Tag/tokenize', {'content': content, 'limit': limit}, function (data) {
            var html = '';
            for (var i in data) {
                html += '<em>' + data[i].word + '</em>';
            }
            main.addClass('recTag').html(html);
        }, 'json')
    },

    // 获取对象的标签列表
    getTargetTag: function () {
        if (this.length <= 0) {
            return false;
        }
        var main = this;
        var target = this.data('target');
        var targetid = this.data('targetid');
        var contentSelector = this.data('selector');
        if( !contentSelector ){
            contentSelector = '.tag-content';
        }
        main.extend({
            countItem: main.find('.tag-count'),
            contentItem: main.find(contentSelector)
        });
        jQuery.get('/Tag/detail', {'target': target, 'targetid': targetid}, function (data) {
            if (data.length > 0) {
                main.countItem.html(data.length);
                var html = '';
                for (i in data) {
                    html += '<a href="javascript:;" class="grayA tagA">' + data[i].tag_name + '</a>'
                }
                main.contentItem.html(html);
            }

        }, 'json')
        return main;
    },

    // 获取分类热门标签
    getTargetTopTag: function () {
        if (this.length <= 0) {
            return false;
        }
        var main = this;
        var target = this.data('target');
        jQuery.get('/Tag/targetTop', {'target': target}, function (data) {
            var html = '常用标签：';
            for (i in data) {
                html += '<em>' + data[i].tag_name + '</em>';
            }
            main.html(html);
        }, 'json')
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
        //$(main).die().live({
        //    focus: function () {
        //        if ($(main).find("div.recText").text() == $(main).find("div.recText").attr("data-default")) {
        //            $(main).find("div.recText").html('<input name="blogTag" type="text" id="blogTag">');
        //            $(main).find("#blogTag").focus();
        //            main.extend({
        //                tagArr: [],
        //                tipItem: main.find('div.SQ_searchTips'),
        //                inputItem: main.find('input').showSuggest(
        //                    // 自动建议的包装项
        //                    main.find('div.SQ_searchTips'),
        //                    // 自动建议的请求地址 
        //                    '/Tag/suggest/keyword/',
        //                    // 自动建议每一项的生成
        //                    function (data) {
        //                        return '<div class="suggest-item">' + data.tag_name + '</div>';
        //                    },
        //                    // 当点击建议项时执行的函数 
        //                    function (element) {
        //                        main.renderItem($(element).text());
        //                    }
        //                ).bind({
        //                    blur: function (e) {
        //                        if (main.tipItem.is(':hidden')) {
        //                            main.renderInput(e.target.value);
        //                        }
        //                    }
        //                }),
        //                // 输入框的原始宽度
        //                inputWidth: main.find('div.recText').width()

        //            }).renderTag(main.inputWidth);
        //        }
        //    }
        //});

        //if ($(main).find("div.recText").find("input").length > 0) {
        //    main.extend({
        //        tagArr: [],
        //        tipItem: main.find('div.SQ_searchTips'),
        //        inputItem: main.find('input').showSuggest(
        //            // 自动建议的包装项
        //            main.find('div.SQ_searchTips'),
        //            // 自动建议的请求地址 
        //            '/Tag/suggest/keyword/',
        //            // 自动建议每一项的生成
        //            function (data) {
        //                return '<div class="suggest-item">' + data.tag_name + '</div>';
        //            },
        //            // 当点击建议项时执行的函数 
        //            function (element) {
        //                main.renderItem($(element).text());
        //            }
        //        ).bind({
        //            blur: function (e) {
        //                if (main.tipItem.is(':hidden')) {
        //                    main.renderInput(e.target.value);
        //                }
        //            }
        //        }),
        //        // 输入框的原始宽度
        //        inputWidth: main.find('div.recText').width()

        //    }).renderTag(main.inputWidth);
        //}

        main.extend({
            tagArr: [],
            tipItem: main.find('div.SQ_searchTips'),
            inputItem: main.find('input').showSuggest(
                // 自动建议的包装项
                main.find('div.SQ_searchTips'),
                // 自动建议的请求地址 
                '/Tag/suggest/keyword/',
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
        if (tagData) {
            jQuery.get('/Tag/detail', {'target': tagData.target, 'targetid': tagData.targetid}, function (data) {
                for (i in data) {
                    main.renderItem(data[i].tag_name, main.inputWidth);
                }
            }, 'json');
        }

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
                        case 13: // 回车
                            main.renderInput(e.target.value);
                            break;
                        case 32: // ' '
                            var origin_value = e.target.value;
                            // 如果最后一个字符是空格
                            if (origin_value.charAt(origin_value.length - 1) == ' ') {
                                value = jQuery.trim(e.target.value);
                                main.renderInput(value);
                            }
                            break;
                        default :
                            if (e.target.value.length > 12){
                                promptMessageDialog('每个标签最长12个汉字', true);
                                main.renderInput(e.target.value.slice(0, 12));
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
                    //if ($(main).find("div.recText").find("span.tag-item").length == 0 && main.inputItem.val() == "") {
                    //    $(main).find("div.recText").html('<p class="grayTxt2">点击输入标签，标签间请用“逗号”隔开，最多可添加5个标签。</p>');
                    //}
                }
            },
            // 渲染一个标签
            renderItem: function (value, parentWidth) {
                // 一个对象的标签数量不得超过5个
                if (main.find('span.tag-item').length < 5) {
                    // 如果已有标签中不存在
                    if(main.tagArr && $.inArray(value, main.tagArr) < 0){
                        main.tagArr.push(value);
                        main.inputItem.before('<span class="tag-item">' + value + '<input type="hidden" name="tags[]" value="' + value + '"><em class="del"><em></em></em></span>').val('');
                        if (parentWidth == 'undefined') {
                            parentWidth = inputWidth;
                        }
                        main.inputItem.autoWidth(parentWidth);
                        main.initTagItem(main.tagArr);
                    }
                } else {
                    promptMessageDialog('最多只能有5个标签!', true);
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
                    var inputItem = $target.parents('span.tag-item');
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