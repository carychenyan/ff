//jQuery(function ($) {
//    //$.dropdownSelect('customDropdownStyle1', 'customDropdown1MouseOver');
//    $.dropdownSelect('customDropdownStyle2', 'customDropdown1MouseOver customDropdown2MouseOver');
//    $.dropdownSelect('customDropdownStyle3');
//    $.dropdownInput('positionRelative');
//}); 
jQuery.extend({
    dropdownSelect: function (obj, mouseOverStyle) {
        //下拉框隐藏显示
        var timeParam;
        //$('.' + obj + " .dropdown_currentValue").live('mouseover', function () {
            $(document).on("mouseover", '.' + obj + " .dropdown_currentValue", function () {
            $('.' + obj).find('.dropdownItem').css('visibility', 'visible');
            $('.' + obj).attr('class', 'customDropdownWrap inlineBlock ' + obj + ' ' + mouseOverStyle);
            clearTimeout(timeParam);
        });
        //$('.' + obj + " .dropdown_currentValue").live('mouseout', function () {
            $(document).on("mouseout", '.' + obj + " .dropdown_currentValue", function () {
            timeParam = setTimeout(function () {
                $('.' + obj).find('.dropdownItem').css("visibility", "hidden");
                $('.' + obj).attr('class', 'customDropdownWrap inlineBlock ' + obj);

            }, 1000);
        });
       // $('.' + obj + " .dropdownItem").live('mouseover', function () {
            $(document).on("mouseover", '.' + obj + " .dropdownItem", function () {
            $(this).css('visibility', 'visible');
            clearTimeout(timeParam);
        });
         //$('.' + obj + " .dropdownItem").live('mouseout', function () {
           $(document).on("mouseout", '.' + obj + " .dropdownItem", function () {
            timeParam = setTimeout(function () {
                $('.' + obj).find('.dropdownItem').css("visibility", "hidden");
                $('.' + obj).attr('class', 'customDropdownWrap inlineBlock ' + obj);
            }, 1000);
        });
        $('.' + obj + ' .dropdownCell').bind('click', function () {
            $('.' + obj + ' .dropdownCell').find('a').attr('class', 'displayBlock curDefault grayA');
            $(this).find('a').attr('class', 'displayBlock curDefault grayA customDropdown_selectedValue');
            $('.' + obj).find('.dropdownItem').css("visibility", "hidden");
            $('.' + obj).attr('class', 'customDropdownWrap inlineBlock ' + obj);
            $(this).find('a').click();
            //$('.' + obj).find('.dropdownTxt').html($(this).find('a').html());
           // setOrderInfo($(this));
            return false;
        });
    },
    dropdownInput: function (obj) {
        $('.' + obj + ' .customForm_inputBoxGetFocus1').bind('focus', function () {
            $('.' + obj).find('.associateWrap').css('visibility', 'visible');
            return false;
        });
        $(document).on('click', '.' + obj + ' .associateCell', function () {
            $('.' + obj + ' .customForm_inputBoxGetFocus1').val($(this).find('a').html());
            $('.' + obj).find('.associateWrap').css('visibility', 'hidden');
            return false;
        });
        document.onclick = function (e) {
            e = e ? e : event;
            var srcEle = e.target || e.srcElement;
            if (srcEle.className.indexOf("customForm_inputBoxGetFocus1") < 0) {
                $('.' + obj).find('.associateWrap').css('visibility', 'hidden');
            }
        };
    },
    AjaxForJson: function (requestUrl, requestData, SuccessCallback, errorCallback, successPar) {
        alert(requestUrl);
    }
});
