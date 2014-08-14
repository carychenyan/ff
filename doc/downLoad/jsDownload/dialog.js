var timeObj = null;
function styleDialog(tittleCon, contentHTML, eventFun) {
    //document.body.parentNode.style.overflow = "hidden";
}
//显示弹出框
styleDialog.prototype.initDialogHTML = function () {
    $("body").eq(0).append('<div class="editFra"><h5><a class="floatR Popups_close" href="javascript:;" title="关闭"></a><strong></strong></h5><div id="editFraCon"></div></div><div id="divBg" class="pageBg"></div>');
    $("#divBg").css("display", "block");
    $(".editFra").css("display", "block");
    var closedialog = this.closeDialog;
    $(".editFra h5 .Popups_close").bind("click", function () {
        closedialog();
        return false;
    });
}
//现在弹框中的弹框
styleDialog.prototype.initInsideDialogHTML = function () {
    $("body").eq(0).append('<div name="insideDialog" class="editFra"><h5><a class="floatR Popups_close" href="javascript:;" title="关闭"></a><strong></strong></h5><div id="editFraDialogCon"></div></div><div id="insideDivBg" class="pageBg"></div>');
    $("#insideDivBg").css("display", "block");
    $("#insideDivBg").css("z-index", "911");
    $(".editFra[name='insideDialog']").css("z-index", "912");
    var closeinsidedialog = this.closeInsideDialog;
    $(".editFra h5 .Popups_close").bind("click", function () {
        closeinsidedialog();
        return false;
    });
}
//加载弹出框内容
styleDialog.prototype.initContent = function (tittleCon, contentHTML, eventFun) {
    $(".editFra h5 strong").text(tittleCon);
    $(".editFra #editFraCon").html(contentHTML);
    var browser=checkVer();
    //if (browser=='IE') {
    //    //解决IE7、IE6弹框宽度过大
    //    if ($.browser.version == "7.0" || $.browser.version == "6.0") {
    //        if ($(".editFra .editCon").attr("name")) {
    //            $(".editFra").css({
    //                "width": $(".editFra .editCon").attr("name").substr(5) + "px"
    //            });
    //        }
    //    }
    //}

    var windowWidth, windowHeight;
    if (document.documentElement.clientWidth == 0) {
        windowWidth = document.documentElement.offsetWidth;
    }
    else {
        windowWidth = document.documentElement.clientWidth;
    }
    if (document.documentElement.clientHeight == 0) {
        windowHeight = document.documentElement.offsetHeight;
    }
    else {
        windowHeight = document.documentElement.clientHeight;
    }
    var bodyScrollTop = 0;
    var bodyScrollLeft = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        bodyScrollTop = document.documentElement.scrollTop;
        bodyScrollLeft = document.documentElement.scrollLeft;
    }
    else if (document.body) {
        bodyScrollTop = document.body.scrollTop;
        bodyScrollLeft = document.body.scrollLeft;
    }
    var documentHeight = document.documentElement.clientHeight + document.documentElement.scrollHeight;
    var documentWidth = document.documentElement.clientWidth + document.documentElement.scrollWidth;
    var dialogHeight = $(".editFra")[0].clientHeight;
    var dialogWidth = $(".editFra")[0].clientWidth;
    $("#divBg").css({ "width": document.documentElement.scrollWidth, "height": document.documentElement.scrollHeight });
    var editFraTop = windowHeight / 2 - dialogHeight / 2 + bodyScrollTop >= 0 ? windowHeight / 2 - dialogHeight / 2 + bodyScrollTop : 0;
    var editFraLfet = windowWidth / 2 - dialogWidth / 2 + bodyScrollLeft >= 0 ? windowWidth / 2 - dialogWidth / 2 + bodyScrollLeft : 0;
    $(".editFra").css({
        "top": editFraTop,
        "left": editFraLfet
    });

    if (eventFun != null) {
        eventFun();
    }
}
//加入弹框中弹框的内容
styleDialog.prototype.initInsideDialogContent = function (tittleCon, contentHTML, eventFun) {
    $(".editFra[name='insideDialog'] h5 strong").text(tittleCon);
    $(".editFra[name='insideDialog'] #editFraDialogCon").html(contentHTML);
    //if ($.browser.msie) {
    //    //解决IE7、IE6弹框宽度过大
    //    if ($.browser.version == "7.0" || $.browser.version == "6.0") {
    //        if ($(".editFra[name='insideDialog'] .editCon").attr("name").indexOf("width") > -1) {
    //            $(".editFra[name='insideDialog']").css({
    //                "width": $(".editFra[name='insideDialog'] .editCon").attr("name").substr(5) + "px"
    //            });
    //        }

    //        if ($(".editFra[name='insideDialog'] .tipsCon").attr("name") == "width300") {
    //            $(".editFra[name='insideDialog']").css({
    //                "width": "300px"
    //            });
    //        }
    //    }
    //}

    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var bodyScrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        bodyScrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    var documentHeight = document.documentElement.clientHeight + document.documentElement.scrollHeight;
    var documentWidth = document.documentElement.clientWidth + document.documentElement.scrollWidth;
    var dialogHeight = $(".editFra[name='insideDialog']")[0].clientHeight;
    var dialogWidth = $(".editFra[name='insideDialog']")[0].clientWidth;
    $("#insideDivBg").css({ "width": document.documentElement.scrollWidth, "height": document.documentElement.scrollHeight });
    var editFraTop = windowHeight / 2 - dialogHeight / 2 + bodyScrollTop >= 0 ? windowHeight / 2 - dialogHeight / 2 + bodyScrollTop : 0;
    var editFraLfet = windowWidth / 2 - dialogWidth / 2 >= 0 ? windowHeight / 2 - dialogHeight / 2 + bodyScrollTop : 0;
    $(".editFra[name='insideDialog']").css({
        "top": editFraTop,
        "left": windowWidth / 2 - dialogWidth / 2
    });
    if (eventFun != null) {
        eventFun();
    }
}
//关闭弹出框
styleDialog.prototype.closeDialog = function () {
    document.body.parentNode.style.overflow = "";
    $(".editFra").remove();
    $("#divBg").remove();
    clearTimeout(timeObj);
}
//关闭弹框中弹框
styleDialog.prototype.closeInsideDialog = function () {
    document.body.parentNode.style.overflow = "";
    $(".editFra[name='insideDialog']").remove();
    $("#insideDivBg").remove();
}

