function AjaxForJson(requestUrl, requestData, SuccessCallback, errorCallback, successPar) {
    //alert(requestUrl);
}

//标为喜欢和取消喜欢
var likeOrNolike = {
    init: function (obj) {
        //标为喜欢事件
        $(document).on("click", ".noLikeIcon", function () {
            likeOrNolike.toBeLike(this, $(this).attr("comment_type"), $(this).attr("content_id"));
        });
        $(document).on("click", ".likeIcon", function () {
            likeOrNolike.toBeNolike(this, $(this).attr("comment_type"), $(this).attr("content_id"));
        });
    },
    toBeLike: function (that, comment_type, comment_id) {
        var requestUrl = "/widget/ThreeExtend/addAssessAjax";
        var requestData = "type=" + comment_type + "&type_id=" + comment_id;
        function responesFun(data) {
            if (data == "success") {//if (data.type == "success") {
                $(that).attr("class", "likeIcon");
                $(that).attr("titleCon", "取消喜欢");
                $(that).parent().find("span[name='assessFont']").html("取消喜欢");
                $(that).parent().find("span[name='likeCount']").text(parseInt($(that).parent().find("span[name='likeCount']").text()) + 1);
            }
            else {//if (data.type == "login") {
                alert('FAIL');
            }
        }
        responesFun('success');
        //   AjaxForJson(requestUrl, requestData, responesFun, null, null);
    },
    toBeNolike: function (that, comment_type, comment_id) {
        var requestUrl = "/widget/ThreeExtend/cancelAssessAjax";
        var requestData = "type=" + comment_type + "&type_id=" + comment_id;
        function responesFun(data) {
            if (data == "success") {//if (data.type == "success") {
                $(that).attr("class", "noLikeIcon");
                $(that).attr("titleCon", "标为喜欢");
                $(that).parent().find("span[name='assessFont']").html("喜欢");
                $(that).parent().find("span[name='likeCount']").text(parseInt($(that).parent().find("span[name='likeCount']").text()) - 1);
            }
            else {//if (data.type == "login") {
                // loginDialog();
            }
        }
        responesFun('success');
        //AjaxForJson(requestUrl, requestData, responesFun, null, null);
    }
};

//动态加载更多
var loadMore = {
    isEnd: false,
    pageNum: 1,
    init: function (url, params, functionName) {
        //绑定加载更多事件
        document.getElementById("showMoreDiv").onclick = function () {
            //var requestUrl = commonParams.dodoDevPath + "/Home/allNews";
            loadMore.pageNum = loadMore.pageNum + 1;
            //var requestData = "page=" + loadMore.pageNum + "&target=" + $("#trendsNavtypeCircle").attr("name") + "&scope=" + $("#trendsNavtype").attr("name");
            //var reponseFun = initFreshNewsHTML.FreshNewsHTMLs;
            loadMore.show(url, params, functionName)
        };
    },
    show: function (requestUrl, requestData, reponseFun) {
        if (!this.isEnd) {
            document.getElementById("showMoreDiv").style.display = "none";
            document.getElementById("pageLoadingDiv").style.display = "block";
            //  AjaxForJson(requestUrl, requestData, reponseFun, null);
            initList();
        }
        else {
            document.getElementById("showMoreDiv").style.display = "none";
            document.getElementById("pageLoadingDiv").style.display = "none";
            return false;
        }
    }
};
var initList = function () {
    alert('test load more');
}


