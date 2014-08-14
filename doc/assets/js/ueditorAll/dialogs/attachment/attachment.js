//网盘参数
var DiskParams = {
    dir_id: 0,
    disk_id: null,
    file_ids: [],
    orderField: 'file_time',
    order: 'desc',//a 升序，b降序
    fileArray: [],
    currentPage: 1,
    totalCount: null
    // picArray:['JPEG', 'JPG', 'PNG', 'GIF', 'TIFF', 'BMP'],
    // openExt: ['3GPP','MPEG4', 'MOV', 'AVI', 'MPEGPS', 'WMV', 'FLV', 'OGG', 'DOC', 'DOCX', 'XLS', 'XLSX', 'PPT', 'PPTX', 'PDF', 'TIFF', 'SVG', 'EPS', 'PS', 'TTF', 'XPS']
}

window.onload = function () {
    getDiskId();
    initPageEvent();
}
//获取网盘ID
function getDiskId() {
    function setDiskId(data) {
        DiskParams.disk_id = data.diskId;
        getFilesList();
    }
    AjaxForJson(commonParams.dodoDevPath + "/Disk/getDiskId", null, setDiskId, null);
}
//文件上传弹出框
var dialogUpload = function (html) {
    var styledialog = new styleDialog
    styledialog.initDialogHTML();
    styledialog.initContent("上传文件", html);

    $("input[name='btnClose']").die().live("click", function () {
        styledialog.closeDialog();
    });
    return false;
}

var initPageEvent = function () {
    DiskParams.currentPage = 1;

    //点击文件夹名字,图标进入下一层
    $('.folderIconB[name="aFolderName"]').die().live("click", function () {
        clickFileName(this);
        return false;
    });
    $(".fileIconB[name='aFileName']").live("click", function () {
        if ($(this).parent().parent().attr("check") == "yes") {
            $(this).parent().parent().css({ "opacity": "", "border": "2px solid #f0f0f0" });
            $(this).parent().parent().attr("check", "no");
        }
        else {
            $(this).parent().parent().css({ "opacity": "0.5", "filter": "Alpha(opacity=70)", "border": "2px solid blue" });
            $(this).parent().parent().attr("check", "yes");
        }
    });
    //点击导航栏文件夹名
    $('a[name="aDirName"]').die().live("click", function () {
        var file_id = $(this).attr('file_id');
        DiskParams.currentPage = 1;
        $("li[name='dirAdd']").attr('dir_id', file_id);
        DiskParams.dir_id = file_id;
        getFilesList();
        //initDiskList();
        return false;
    });
    //上传文件
    $("li[name='uploadFile']").die().live("click", function () {
        AjaxForJson(commonParams.dodoDevPath + "/Disk/fileUpload?isattach=1", "p=" + DiskParams.currentPage + "&disk_id=" + DiskParams.disk_id + "&dir_id=" + DiskParams.dir_id, dialogUpload, null);
        return false;
    });
}

//点击文件名事件处理
var clickFileName = function (t) {
    var is_dir = $(t).parent().parent().attr('is_dir');
    var file_id = $(t).parent().parent().attr('file_id');
    if (is_dir == true) {
        $("li[name='dirAdd']").attr('dir_id', file_id);
        DiskParams.dir_id = file_id;
        getFilesList();
    }
}

//获取网盘总数，并初始化网盘列表
function getFilesList() {
    var requestUrl = commonParams.dodoDevPath + "/Disk/filesCount";
    var requestData = "disk_id=" + DiskParams.disk_id + "&dir_id=" + DiskParams.dir_id;
    function setPageCount(obj) {
        DiskParams.totalCount = obj;
        initDiskList();
    }
    AjaxForJson(requestUrl, requestData, setPageCount, null);
}

