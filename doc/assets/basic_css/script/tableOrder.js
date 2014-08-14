$.fn.extend({
    orderEvent: function () {
        var oTbody = $(this)[0].tBodies[0];
        var arr = [];//�������ÿһ��tr 
        var isAsc = true;//�����ж����򣬻��ǽ��� 
        $(this).find('[isOrder="true"]').die().live('click', function () {
            clickFun(this);
        });
        var clickFun = function (that) {
            var ascType = $(that).attr('isAsc');
            var isInt = $(that).attr('isInt');
            var thIndex = $(that).attr('thIndex');
            for (var i = 0; i < oTbody.rows.length; i++) {
                arr[i] = oTbody.rows[i];//�����ǰ�ÿһ��tr��ŵ�һ�����飬��������������ݣ�������cells[0].innerHTML�� 
            }
            //�������cells[0].innerHTML������ 
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
            //��������tr ���²���tbody 
            for (var j = 0; j < arr.length; j++) {
                oTbody.appendChild(arr[j]);
            }
            //�ж����򣬽��� 
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