//用户反馈弹出框
function feedbackDialog() {
    var feedbackDialogHTML = '<div class="editCon album userTxt" name="width400"><div><div>如果您在多多社区使用过程中有任何意见或者建议，欢迎将您的观点传达给我们。</div><div><textarea name="feedbackContent"></textarea><p class="grayTxt"><span id="feedbackConCount">0</span>/1000</p></div><div class="editSubBtn"><a href="javascript:;" name="sendFeed" title="提交反馈" class="btnA">提交反馈</a></div></div></div>';
    var styledialog = new styleDialog();
    styledialog.initDialogHTML();
    styledialog.initContent("用户反馈", feedbackDialogHTML, feedbackDialogEvent);
    function feedbackDialogEvent() {
        $(".editSubBtn a[name='sendFeed']").live("click", function () {
            if ($("textarea[name='feedbackContent']").val() == "") {
                return;
            }
            else {
                var requestData = "suggest_content=" + characterTransform($("textarea[name='feedbackContent']").val());
                function feedbackDialogReturn(data) {
                    promptMessageDialog(data.message);
                }
                AjaxForJson(commonParams.dodoDevPath + "/widget/ThreeExtend/addSuggest", requestData, feedbackDialogReturn, null);
            }
        });
        //绑定字数限制
        $("textarea[name='feedbackContent']").bind({
            keyup: function (e) {
                var e_value = e.target.value.substr(0, 1000);
                var len = e_value.length;
                $(this).val(e_value);
                $('#feedbackConCount').text(len);
                return this;
            }
        });
    }
}

function getQueryString(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//提示弹出框
function cueDialog(confirmFun, that, inside, content) {
    var cueContent = "确定要删除吗？删除后不可恢复。";
    if (content) {
        cueContent = content;
    }
    var cueHTML = '<div class="editCon album" name="width400"><div class="tipsCon"><span class="floatL"></span><p>' + cueContent + '</p></div><div class="editSubBtn alignCenter"><a href="javascript:;" name="confirm" class="btnA">确定</a><a href="javascript:;" name="cancel">取消</a></div></div>';
    var styledialog = new styleDialog();
    if (inside) {
        styledialog.initInsideDialogHTML();
        styledialog.initInsideDialogContent("提示", cueHTML, null);
    }
    else {
        styledialog.initDialogHTML();
        styledialog.initContent("提示", cueHTML, null);
    }
    $(".editSubBtn a[name='confirm']").unbind().bind("click", function () {
        var btnloading = new btnLoading(this);
        btnloading.toLoading();//提交按钮变loading图片
        confirmFun(that);
        return false;
    });
    $(".editSubBtn a[name='cancel']").unbind().bind("click", function () {
        if (inside) {
            styledialog.closeInsideDialog();
        }
        else {
            styledialog.closeDialog();
        }
        return false;
    });
}

//信息提示弹出框
function promptMessageDialog(dialogHTML, inside, block) {

    var dialogContent = '<div class="editCon" name="width300"><div class="tipsCon" name="width300"><span class="floatL"></span><p>' + dialogHTML + '</p></div></div>';
    var styledialog = new styleDialog();
    if (inside) {
        styledialog.initInsideDialogHTML();
        styledialog.initInsideDialogContent("提示", dialogContent);
    }
    else {
        styledialog.initDialogHTML();
        styledialog.initContent("提示", dialogContent);
    }
    if (block) {
        return;
    }
    else {
        timeObj = setTimeout(function () {
            if (inside) {
                styledialog.closeInsideDialog();
            }
            else {
                styledialog.closeDialog();
            }
        }, 3000);
    }
}