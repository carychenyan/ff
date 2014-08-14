
//图片滚动效果
var initAlumList = function () {
    var url = "";

    //滚动效果
    $('span[name="preAlbum"]').on('click', function () {
        toLeft();
    });
    $('span[name="nextAlbum"]').on('click', function () {
        toRight();
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
            $('em[name="preStudent"]').css('background', 'url(' + url + '/assets/img/spaceSpr.png) no-repeat -12px top');
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
    function toRight() {
        if ($("#albumConDiv").is(":animated")) {
            return;
        }
        var toLeftLimit = ($("#albumConDiv")[0].clientWidth / $("#albumShow")[0].clientWidth - 1) * $("#albumShow")[0].clientWidth;
        if ($("#albumConDiv").offset().left > 5 - (toLeftLimit - $("#albumShow").offset().left)) {
            $("#albumConDiv").animate({ left: $("#albumConDiv").offset().left - $("#albumShow").offset().left - $("#albumShow")[0].clientWidth }, 1000);
        }
    }
    //向前滚动
    function toLeft() {
        if ($("#albumConDiv").is(":animated")) {
            return;
        }
        var toLeftLimit = ($("#albumConDiv")[0].clientWidth / $("#albumShow")[0].clientWidth - 1) * $("#albumShow")[0].clientWidth;
        if ($("#albumConDiv").offset().left < $("#albumShow").offset().left - 5) {
            $("#albumConDiv").animate({ left: $("#albumConDiv").offset().left - $("#albumShow").offset().left + $("#albumShow")[0].clientWidth }, 1000);
        }
    }
}