//图片滚动器
var playPic = {
	//按钮 滚动容器  每张图片宽度 
    initPicPlayer: function (btnObj, animteObjName,imgWidth) {
        var btns = btnObj;
        //选中的按钮
        var selectedBtn;
        //自动播放的id
        var playID;
        //选中图片的索引
        var selectedIndex;
        //选中的图片
        var selectedItem;
        //选中的按钮
        var selectedBtn;
        //自动播放的id
        var playID;
        //选中图片的索引
        var selectedIndex;
        for (var i = 0; i < btns.length; i++) {
            (function () {
                var index = i;
                btns[i].onclick = function () {
                    if (selectedBtn == this) {
                        return;
                    }
                    setSelectedItem(index);
                    return false;
                };
            })();
        }
        setSelectedItem(0);
        function setSelectedItem(index) {
            selectedIndex = index;
            clearInterval(playID);
            $("#" + animteObjName).animate({ left: -imgWidth* index }, 500, function () {
                //自动播放方法
                playID = setTimeout(function () {
                    var index = selectedIndex + 1;
                    if (index >= btns.length)
                        index = 0;
                    setSelectedItem(index);
                }, 5000);
            });
            if (selectedBtn) {
                selectedBtn.className = "";
            }
            selectedBtn = btns[parseInt(index)];
            btns.removeAttr('class');
            var that = btns[selectedIndex];
            $(that).attr('class', 'current');
        }
    }
}


//回到顶部和用户反馈
function feedbackAndTotop() {
    //返回顶部功能实现
    $(".backTop").bind("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 200);
        backTop();
    });
    $(".backTop").bind("mouseover", function () {
        $(this).addClass("active");
    });
    $(".backTop").bind("mouseout", function () {
        $(this).removeClass("active");
    });
    window.onscroll = backTop;
    function backTop() {
        var bodyScrollTop = "";
        if (document.documentElement && document.documentElement.scrollTop) {
            bodyScrollTop = document.documentElement.scrollTop;
        }
        else if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }

        var st = $(document).scrollTop(), winh = $(window).height();
        if (!window.XMLHttpRequest) {
            $(".floatBox").css("top", st + winh - 66);
        }
        if (bodyScrollTop == 0) {
            $(".backTop").css("display", "none");
        } else {
            $(".backTop").css("display", "block");
        }
    }
    //用户反馈功能实现
    $(".feedback").bind("mouseover", function () {
        $(this).html("用户反馈");
    });
    $(".feedback").bind("mouseout", function () {
        $(this).html("<span></span>");
    });
    $(".feedback").bind("click", function () {
        //feedbackDialog();
        alert('用户反馈功能');
    });
}

