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