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
        var requestUrl = commonParams.dodoDevPath + "/ApplicationStatus/menuChange";
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
        }


    }else{
        $('.listCon').find('h2').html('wrong func');
        $('.listCon').show();
    }
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
                                ""+
                                "<td colspan='9'><input class='customBtn colourLightGray closeEdit width50' value='收起' /></td>"+
                           "</tr>";

            that.parents('tr').after(appEditStr);
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
