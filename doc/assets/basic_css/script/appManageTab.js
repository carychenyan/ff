function leftMenuDropDown()
{
    $("ul.manageList > li.menuCell").click(function(){
        $("ul.manageList > li.menuCell").removeClass('tabMenuCurrent tabMenuHover tabSecondaryMenuCurrent');
        $(this).addClass('tabMenuCurrent tabMenuHover tabSecondaryMenuCurrent');
        return false;
    });
}

function leftSecondaryMenuDropDown()
{
    $("ul.secondaryMenu > li.menuCell").click(function(){

        $("ul.secondaryMenu > li.menuCell").removeClass('tabMenuCurrent tabMenuHover');
        $(this).addClass('tabMenuHover');
        var funcName = $(this).find('a').attr('name');
        //做ajax请求吧
        var requestUrl = commonParams.dodoDevPath + "/ApplicationManage/menuChange";
        var requestData = 'function_name='+funcName;
        var funcLabel = $(this).find('a').attr('title');
        AjaxForJson(requestUrl, requestData, funcMainChangeSuccess, null, funcLabel);
        return false;
    });
}

function funcMainChangeSuccess(data,funcLabel)
{
    hideMainDiv();
    if(data.status ===1){
        $('.listCon').find('h2').html(funcLabel);
        $('.searchWrap').remove();
        $('.listCon').show();
        if(funcLabel == '应用管理'){
            applicationList(data);
        }else{
            //到下面的方法
            selectDate(funcLabel);
        }


    }else{
        $('.listCon').find('h2').html('wrong func');
        $('.listCon').show();
    }
}


/**选择日期**/
function selectDate(funcLabel){
    $('.searchWrap').remove();
        var analyzeStr = 'loginAnalyze';
    if(funcLabel == '登录分析'){
        analyzeStr = 'loginAnalyze';
    }else if(funcLabel == '异常分析'){
        analyzeStr = 'exceptionAnalyze';
    }else if(funcLabel == '接口调用分析'){
        analyzeStr = 'apiAnalyze';
    }
    var selectDateStr = "<form action='' method='' class='searchWrap floatR'>"+
                        "<div class='customForm_searchTxtInput customForm_searchInputBoxGetFocus width500'>"+
                            "从<input name='startDate' type='text' class='txtInput width172 ' value=''>到<input name='endDate' type='text' class='txtInput width172 ' value=''>"+
                            "<input type='hidden'  name='analyzeType' funcstr='"+analyzeStr+"' />"+
                            "<label class='floatR searchBtn'><input name='' type='button' value='' class='icon_magnifier postAnalyzeDate'></label>"+
                            "</div>"+
                    "</form>";
    $('.listCon').find('h2').after(selectDateStr);
    processAnalyze();
    return false;
}
/**处理选择日期**/
function processAnalyze(){
    $('.postAnalyzeDate').click(function(){
        var funcStr = $(this).parents('div').find("input[name='analyzeType']").attr('funcstr');
        var startTime = $(this).parents('div').find("input[name='startDate']").val();
        var endTime = $(this).parents('div').find("input[name='endDate']").val();
        var requestUrl = commonParams.dodoDevPath + "/ApplicationManage/menuChange";
        var requestData = 'function_name='+funcStr+'&start='+startTime+'&end='+endTime;

        AjaxForJson(requestUrl, requestData, function(data){
            var analyzeStr = "<table class='tableSet' >";
            if(funcStr == 'loginAnalyze'){
                analyzeStr +="<thead>"+
                                "<tr>"+
                                    "<th colspan='3'>"+data.date_label+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                    "<th>应用名称</th>"+
                                    "<th>总登陆次数</th>"+
                                    "<th>总登陆用户</th>"+
                                "</tr>"+
                                "</thead>"+
                                "<tbody>";

                if(data.data != null){
                    for (var i in data.data) {
                        analyzeStr += "<tr><td>"+data.data[i].app_name+"</td><td>"+data.data[i].login_total_count+"</td><td>"+data.data[i].login_user_count+"</td></tr>";
                    }
                    // $.each(data.data,function(n,value){
                    //     alert(value.app_name);
                    // });
                }
            }else if(funcStr == 'exceptionAnalyze'){
                analyzeStr +="<thead>"+
                                "<tr>"+
                                    "<th colspan='2'>"+data.date_label+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                    "<th>应用名称</th>"+
                                    "<th>发生异常次数</th>"+
                                "</tr>"+
                                "</thead>"+
                                "<tbody>";
                    for (var i in data.data) {
                        analyzeStr += "<tr><td>"+data.data[i].app_name+"</td><td>"+data.data[i].exception_count+"</td></tr>";
                    }           
            }else if(funcStr == 'apiAnalyze'){
                analyzeStr +="<thead>"+
                                "<tr>"+
                                    "<th colspan='2'>"+data.date_label+"</th>"+
                                "</tr>"+
                                "<tr>"+
                                    "<th>应用名称</th>"+
                                    "<th>被调用次数</th>"+
                                "</tr>"+
                                "</thead>"+
                                "<tbody>";
                    for (var i in data.data) {
                        analyzeStr += "<tr><td>"+i+"</td><td>"+data.data[i].api_called_count+"</td></tr>";
                    }                                   
            }
  
            analyzeStr += "</tbody>"+
                        "</table>";

            $('.content').html(analyzeStr);
            $('.content').show();
        }, null);
    });
}

