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