//收藏和取消收藏
var collectOrNot = {
    init: function () {
        //收藏事件
        $("a[name='collectQuestion']").die().live("click", function () {
            if ($(this).html() == "收藏") {
                collectOrNot.toCollect($(this), "Question", $(this).parents('.SQFAQs_list').attr("faq_id"), "personal");
                $(this).attr("titlecon", "从收藏夹里取消");
            }
            else {
                collectOrNot.toNoCollect($(this), "Question", $(this).parents('.SQFAQs_list').attr("faq_id"));
                $(this).attr("titlecon", "添加到我的收藏夹");
            }
            return false;
        });
    },
    toCollect: function (that, comment_type, comment_id, store_come_from) {
        var requestUrl = commonParams.dodoDevPath + "/Collect/addCollectAjax";
        var requestData = "type=" + comment_type + "&type_id=" + comment_id + "&store_come_from=" + store_come_from;
        function responesFun(data) {
            if (data.type == "success") {
                that.html("取消收藏");
                that.parent().attr("titleCon", "取消收藏");
                //that.parent().find("span[name='collectCount']").text(parseInt($(that).parent().find("span[name='collectCount']").text()) + 1);
            }
            else if (data.type == "login") {
                loginDialog();
            }
        }
        AjaxForJson(requestUrl, requestData, responesFun, null, null);
    },
    toNoCollect: function (that, comment_type, comment_id) {
        var requestUrl = commonParams.dodoDevPath + "/Collect/delCollectAjax";
        var requestData = "type=" + comment_type + "&type_id=" + comment_id;
        function responesFun(data) {
            if (data.type == "success") {
                that.html("收藏");
                that.parent().attr("titleCon", "收藏");
                //that.parent().find("span[name='collectCount']").text(parseInt($(that).parent().find("span[name='collectCount']").text()) - 1);
            }
            else if (data.type == "login") {
                loginDialog();
            }
        }
        AjaxForJson(requestUrl, requestData, responesFun, null, null);
    }
};
//输入框列表
var inputList = {
    //用户列表 鼠标经过
    currentIndex: null,
    init: function () {
        $('#userName').unbind().bind({
            blur: function (e) { // 检测该用户名登录失败的次数
                if (this.value == "") {
                    $("label[name='userNameDefault']").html("请输入您的社区账户");
                    $("label[name='userNameDefault']").css("color", "#999");
                }
                else {
                    // 用户名检测成功后，清除错误信息
                    $('#userNameMsg').hide();
                    //var data = { 'uName': e.target.value };
                    //$.get('/userSignUp/isMustCaptcha', data, function (ErrCnt) {
                    //    if (ErrCnt) { // 如果登陆失败超过三次，则显示验证码
                    //        main.showCaptcha(true);
                    //    }
                    //});
                }
            },
            focus: function (e) {
                if (this.value != "") {
                    $("label[name='userNameDefault']").html("");
                }
                $("label[name='userNameDefault']").css("color", "#d5d5d5");
                $('#userName')[0].onkeydown = function () {
                    $("label[name='userNameDefault']").html("");
                }
                if ($('#email_tips').css('display') == 'none' && $("#email_tips li").length > 0) {
                    $('#email_tips').css('display', 'block');
                }
            },
            keydown: function (e) {
                switch (e.keyCode) {
                    // 向下键
                    case 40:
                        if (inputList.currentIndex == null || inputList.currentIndex >= $("#email_tips li").length - 1) {
                            inputList.currentIndex = -1;
                        };
                        inputList.currentIndex += 1;
                        inputList.focusCurrent(inputList.currentIndex);
                        break;
                        // 向上键
                    case 38:
                        if (inputList.currentIndex == null || inputList.currentIndex <= 0) {
                            inputList.currentIndex = $("#email_tips li").length;
                        };
                        inputList.currentIndex -= 1;
                        inputList.focusCurrent(inputList.currentIndex);
                        break;
                        // 回车键
                    case 13:
                        // 阻止回车提交事件
                        e.preventDefault();
                        $('#userNameMsg').hide();
                        inputList.userRender(inputList.currentIndex);
                        break;
                }
                if (e.keyCode == "9") {
                    $('#email_tips').css('display', 'none');
                }
            }
        });
        $("label[name='userNameDefault']").bind({
            click: function (e) {
                $('#userName')[0].focus();
            }
        });
        $('#email_tips li').unbind().bind({
            mouseover: function (e) {
                $("#email_tips li").attr('class', '');
                $(this).attr('class', 'active');
                inputList.currentIndex = inputList.getCurrentIndex($(this).find('span[name="spanUserName"]').html());
            },
            mouseout: function (e) {
                $(this).attr('class', '');
                inputList.currentIndex = inputList.getCurrentIndex($(this).find('span[name="spanUserName"]').html());
                return false;
            },
            click: function (e) {
                inputList.currentIndex = inputList.getCurrentIndex($(this).find('span[name="spanUserName"]').html());
                inputList.focusCurrent(inputList.currentIndex);
                inputList.userRender(inputList.currentIndex);
                return false;
            }
        }),
        $('#email_tips span[name="delUserName"]').unbind().bind({
            click: function (e) {
                inputList.currentIndex = inputList.getCurrentIndex($(this).parents('li').find('span[name="spanUserName"]').html());
                var val = $(this).parents('li').find('span[name="spanUserName"]').html();
                setUserList('success');
                //AjaxForJson(commonParams.dodoDevPath + '/userSignUp/clsCookie/uName/' + val, '', setUserList, null);
                function setUserList(data) {
                    if (data = "success") {
                        $($('#email_tips li')[inputList.currentIndex]).remove();
                        if ($('#email_tips li').length < 1) {
                            $('#email_tips').css('display', 'none');
                        }
                        if (val == $('#userName').val()) {
                            $('#userName').val('');
                        }
                    }
                }
                return false;
                return false;
            }
        }),
        //点击其他地方收起用户列表
        document.onclick = function (e) {
            e = e ? e : event;
            var srcEle = e.target || e.srcElement;
            if (srcEle.parentNode != undefined) { }
            if (srcEle.className == "email_tips" || srcEle.id == "userName" || srcEle.innerHTML == "请输入您的社区账户") {
                return;
            }
            else if (srcEle.parentNode && srcEle.parentNode.className == "email_tips") {
                return;
            }
            else {
                $("#email_tips").css('display', 'none');
            }
        };
    },
    getCurrentIndex: function (val) {
        for (var i = 0; i < $("#email_tips li").length; i++) {
            if (val == $($("#email_tips li")[i]).find('span[name="spanUserName"]').html()) {
                return i;
            }
        }
        return null;
    },
    focusCurrent: function (currentIndex) {
        $("#email_tips li").attr('class', '');
        $($("#email_tips li")[currentIndex]).attr('class', 'active');
    },
    userRender: function (currentIndex) {
        if (currentIndex != null) {
            $("label[name='userNameDefault']").html("");
            $('#userName').val($($("#email_tips li")[currentIndex]).find('span[name="spanUserName"]').html());
        }
        $('#email_tips').css('display', 'none');
    }
}

