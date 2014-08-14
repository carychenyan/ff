//jQuery(function ($) {
//    //$('.tab1Menu').tab1MenuChange();
//    $('.tab2Menu').tab2MenuChange();
//    //$('.tab3Menu').tab3MenuChange();
//   // $('.tab4Menu').tab4MenuChange();
//});
jQuery.fn.extend({    
    tab1MenuChange: function () {
        var main = this;
        main.find('li').css('cursor', 'pointer');
        main.extend({
            tab1Li: main.find('li.menuCell').bind({
                click: function (e) {
                    //如果是当前活动tab则不需请求
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        main.find('li.menuCell').attr('class', 'menuCell floatL');
                        $(this).attr('class', 'menuCell tabMenuCurrent floatL');
                        tabEvent($(this).attr('name'));
                    }
                    return false;
                }
            })
        })       
    },
    tab2MenuChange: function () {
        var main = this;
        main.find('li').css('cursor', 'pointer');
        main.extend({
            tab2Li: main.find('li.menuCell').bind({
                click: function (e) {
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        main.find('li.menuCell').attr('class', 'menuCell floatL');
                        $(this).attr('class', 'menuCell tabMenuCurrent floatL');
                        tabEvent($(this).attr('name'));
                    }
                    return false;
                }
            })
        })
    },
    tab3MenuChange: function () {
        var main = this;
        main.extend({
            tab3Li: main.find('li').bind({
                mouseover: function (e) {
                    //鼠标经过，如果不是活动TAB，则会高亮图标
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        var currentClass = $(this).find('i').attr('class').replace('Gray', '');
                        $(this).find('i').attr('class', currentClass);
                    }
                },
                mouseout: function (e) {
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        var currentClass = $(this).find('i').attr('class') + 'Gray';
                        $(this).find('i').attr('class', currentClass);
                    }
                },
                click: function (e) {
                    //鼠标经过，如果不是当前TAB，则会改变样式并作数据请求
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        var len = main.find('li').find('i').length;
                        for (var i = 0; i < len; i++) {
                            var newClass = main.find('li').find('i').eq(i - 1).attr('class');
                            if (newClass.indexOf('Gray') < 1 && $(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                                main.find('li').find('i').eq(i - 1).attr('class', newClass + 'Gray');
                            }
                        }
                        var currentClass = $(this).find('i').attr('class').replace('Gray', '');
                        $(this).find('i').attr('class', currentClass);

                        main.find('li').attr('class', 'menuCell floatL');
                        $(this).attr('class', 'menuCell tabMenuCurrent floatL');
                        var lastIndex = main.find('li').length - 1;

                        main.find('li').eq(lastIndex).attr('class', 'clear');
                        main.AjaxForJson('tab3MenuChange click');
                    }
                    return false;
                }
            })
        })
    },
    tab4MenuChange: function () {
        var main = this;
        main.extend({
            tab4Li: main.find('li.menuCell').bind({
                mouseover: function (e) {
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        //var currentClass = $(this).find('i').attr('class')+'White';//图标显示白色
                        //$(this).find('i').attr('class', currentClass);
                        $(this).attr('class', 'menuCell tabMenuHover');
                    }
                },
                mouseout: function (e) {
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        //var currentClass = $(this).find('i').attr('class').replace('White','');
                        //$(this).find('i').attr('class', currentClass);
                        $(this).attr('class', 'menuCell');
                    }
                },
                click: function (e) {
                    if ($(this).attr('class').indexOf('tabMenuCurrent') < 1) {
                        main.find('li.menuCell').attr('class', 'menuCell');
                       // var len = main.find('li').find('i').length;
                        //for (var i = 0; i < len; i++) {
                        //    var newClass = main.find('li').find('i').eq(i - 1).attr('class').replace('White', '');
                        ////    main.find('li').find('i').eq(i - 1).attr('class', newClass);
                        //}

                    //    main.find('li').find('a[name="quickLink"]').attr('class', 'floatR LWhiteAB');
                     //   main.find('li').find('a[name="wordLink"]').attr('class', 'LWhiteA');
                        $(this).attr('class', 'menuCell tabMenuCurrent');
                    //    $(this).find('a[name="quickLink"]').attr('class', 'floatR');
                     //   $(this).find('a[name="wordLink"]').attr('class', '');
                     //   main.AjaxForJson('tab4MenuChange click');
                    }
                    return false;
                }
            })
        })
    },
    AjaxForJson: function (requestUrl, requestData, SuccessCallback, errorCallback, successPar) {
        //alert(requestUrl);
    }
});