/**应用管理列表**/
function applicationList(data)
{
        var tableStr = "<table class='tableSet' id='tableTest'>"+
                    "<thead>"+
                    "<tr>"+
                        "<th>应用id</th>"+
                        "<th>应用名称</th>"+
                        "<th>应用认证类型</th>"+
                        "<th>应用类别</th>"+
                        "<th>应用上传人id</th>"+
                        "<th>应用所有人id</th>"+
                        "<th>应用运行状态</th>"+
                        "<th>应用的可见性</th>"+
                        "<th>操作</th>"+
                    "</tr>"+
                    "</thead>"+
                    "<tbody>";
        for (var i = 0; i < data['data'].length; i++) {
            tableStr += "<tr>"+
                        "<td>"+data['data'][i].app_id+"</td>"+
                        "<td>"+data['data'][i].app_name+"</td>"+
                        "<td>"+data['data'][i].app_auth_type+"</td>"+
                        "<td>"+data['data'][i].app_type+"</td>"+
                        "<td>"+data['data'][i].app_provider+"</td>"+
                        "<td>"+data['data'][i].app_user_id+"</td>"+
                        "<td>"+data['data'][i].app_available+"</td>"+
                        "<td>"+data['data'][i].app_display+"</td>"+
                        "<td><a href='javascript:;' name='edit' appid='"+data['data'][i].app_id+"'  >详细信息</a>|<a href='javascript:;' name='appStatstics' appKey='"+data['data'][i].app_key+"'>数据统计</a></td>"+
                    "</tr>";
        }


        tableStr += "</tbody>"+
                "</table>";

        $('.content').html(tableStr);
        $('.content').show();
        //加载这个字方法
        applicationManageButtons();
}

