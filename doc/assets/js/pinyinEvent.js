jQuery(function ($) {
    var ss = '[{"user_name":"张云飞","user_avatar":"http://dev-images.dodoedu.com/shequPage/common/image/info-b-16.gif","user_id":"x36201286406426200082"},{"user_name":null,"user_avatar":"http://dev-images.dodoedu.com/shequPage/common/image/info-16.gif","user_id":"s35961526105413330064"},{"user_name":"数学老师","user_avatar":"http://dev-images.dodoedu.com/image/20131358737477-42-7630-6744-16.jpg","user_id":"w36451978107373010061"},{"user_name":"吴亚","user_avatar":"http://dev-images.dodoedu.com/image/20131366096313-15578-3735-1228-16.jpg","user_id":"l36192921701848370038"},{"user_name":"覃然","user_avatar":"http://dev-images.dodoedu.com/image/20131363256642-38-8555-4259-16.jpg","user_id":"q35787441502121380034"},{"user_name":"徐杰","user_avatar":"http://dev-images.dodoedu.com/image/20131365387797-15696-3030-4448-16.jpg","user_id":"m36359802300862200030"},{"user_name":"刘杰","user_avatar":"http://dev-images.dodoedu.com/image/20131358737477-42-7630-6744-16.jpg","user_id":"l35789637007221180030"}]';
    var p = JSON.parse(ss);
    var allPersonObj = null;
    var someoneHTML = function (person) {
        allPersonObj = person;
        var html = '';
        if (allPersonObj.length > 0) {
            allPersonObj
            for (var i in allPersonObj) {
                // 建立拼音查询索引缓存
                engine.setCache([allPersonObj[i].user_name], allPersonObj[i]);
                html += '<div class="userCell" user_id="' + allPersonObj[i].user_id + '" user_name="' + allPersonObj[i].user_name + '"><img src="' + allPersonObj[i].user_avatar + '" alt="' + allPersonObj[i].user_name + '">' + allPersonObj[i].user_name + '</div>';
            };
            html += '<div class="clear"></div>';
            $("div.resultsBox").html(html);
            $("span.andSomeone div.resultsBox").css("height", "auto");
            $("div.resultsBox").find("div.userCell").hover(function () {
                $(this).addClass("bgColor");
            }, function () {
                $(this).removeClass("bgColor");
            });
        }
    };
    var engine = pinyinEngine();//拼音搜索对象实例化;
    someoneHTML(p);
    // 拼音快速查询
    var pinyinSearch = function (keyword) {
        engine.search(keyword, function (data) {
            if (data.length > 0) {
                var html = '';
                for (var j = 0; j < data.length; j++) {
                    html += '<div class="userCell" user_id="' + data[j].content.user_id + '" user_name="' + data[j].content.user_name + '"><img src="' + data[j].content.user_avatar + '" alt="' + data[j].content.user_name + '">' + data[j].content.user_name + '</div>';
                }
                html += '<div class="clear"></div>';
                $("div.resultsBox").html(html);
                $("span.andSomeone div.resultsBox").css("height", "auto");
                $("div.resultsBox").find("div.userCell").hover(function () {
                    $(this).addClass("bgColor");
                }, function () {
                    $(this).removeClass("bgColor");
                });
            }
            else {
                var html = '';
                for (var j = 0; j < allPersonObj.length; j++) {
                    html += '<div class="userCell" user_id="' + allPersonObj[j].user_id + '" user_name="' + allPersonObj[j].user_name + '"><img src="' + allPersonObj[j].user_avatar + '" alt="' + allPersonObj[j].user_name + '">' + allPersonObj[j].user_name + '</div>';
                }
                html += '<div class="clear"></div>';
                $("div.resultsBox").html(html);
                $("span.andSomeone div.resultsBox").css("height", "auto");
                if ($("span.andSomeone div.resultsBox").height() > 177) {
                    $("span.andSomeone div.resultsBox").css("height", "177px");
                    $("span.andSomeone div.resultsBox").jscroll({ W: "8px" });
                }
                $("div.resultsBox").find("div.userCell").hover(function () {
                    $(this).addClass("bgColor");
                }, function () {
                    $(this).removeClass("bgColor");
                });
            }
        });
    };

    var timer;
    var $input = $('.SQ_searchText');
    var oldVal = $input.val();
    $input.bind('focus', function () {
        if ($input.val()=='输入姓名或首字母进行搜索') {
            $input.val('');
        }
    });
    $input.bind('blur', function () {
        if ($input.val() == '') {
            $input.val('输入姓名或首字母进行搜索');
        }
    });
    // 绑定输入事件
    $input[0].oninput = $input[0].onpropertychange = function () {
        var val = $input.val();
        if (val === oldVal) return;
        oldVal = $input.val();

        clearTimeout(timer);
        timer = setTimeout(function () {
            pinyinSearch(val);
        }, 40); // 延时可以减小查询频率
    };
});