//scroll
function checkVer() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    //以下进行测试
    if (Sys.ie) return 'IE';//document.write('IE: ' + Sys.ie);
    if (Sys.firefox) return 'Firefox';// document.write('Firefox: ' + Sys.firefox);
    if (Sys.safari) return 'Safari';// document.write('Safari: ' + Sys.safari);
    if (Sys.chrome) return 'Chrome';// document.write('Chrome: ' + Sys.chrome);
    if (Sys.opera) return 'Opera';// document.write('Opera: ' + Sys.opera);
}
$.fn.extend({
    mousewheel: function (Func) {
        return this.each(function () {
            var _self = this;
            _self.D = 0;
            var browser = checkVer();
            if (browser == "IE" || browser == "Safari" || browser == 'Chrome') {//($.browser.msie || $.browser.safari) {
                _self.onmousewheel = function () { _self.D = event.wheelDelta; event.returnValue = false; Func && Func.call(_self); };
            } else {
                _self.addEventListener("DOMMouseScroll", function (e) {
                    _self.D = e.detail > 0 ? -1 : 1;
                    e.preventDefault();
                    Func && Func.call(_self);
                }, false);
            }
        });
    }
});
$.fn.extend({
    jscroll: function (j) {
        var color = "#d1d1d1";
        return this.each(function () {
            j = j || {}
            j.Bar = j.Bar || {};
            j.Btn = j.Btn || {};
            j.Bar.Bg = j.Bar.Bg || {};
            j.Bar.Bd = j.Bar.Bd || {};
            j.Btn.uBg = j.Btn.uBg || {};
            j.Btn.dBg = j.Btn.dBg || {};
            var jun = {
                W: "10px",
                BgUrl: "",
                Bg: "#efefef",
                Bar: {
                    Pos: "up",
                    Bd: { Out: "#b5b5b5", Hover: "#ccc" },
                    Bg: { Out: "#fff", Hover: "#fff", Focus: color }
                },
                Btn: {
                    btn: true,
                    uBg: { Out: "#ccc", Hover: "#fff", Focus: color },
                    dBg: { Out: "#ccc", Hover: "#fff", Focus: color }
                },
                Fn: function () { }
            }
            j.W = j.W || jun.W;
            j.BgUrl = j.BgUrl || jun.BgUrl;
            j.Bg = j.Bg || jun.Bg;
            j.Bar.Pos = j.Bar.Pos || jun.Bar.Pos;
            j.Bar.Bd.Out = j.Bar.Bd.Out || jun.Bar.Bd.Out;
            j.Bar.Bd.Hover = j.Bar.Bd.Hover || jun.Bar.Bd.Hover;
            j.Bar.Bg.Out = j.Bar.Bg.Out || jun.Bar.Bg.Out;
            j.Bar.Bg.Hover = j.Bar.Bg.Hover || jun.Bar.Bg.Hover;
            j.Bar.Bg.Focus = j.Bar.Bg.Focus || jun.Bar.Bg.Focus;
            j.Btn.btn = j.Btn.btn != undefined ? j.Btn.btn : jun.Btn.btn;
            j.Btn.uBg.Out = j.Btn.uBg.Out || jun.Btn.uBg.Out;
            j.Btn.uBg.Hover = j.Btn.uBg.Hover || jun.Btn.uBg.Hover;
            j.Btn.uBg.Focus = j.Btn.uBg.Focus || jun.Btn.uBg.Focus;
            j.Btn.dBg.Out = j.Btn.dBg.Out || jun.Btn.dBg.Out;
            j.Btn.dBg.Hover = j.Btn.dBg.Hover || jun.Btn.dBg.Hover;
            j.Btn.dBg.Focus = j.Btn.dBg.Focus || jun.Btn.dBg.Focus;
            j.Fn = j.Fn || jun.Fn;
            var _self = this;
            var Stime, Sp = 0, Isup = 0;
            $(_self).css({ overflow: "hidden", position: "relative" });
            var dw = $(_self).width(), dh = $(_self).height() - 1;
            var sw = j.W ? parseInt(j.W) : 21;
            var sl = dw - sw
            var bw = 0;
            if ($(_self).children(".jscroll-c").height() == null) {
                $(_self).wrapInner("<div class='jscroll-c' style='top:0px;z-index:9999;zoom:1;position:relative'></div>");
                $(_self).children(".jscroll-c").prepend("<div style='height:0px;overflow:hidden'></div>");
                $(_self).append("<div class='jscroll-e' unselectable='on' style=' height:100%;top:0px;right:0;-moz-user-select:none;position:absolute;overflow:hidden;z-index:10000;border-radius:8px;padding:0;'><div class='jscroll-h'  unselectable='on' style='background:green;position:absolute;left:0;-moz-user-select:none;border:1px solid;border-radius:8px;padding:0;'></div></div>");//<div class='jscroll-u' style='position:absolute;top:0px;width:100%;left:0;background:blue;overflow:hidden'></div><div class='jscroll-d' style='position:absolute;bottom:0px;width:100%;left:0;background:blue;overflow:hidden'></div>
            }
            var jscrollc = $(_self).children(".jscroll-c");
            var jscrolle = $(_self).children(".jscroll-e");
            var jscrollh = jscrolle.children(".jscroll-h");
            var scrollH = false;
            //var jscrollu = jscrolle.children(".jscroll-u");
            //var jscrolld = jscrolle.children(".jscroll-d");
            var browser = checkVer();
            if (browser == "IE") { document.execCommand("BackgroundImageCache", false, true); }
            jscrollc.css({ "padding-right": sw });
            jscrolle.css({ width: sw, background: j.Bg, "background-image": j.BgUrl });
            jscrollh.css({ top: bw, background: j.Bar.Bg.Out, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Out, width: sw - 2 });
            //jscrollu.css({ height: bw, background: j.Btn.uBg.Out, "background-image": j.BgUrl });
            //jscrolld.css({ height: bw, background: j.Btn.dBg.Out, "background-image": j.BgUrl });
            jscrollh.hover(function () { if (Isup == 0) $(this).css({ background: j.Bar.Bg.Hover, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Hover }) }, function () { if (Isup == 0) $(this).css({ background: j.Bar.Bg.Out, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Out }) })
            //jscrollu.hover(function () { if (Isup == 0) $(this).css({ background: j.Btn.uBg.Hover, "background-image": j.BgUrl }) }, function () { if (Isup == 0) $(this).css({ background: j.Btn.uBg.Out, "background-image": j.BgUrl }) })
            //jscrolld.hover(function () { if (Isup == 0) $(this).css({ background: j.Btn.dBg.Hover, "background-image": j.BgUrl }) }, function () { if (Isup == 0) $(this).css({ background: j.Btn.dBg.Out, "background-image": j.BgUrl }) })
            var sch = jscrollc.height();
            var sh = (dh - 2 * bw) * dh / sch
            if (sh < 10) { sh = 10 }
            var wh = sh / 6
            var curT = 0, allowS = false;
            jscrollh.height(sh);
            if (sch <= dh) {
                jscrollc.css({ padding: 0 }); jscrolle.css({
                    display: "none"
                })
            } else { allowS = true; }
            if (j.Bar.Pos != "up") {
                curT = dh - sh - bw;
                setT();
            }
            jscrollh.bind("mousedown", function (e) {
                scrollH = true;
                j['Fn'] && j['Fn'].call(_self);
                Isup = 1;
                jscrollh.css({ background: j.Bar.Bg.Focus, "background-image": j.BgUrl })
                var pageY = e.pageY, t = parseInt($(this).css("top"));
                $(document).mousemove(function (e2) {
                    if (scrollH) {
                        curT = t + e2.pageY - pageY;
                        setT();
                    }
                });
                $(document).mouseup(function () {
                    Isup = 0;
                    jscrollh.css({ background: j.Bar.Bg.Out, "background-image": j.BgUrl, "border-color": j.Bar.Bd.Out })
                    scrollH = false;
                    //$(document).unbind();
                });
                return false;
            });
            _self.timeSetT = function (d) {
                var self = this;
                if (d == "u") { curT -= wh; } else { curT += wh; }
                setT();
                Sp += 2;
                //var t = 500 - Sp * 50;
                //if (t <= 0) { t = 0 };
                Stime = setTimeout(function () { self.timeSetT(d); }, 100);
            }
            jscrolle.bind("mousedown", function (e) {
                j['Fn'] && j['Fn'].call(_self);
                curT = curT + e.pageY - jscrollh.offset().top - sh / 2;
                asetT();
                return false;
            });
            function asetT() {
                if (curT < bw) { curT = bw; }
                if (curT > dh - sh - bw) { curT = dh - sh - bw; }
                jscrollh.stop().animate({ top: curT }, 100);
                var scT = -((curT - bw) * sch / (dh - 2 * bw));
                jscrollc.stop().animate({ top: scT }, 1000);
            };
            function setT() {
                if (curT < bw) { curT = bw; }
                if (curT > dh - sh - bw) { curT = dh - sh - bw; }
                jscrollh.css({ top: curT });
                var scT = -((curT - bw) * sch / (dh - 2 * bw));
                jscrollc.css({ top: scT });
            };
            $(_self).mousewheel(function () {
                if (allowS != true) return;
                j['Fn'] && j['Fn'].call(_self);
                if (this.D > 0) { curT -= wh; } else { curT += wh; };
                setT();
            })
        });
    }
});