function applicationManageButtons(){
    $("a[name='edit']").click(function(){
        $('.appDetail').remove();
        $('.appIcon').remove();
        $('.appSnapshot').remove();
        $('.appEdit').remove();
        $('.appKey').remove();
        $('.appSecret').remove();
        $('.appScope').remove();
        $('.appRedirectUrl').remove();
        $('.singleAppLogin').remove();
        $('.singleAppException').remove();
        var app_id = $(this).attr('appid');
        var requestUrl = commonParams.dodoDevPath + "/ApplicationManage/edit";
        var requestData = 'app_id='+app_id;
        var that = $(this);
        AjaxForJson(requestUrl, requestData, function(data){
            var appEditStr = "<tr class='appIcon'>"+
                                "<td>应用icon</td>"+
                                "<td colspan='8'><img src='"+data.app_big_icon+"' /></td>"+
                              "</tr>";

                appEditStr += "<tr class='appKey'>"+
                                "<td>APP KEY</td>"+
                                "<td colspan='8'>"+data.app_key+"</td>"+
                              "</tr>";
                appEditStr += "<tr class='appSecret'>"+
                                "<td>APP SECRET</td>"+
                                "<td colspan='8'>"+data.app_secret+"</td>"+
                              "</tr>";
                appEditStr += "<tr class='appScope'>"+
                                "<td>APP KEY</td>"+
                                "<td colspan='8'>"+data.app_scope_labels+"</td>"+
                              "</tr>";
                appEditStr += "<tr class='appRedirectUrl'>"+
                                "<td>回调地址</td>"+
                                "<td colspan='8'>"+data.app_url+"</td>"+
                              "</tr>";                                                            
                appEditStr += "<tr class='appDetail'>"+
                                "<td>应用介绍</td>"+
                                "<td colspan='8'>"+data.app_description+"</td>"+
                             "</tr>";   
                appEditStr += "<tr class='appSnapshot'>"+
                                "<td>应用截图</td>"+
                                "<td colspan='8'>";                             
                if(data.app_snapshot != null){
                    for (var i = 0; i < data.app_snapshot.length; i++) {
                        appEditStr += "<img src='"+data.app_snapshot[i]['app_snapshot_path']+"'  /><br/>";
                    }   
                }

                appEditStr +=  "</td>";
                              "</tr>";
                appEditStr +="<tr class='appEdit' >"+
                                "<td colspan='3'>应用状态：<input type='radio' name='appAvailable' value='0' ";
                                if(data.app_available === '开发中'){
                                   appEditStr += " checked='checked' " 
                                }
                appEditStr +=   " />开发&nbsp;<input type='radio' name='appAvailable' value='2' ";
                                if(data.app_available === '审核中'){
                                   appEditStr += " checked='checked' " 
                                }
                appEditStr +=" />审核&nbsp;<input type='radio' name='appAvailable' value='1' ";
                                if(data.app_available === '运行中'){
                                   appEditStr += " checked='checked' " 
                                }
                appEditStr +=" />运行&nbsp;<input type='radio' name='appAvailable' value='9' ";
                                if(data.app_available === '已下架'){
                                   appEditStr += " checked='checked' " 
                                }
                appEditStr +=" />下架&nbsp;</td>"+
                                "<td colspan='3'>可见性：<input type='radio' name='appDisplay' value='0' ";
                                if(data.app_display === '不可见'){
                                   appEditStr += " checked='checked' " 
                                }
                appEditStr +=   " />不可见&nbsp;<input type='radio' name='appDisplay' value='1' ";
                                if(data.app_display === '可见'){
                                   appEditStr += " checked='checked' " 
                                }
                appEditStr +=   "/>可见&nbsp;</td>"+
                                "<td colspan='2'>应用版权所有人：<input type='text' name='appUserId' value='"+data.app_user_id+"'> <input type='hidden' name='appId' value='"+data.app_id+"' /></td>"+
                                "<td><input class='customBtn colourLightGray post '  value='提交' /><br/><input class='customBtn colourLightGray closeEdit width50' value='收起' /></td>"+
                           "</tr>";

            that.parents('tr').after(appEditStr);
            postAppValidation();
            $('.closeEdit').click(function(){
                $('.appDetail').remove();
                $('.appIcon').remove();
                $('.appSnapshot').remove();
                $('.appEdit').remove();
                $('.appKey').remove();
                $('.appSecret').remove();
                $('.appScope').remove();
                $('.appRedirectUrl').remove();      
                $('.singleAppLogin').remove();
                $('.singleAppException').remove();          
            });            
        }, null);
        return false;
    });

    $("a[name='appStatstics']").click(function(){
        $('.appDetail').remove();
        $('.appIcon').remove();
        $('.appSnapshot').remove();
        $('.appEdit').remove();
        $('.appKey').remove();
        $('.appSecret').remove();
        $('.appScope').remove();
        $('.appRedirectUrl').remove();          
        $('.singleAppLogin').remove();
        $('.singleAppException').remove();
        var app_key = $(this).attr('appKey');
        var requestUrl = commonParams.dodoDevPath + "/ApplicationManage/appStatstics";
        var requestData = 'app_key='+app_key;
        var that = $(this);
        AjaxForJson(requestUrl, requestData, function(data){
            if(data.status === 1){
                var singleAppStatsticsStr = "<tr class='singleAppLogin'>"+
                                                "<td colspan='9'>今日登录次数："+data.data['today_login_times']+"-"+
                                                "今日登录用户："+data.data['today_login_users']+"<br/>"+
                                                "昨日登录次数："+data.data['yesterday_login_times']+"-"+
                                                "昨日登录用户："+data.data['yesterday_login_users']+"<br/>"+
                                                "本月登录次数："+data.data['month_login_times']+"-"+
                                                "本月登录用户："+data.data['month_login_users']+"<br/>"+
                                                "总登录次数："+data.data['total_login_times']+"-"+
                                                "总登录用户："+data.data['total_login_users']+"<br/>"+
                                                "</td>"+
                                            "</tr>";
                    if(data.data['exception_logs'] != null){
                        singleAppStatsticsStr += "<tr class='singleAppException'><td colspan='9'>";
                        for (var i = 0; i < data.data['exception_logs'].length; i++) {
                            singleAppStatsticsStr += data.data['exception_logs'][i]['user_id']+'-'+data.data['exception_logs'][i]['login_time']+
                                                    '-'+data.data['exception_logs'][i]['exception_api']+'-'+data.data['exception_logs'][i]['error_code']+
                                                    '-'+data.data['exception_logs'][i]['error_msg']+'<br/>';
                        }
                        singleAppStatsticsStr += "<input class='customBtn colourLightGray closeSingleAppStatstics' value='收起' />";
                        singleAppStatsticsStr += "</td></tr>";
                    }
                that.parents('tr').after(singleAppStatsticsStr);
                $('.closeSingleAppStatstics').click(function(){
                            $('.singleAppLogin').remove();
                            $('.singleAppException').remove();
                });
            }else{
                alert('出错啦');
            }
        }, null);
        return false;
    });




}