// 时间戳转换日期   
function UnixToDate(unixTime, isFull, timeZone) {
    if (typeof (timeZone) == 'number') {
        unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
    }
    var time = new Date(unixTime * 1000);
    var ymdhis = "";
    ymdhis += time.getUTCFullYear() + "-";
    ymdhis += btok((time.getUTCMonth() + 1).toString(), 2, '0') + "-";
    ymdhis += btok(time.getUTCDate().toString(), 2, '0');
    if (isFull === true) {
        ymdhis += " " + btok((parseInt(time.getUTCHours() + 8)).toString(), 2, '0') + ":";
        ymdhis += btok(time.getUTCMinutes().toString(), 2, '0');
    }
    return ymdhis;
}
//填充文字： str 文本框对象, count 总字符长度 , charStr 填充字符
function btok(str,count,charStr)
{
    var disstr = "";
    for(var i=1;i<=(count-str.length);i++)
    {
        disstr += charStr;
    }
    str = disstr+str;
    return str;
}
//初始化网盘列表
function initDiskList() {
    var requestUrl = commonParams.dodoDevPath + "/Disk/list";
    var requestData = "disk_id=" + DiskParams.disk_id + "&dir_id=" + DiskParams.dir_id + "&style=picList"; //+ $("div[name='viewType']").attr('list');
    // function setPageList(obj) {
    function responseEvent(obj) {
        $("span[name='spanDirNav']").html(obj.dirNav);
        var objR = arrayClass(objToArr(obj.files), DiskParams.orderField, DiskParams.order);
        var listHtml = '';

        for (var i = 0; i < objR.length; i++) {
            if (objR[i].is_dir == true) {
                listHtml += '<ul name="ulFile" style="border:2px solid #f0f0f0;" class="pic_cell" file_id="' + objR[i].file_id + '" dir_id=' + objR[i].dir_id + ' is_dir="' + objR[i].is_dir + '" is_share="' + objR[i].is_share + '"><li class="fileName"><span class="folderIconB" name="aFolderName"><em>&nbsp;</em></span><input name="modifyFileName" style="display:none;"  type="text" class="editTitle" value="" /><span name="extName"></span><a href="javascript:;" title="' + objR[i].file_name + '" name="aFolderName"><span name="dirName">' + objR[i].file_name + '</span><span name="fileCount">(' + objR[i].c + ')</span></a></li><li class="fileSize grayTxt1">' + UnixToDate(objR[i].file_time, true) + '</li></ul>';
            }
            else {
                listHtml += '<ul name="ulFile" style="border:2px solid #f0f0f0;" class="pic_cell" file_id="' + objR[i].file_id + '" dir_id=' + objR[i].dir_id + ' is_dir="' + objR[i].is_dir + '" is_share="' + objR[i].is_share + '"><li class="fileName"><span class="fileIconB" name="aFileName"><em>' + objR[i].file_ext + '</em>';
                if (objR[i].is_share > 0) {
                    listHtml += '<span class="partakeHand"></span>';
                }
                listHtml += '</span><input name="modifyFileName" style="display:none;" type="text" class="editTitle" value="" /><span name="extName"></span>';
                listHtml += '<a href="/disk/down/' + objR[i].file_id + '" title="' + objR[i].file_name + '">';
                listHtml += '<span name="dirName">' + objR[i].file_name + '</span></a></li><li class="fileSize grayTxt1">' + objR[i].file_size + '</li></ul>';
            }
        }
        $("div[name='divList']").css('display', 'none');
        $("div[name='divList']").html('');
        $("div[name='divPic']").html(listHtml);
        $("div[name='divPic']").css('display', 'block');

        $('.fileName').css('cursor', 'pointer');
        if (DiskParams.totalCount <= 15) {
            $('#commentPageNum').css('display', 'none');
        } else {
            $('#commentPageNum').css('display', 'block');
        }
    }
    var requestMenberpage = new jsPage(DiskParams.totalCount, "commentPageNum", "15", requestUrl, requestData, responseEvent, DiskParams.currentPage);
    pageMethod.call(requestMenberpage);
};

//将obj对象转为Array
function objToArr(obj) {
    var size = obj.length;
    var keys = [];
    for (var i = 0; i < size; i++) {
        keys[i] = obj[i];
    }
    return keys;
}
function arrayClass(array, key, order) {
    var dirArray = [];
    var fileArray = [];
    for (var k = 0; k < array.length; k++) {
        array[k].is_dir ? dirArray.push(array[k]) : fileArray.push(array[k]);
    }
    dirArray = sortByKey(dirArray, key, order);
    fileArray = sortByKey(fileArray, key, order);
    return dirArray.concat(fileArray);
}
//将array按照某一字段排序
function sortByKey(array, key, order) {
    var data = array.sort(function (a, b) {
        if (key == 'file_ori_size') {
            var x = parseInt(a[key]);
            var y = parseInt(b[key]);
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } else {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
    });
    if (order == 'desc') {
        return data.reverse();
    }
    else {
        return data;
    }
}