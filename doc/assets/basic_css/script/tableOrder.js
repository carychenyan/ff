$.fn.extend({
    orderEvent: function () {
        var oTbody = $(this)[0].tBodies[0];
        var arr = [];//用来存放每一个tr 
        var isAsc = true;//用来判断升序，还是降序 
        $(this).find('[isOrder="true"]').die().live('click', function () {
            clickFun(this);
        });
        var clickFun = function (that) {
            var ascType = $(that).attr('isAsc');
            var isInt = $(that).attr('isInt');
            var thIndex = $(that).attr('thIndex');
            for (var i = 0; i < oTbody.rows.length; i++) {
                arr[i] = oTbody.rows[i];//这里是把每一个tr存放到一个数组，而不是排序的依据（这里是cells[0].innerHTML） 
            }
            //数组根据cells[0].innerHTML来排序 
            arr.sort(function (td1, td2) {
                var x = td1.cells[thIndex].innerHTML;
                var y = td2.cells[thIndex].innerHTML;
                if (isInt) {
                    var xInt = parseInt(x);
                    var yInt = parseInt(y);
                    if (ascType) {
                        return ((xInt < yInt) ? -1 : ((xInt > yInt) ? 1 : 0));
                    } else {
                        return ((yInt < xInt) ? -1 : ((yInt > xInt) ? 1 : 0));
                    }
                } else {
                    if (ascType) {
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                    } else {
                        return ((y < x) ? -1 : ((y > x) ? 1 : 0));

                    }
                }
            });
            //把排序后的tr 重新插入tbody 
            for (var j = 0; j < arr.length; j++) {
                oTbody.appendChild(arr[j]);
            }
            //判断升序，降序 
            $(that).attr('isAsc', !ascType);
            $(that).find('i').remove();
            if (ascType) {
                $(that).html($(that).html() + '<i class="icon_downArrStyle2"></i>');
            } else {
                $(that).html($(that).html() + '<i class="icon_upArrStyle2"></i>');
            }
        }
    }
});