/**点击提交按钮**/
function postAppValidation()
{
    $('.post').click(function(){
        var appId = $(this).parents('tr').find("input[name='appId']").attr('value');
        var appStatus = $(this).parents('tr').find("input:radio[name='appAvailable']:checked").val();
        if(appStatus == undefined){
            alert('请选择应用状态');
            return false;
        }
        var appDisplay = $(this).parents('tr').find("input:radio[name='appDisplay']:checked").val();
        if(appDisplay == undefined){
            alert('请选择应用可见性');
            return false;
        }        
        var appUserId = $(this).parents('tr').find("input[name='appUserId']").val();
        //提交
        var requestUrl = commonParams.dodoDevPath + "/ApplicationManage/verifyApplication";
        var requestData = 'app_id='+appId+'&app_available='+appStatus+'&app_display='+appDisplay+'&app_user_id='+appUserId;
        AjaxForJson(requestUrl, requestData, function(data){
            $('.appDetail').remove();
            $('.appIcon').remove();
            $('.appSnapshot').remove();
            $('.appEdit').remove();
            $("a[name='applicationList']").trigger("click");
            alert(data);
        }, null);

    });
}







function hideMainDiv()
{
    $('.listCon').hide();
    $('.content').hide();
}


function init()
{
    leftMenuDropDown();
    leftSecondaryMenuDropDown();
    hideMainDiv();
}

$(document).ready(function(){
    init();
});
