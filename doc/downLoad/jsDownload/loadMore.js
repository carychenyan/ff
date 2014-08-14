//动态加载更多
var loadMore = {
    isEnd: false,
    pageNum: 1,
    init: function (url, params, functionName) {
        //绑定加载更多事件
        document.getElementById("showMoreDiv").onclick = function () {
            //var requestUrl = commonParams.dodoDevPath + "/Home/allNews";
            loadMore.pageNum = loadMore.pageNum + 1;
            //var requestData = "page=" + loadMore.pageNum + "&target=" + $("#trendsNavtypeCircle").attr("name") + "&scope=" + $("#trendsNavtype").attr("name");
            //var reponseFun = initFreshNewsHTML.FreshNewsHTMLs;
            loadMore.show(url, params, functionName)
        };
    },
    show: function (requestUrl, requestData, reponseFun) {
        if (!this.isEnd) {
            document.getElementById("showMoreDiv").style.display = "none";
            document.getElementById("pageLoadingDiv").style.display = "block";
            //  AjaxForJson(requestUrl, requestData, reponseFun, null);
            initList();
        }
        else {
            document.getElementById("showMoreDiv").style.display = "none";
            document.getElementById("pageLoadingDiv").style.display = "none";
            return false;
        }
    }
};