//图片滚动效果
var initAlumList = function () {
    var url = "";
    var listIndex = 0;

    //滚动效果
    $('span[name="preAlbum"]').on('click', function () {
        toLeft(false);
        listIndex -= 1;
    });
    $('span[name="nextAlbum"]').on('click', function () {
        toRight(false);
        listIndex += 1;
    });
    //点击用户div 
    $('.stuShow  .stuShowCell').on('click', function () {
        $('.stuShow  .stuShowCell').attr('class', 'stuShowCell floatL cursor_hand');
        $(this).attr('class', 'stuShowCell stuShowActive floatL cursor_hand');
        //RecordParms.user_id = $(this).attr('uid');
        //initRecordList();
        //setUserInfo();

        //点击头像时，更改切换的图标
        var thatPrev = $('#albumShow').find('.stuShowActive').prev('.stuShowCell');
        if (thatPrev.html() == null) {
            //第一个
            $('em[name="preStudent"]').css('background', 'url('+url+'/assets/img/spaceSpr.png) no-repeat -12px top');
        } else {
            $('em[name="preStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat 0px top');
        }
        var thatNext = $('#albumShow').find('.stuShowActive').next('.stuShowCell');
        if (thatNext.html() == null) {
            //最后一个
            $('em[name="nextStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat -36px top');
        } else {
            $('em[name="nextStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat -24px top');
        }

        return false;
    });
    $('em[name="preStudent"]').on('click', function () {
        var that = $('#albumShow').find('.stuShowActive').prev('.stuShowCell');
        if (that.html() != null) {
            that.next('.stuShowCell').attr('class', 'stuShowCell floatL cursor_hand');
            that.attr('class', 'stuShowCell stuShowActive floatL cursor_hand');
          //  RecordParms.user_id = that.attr('uid');
           // initRecordList();
            //setUserInfo();
            var alumIndex = $('#albumShow').find('.stuShowActive').index() + 1;// $.inArray($('em[name="preStudent"]'), $(this));
            if (alumIndex % 9 == 0) {
                toLeft();
            }
            $('em[name="nextStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat -24px top');
        }
        else {
            return false;
        }
        if (that.prev('.stuShowCell').html() == null) {
            //第一个
            $('em[name="preStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat -12px top');
            $('em[name="nextStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat -24px top');
        }
        return false;
    });
    $('em[name="nextStudent"]').on('click', function () {
        var that = $('#albumShow').find('.stuShowActive').next('.stuShowCell');
        if (that.html() != null) {
            that.prev('.stuShowCell').attr('class', 'stuShowCell floatL cursor_hand');
            that.attr('class', 'stuShowCell stuShowActive floatL cursor_hand');
            //RecordParms.user_id = that.attr('uid');
            //initRecordList();
            //setUserInfo();
            var alumIndex = $('#albumShow').find('.stuShowActive').index();// $.inArray($('em[name="preStudent"]'), $(this));
            if (alumIndex % 9 == 0) {
                toRight();
            }
            $('em[name="preStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat 0px top');
        }
        else {
            return false;
        }
        if (that.next('.stuShowCell').html() == null) {
            //最后一个
            $('em[name="preStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat 0px top');
            $('em[name="nextStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat -36px top');
        }
        return false;
    });
    //添加总数
    function initAlbum() {
        var num = $("#albumConDiv .stuShowCell ").length % 9 == 0 ? $("#albumConDiv .stuShowCell ").length / 9 : (parseInt($("#albumConDiv .stuShowCell ").length / 9) + 1);
        document.getElementById("albumConDiv").style.width = num * 621 + "px";
    }

    //向后滚动
    function toRight(isEm) {
        if ($("#albumConDiv").is(":animated")) {
            return;
        }
        var toLeftLimit = ($("#albumConDiv")[0].clientWidth / $("#albumShow")[0].clientWidth - 1) * $("#albumShow")[0].clientWidth;
        if ($("#albumConDiv").offset().left > 5 - (toLeftLimit - $("#albumShow").offset().left)) {
            $("#albumConDiv").animate({ left: $("#albumConDiv").offset().left - $("#albumShow").offset().left - $("#albumShow")[0].clientWidth }, 1000);
        }
    }
    //向前滚动
    function toLeft(isEm) {
        if ($("#albumConDiv").is(":animated")) {
            return;
        }
        var toLeftLimit = ($("#albumConDiv")[0].clientWidth / $("#albumShow")[0].clientWidth - 1) * $("#albumShow")[0].clientWidth;
        if ($("#albumConDiv").offset().left < $("#albumShow").offset().left - 5) {
            $("#albumConDiv").animate({ left: $("#albumConDiv").offset().left - $("#albumShow").offset().left + $("#albumShow")[0].clientWidth }, 1000);
        }
    }
}

