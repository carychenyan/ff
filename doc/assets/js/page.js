/*
*js实现分页
**/
//方法驱动
function pageMethod() {
    var obj = this;
    obj.resetTotal();
    obj.reloadpageAjax(obj.currentPageNum);
    obj.page(); //生成页码
    ready2go.call(obj);
}

//添加页码点击事件
function ready2go() {
    var obj = this;
    $(document).on("click", "#" + obj.page_obj_id + " a", function () {
   // $("#" + obj.page_obj_id + " a").on("click", function () {
        obj.target_p = parseInt($(this).attr("p"));
        gotopage.call(obj, obj.target_p);
    })
}

//跳转至哪一页
function gotopage(target) {
    this.cpage = target; //把页面计数定位到第几页
    this.page();
    this.reloadpageAjax(target);
}
function pageSuccess() {
    console.log('YES');
}
//初始化各个属性
function jsPage(listLength, page_obj_id, pagesize, requesturl, requestdata, responsevent, currentpagenum) {
    // list_id 结果集UL的id
    // list_class 要显示的类别
    // page_id 存放页码的id
    // pagesize 每页显示多少条
    this.page_obj_id = page_obj_id;
    this.page_obj = $("#" + page_obj_id); //存放页码的div
    this.results = parseInt(listLength); // 总记录数等于所有记录

    this.totalpage; // 总页数
    this.pagesize = parseInt(pagesize); //每页记录数
    this.cpage = currentpagenum; //当前页,默认显示第一页
    this.count;
    this.target_p;
    this.curcount;
    this.outstr = ""; // 输出页码html 
    this.goNext = 5;//每次生成多少页码
    this.requestUrl = requesturl;//ajax请求地址
    this.requestData = requestdata;//ajax请求参数
    this.responseEvent = responsevent;//请求成功调用的方法
    this.currentPageNum;
    if (currentpagenum) {
        this.currentPageNum = currentpagenum;
        this.cpage = parseInt(currentpagenum);
    }
    else {
        this.currentPageNum = 1;
        this.cpage = 1;
    }
}
//加载当前目标也内容
jsPage.prototype.reloadpage = function (p) {
    this.li.hide();
    for (var i = this.pagesize * p - this.pagesize; i < this.pagesize * p; i++) {
        this.li.eq(i).show();//eq指定第几个li显示
    }
};
//ajax加载当前目标页内容
jsPage.prototype.reloadpageAjax = function (p) {
    var requestData = this.requestData + "&p=" + p;
    AjaxForJson(this.requestUrl, requestData, this.responseEvent, null);
};
//计算总页数
jsPage.prototype.resetTotal = function () {
    if (this.results == 0) {
        this.totalpage = 0;
        this.cpage = 0;
    } else if (this.results <= this.pagesize) {
        this.totalpage = 1;
    } else if (parseInt(this.results / this.pagesize) == 1) {
        this.totalpage = 2;
    } else if (parseInt(this.results / this.pagesize) > 1 && this.results % this.pagesize == 0) {
        this.totalpage = this.results / this.pagesize;
    } else {
        this.totalpage = parseInt(this.results / this.pagesize) + 1;
    }
};
//加载页面跳转控件
jsPage.prototype.page = function () {
    if (this.totalpage <= this.goNext) {
        for (this.count = 1; this.count <= this.totalpage; this.count++) {
            if (this.count != this.cpage) {
                this.outstr = this.outstr + "<a href='javascript:void(0)' p='" + this.count + "' >" + this.count + "</a>";
            } else {
                this.outstr = this.outstr + "<span class='current' >" + this.count + "</span>";
            }
        }
    }
    if (this.totalpage > this.goNext) {
        if (parseInt((this.cpage - 1) / this.goNext) == 0) {
            for (this.count = 1; this.count <= this.goNext; this.count++) {
                if (this.count != this.cpage) {
                    this.outstr = this.outstr + "<a href='javascript:void(0)' p='" + this.count + "' >" + this.count + "</a>";
                } else {
                    this.outstr = this.outstr + "<span class='current'>" + this.count + "</span>";
                }
            }
            this.outstr = this.outstr + "<a href='javascript:void(0)' p='" + this.count + "' >&raquo;</a>";
        } else if (parseInt((this.cpage - 1) / this.goNext) == parseInt(this.totalpage / this.goNext)) {
            this.outstr = this.outstr + "<a href='javascript:void(0)' p='" + (parseInt((this.cpage - 1) / this.goNext) * this.goNext) + "' >&laquo;<\/a>";
            for (this.count = parseInt(this.totalpage / this.goNext) * this.goNext + 1; this.count <= this.totalpage; this.count++) {
                if (this.count != this.cpage) {
                    this.outstr = this.outstr + "<a href='javascript:void(0)' p='" + this.count + "' >" + this.count + "</a>";
                } else {
                    this.outstr = this.outstr + "<span class='current'>" + this.count + "</span>";
                }
            }
        } else {
            var lastP;
            this.outstr = this.outstr + "<a href='javascript:void(0)' p='" + (parseInt((this.cpage - 1) / this.goNext) * this.goNext) + "' >&laquo;<\/a>";
            for (this.count = parseInt((this.cpage - 1) / this.goNext) * this.goNext + 1; this.count <= parseInt((this.cpage - 1) / this.goNext) * this.goNext + this.goNext; this.count++) {
                if (this.count != this.cpage) {
                    this.outstr = this.outstr + "<a href='javascript:void(0)' p='" + this.count + "' >" + this.count + "</a>";
                } else {
                    this.outstr = this.outstr + "<span class='current'>" + this.count + "</span>";
                }
                if (this.count == this.totalpage) {
                    lastP = "";
                } else {
                    lastP = "<a href='javascript:void(0)' p='" + (this.count + 1) + "' >&raquo;</a>";
                }
            }
            this.outstr = this.outstr + lastP;
        }
    }
    if (this.totalpage > 1) {
        this.Prestr = "<a href='javascript:void(0)' p='" + parseInt(this.cpage - 1) + "'>上一页</a>";
        this.startstr = "<a href='javascript:void(0)' p='" + 1 + "'>首页</a>";
        this.nextstr = "<a href='javascript:void(0)' p='" + parseInt(this.cpage + 1) + "'>下一页</a>";
        this.endstr = "<a href='javascript:void(0)' p='" + this.totalpage + "'>尾页</a>";
        if (this.cpage != 1) {
            if (this.cpage >= this.totalpage) {
                document.getElementById(this.page_obj_id).innerHTML = "<div>" + this.startstr + this.Prestr + this.outstr + "<\/div>";
            }
            else {
                document.getElementById(this.page_obj_id).innerHTML = "<div>" + this.startstr + this.Prestr + this.outstr + this.nextstr + this.endstr + "<\/div>";
            }
        }
        else {
            document.getElementById(this.page_obj_id).innerHTML = "<div>" + this.outstr + this.nextstr + this.endstr + "<\/div>";
        }
    }
    else {
        //document.getElementById(this.page_obj_id).innerHTML = "<div>" + this.outstr + "<\/div>";
        document.getElementById(this.page_obj_id).innerHTML = "";
    }
    this.outstr = "";
};