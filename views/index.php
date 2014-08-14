 <!DOCTYPE html>
<html lang="zh">
<head>
	<title>多多社区前端设计框架 v0.1</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">	
	<link href="../static/css/reset.css" rel="stylesheet">	
	<link href="../static/css/public.css" rel="stylesheet">
	<link href="../static/css/frame.css" rel="stylesheet">		
	<script src="../static/script/jquery-1.11.1.min.js"  type="text/javascript"></script>
	<script src="../static/script/jquery.zclip.min.js"  type="text/javascript"></script>
	
</head>
<body style="font-size:14px;"> 
<div class="frame_top">
     <a href="index.php" style="background-color:blue;">基本样式</a>
     <a href="form.html" style="background-color:#919191;">表单样式</a>
     <a href="js_group.html" style="background-color:#919191;">js组件</a>
    <a href="../doc/index.html" style="background-color:#919191;">返回多多社区标准v1.0</a>
</div>
<div class="quick-nav" style="position:fixed; top:58px; left:5px;">
        <ul> 
            <li><a class="grayEffect" href="#font-area">字体(Font)</a></li>
            <li><a class="grayEffect" href="#button-area">按钮(Button)</a></li>
            <li><a class="grayEffect" href="#nav-area">导航栏(Nav)</a></li>
            <li><a class="grayEffect" href="#path-area">面包屑(Path)</a></li>
            <li><a class="grayEffect" href="#border-area">边框(Border)</a></li>
            <li><a class="grayEffect" href="#quickPanel-area">快捷面版(QuickPanel)</a></li>
            <li><a class="grayEffect" href="#tabs-area">选项卡(Tabs)</a></li>
            <li><a class="grayEffect" href="#module-area">模块(Module)</a></li>
            <li><a class="grayEffect" href="#list-area">数据列表(List-area)</a></li>           
            <li><a class="grayEffect" href="#input-area">输入框(Input)</a></li>
            <li><a class="grayEffect" href="#paging-area">分页(Pagination)</a></li>           
            <li><a class="grayEffect" href="#icon-area">icon</a></li>
            <li><a class="grayEffect" href="#others-area">其他(Others)</a></li>
        </ul>
    </div>

    <fieldset id="introduction-area">
        <legend>本页面说明</legend>
        <div class="des">版权归博盛数字教育服务有限公司所有</div>
        <p>
           博盛数字教育统一样式
            <br />
            <br/>
            本页面是用于博盛数字教育内部产品交流使用，也欢迎各界朋友给予帮助和指点。
            <mark>注意：请使用Chrome浏览，因为本页面没有做兼容处理。</mark>
        </p>
    </fieldset>

    <fieldset id="font-area">
        <legend>字体</legend>
        <div class="des">
            当前字体有<mark>16</mark>种样式效果，每种颜色有4种不同的表现形式。
        </div>
        <ul>
            <li>
                <span class="defaultFont">博盛(#333333)</span>
                <pre>class="defaultFont"</pre>
                <span class="defaultUnderline">博盛</span>
                <pre>class="defaultUnderline"</pre>
                <span class="defaultEffect">博盛（变色交互）</span>
                <pre>class="defaultEffect"</pre>
                <span class="defaultHover">博盛（下划线交互）</span>
                <pre>class="defaultHover"</pre>
                 <span class="defaultDefHover">博盛（变色下划线）</span>
                <pre>class="grayDefHover"</pre>
            </li>           
            <li>
                <span class="grayFont">博盛(#808b8d)</span>
                <pre>class="grayFont"</pre>
                <span class="grayUnderline">博盛</span>
                <pre>class="grayUnderline"</pre>
                <span class="grayEffect">博盛（变色交互）</span>
                <pre>class="grayEffect"</pre> 
                <span class="grayHover">博盛（下划线交互）</span>
                <pre>class="grayHover"</pre>
                <span class="grayDefHover">博盛（变色下划线）</span>
                <pre>class="grayDefHover"</pre>
            </li>
            <li>
                <span class="orangeFont">博盛(#f0a600)</span>
                <pre>class="orangeFont"</pre>
                <span class="orangeUnderline">博盛</span>
                <pre>class="orangeUnderline"</pre> 
                <span class="orangeHover">博盛（下划线交互）</span>
                <pre>class="orangeHover"</pre>
            </li>
               <li>
                <span class="greenFont">博盛(#66cc00)</span>
                <pre>class="greenFont"</pre>
                <span class="greenUnderline">博盛</span>
                <pre>class="greenUnderline"</pre> 
                <span class="greenHover">博盛（下划线交互）</span>
                <pre>class="greenHover"</pre>
            </li>
           
        </ul>
    </fieldset>

    <fieldset id="button-area">
        <legend>按钮</legend>
        <div class="des">
            当前按钮有<mark>12</mark>种样式，每种颜色的按钮分为大中小三种。大中小又分别分为长短两种。
        </div>
        <table>            
            <tr>
                <td><a class="yellowBtnBL">大按钮(长)</a></td>
                <td><a class="yellowBtnBS">大按钮</a></td>
                <td><a class="greenBtnBL">大按钮(长)</a></td>
                <td><a class="greenBtnBS">大按钮</a></td>
                
            </tr>
            <tr>
                <td class="cl"><pre>class="yellowBtnBL"</pre></td>
                <td><pre>class="yellowBtnBS"</pre></td>
                <td class="cl"><pre>class="greenBtnBL"</pre></td>
                <td><pre>class="greenBtnBS"</pre></td>
            </tr>
            <tr>
                <td><a class="yellowBtnML">中按钮(长)</a></td>
                <td><a class="yellowBtnMS">中按钮</a></td>
                <td><a class="greenBtnML">中按钮(长)</a></td>
                <td><a class="greenBtnMS">中按钮</a></td>                
            </tr>
            <tr>
                <td class="cl"><pre>class="yellowBtnML"</pre></td>
                <td><pre>class="yellowBtnMS"</pre></td>
                <td class="cl"><pre>class="greenBtnML"</pre></td>
                <td><pre>class="greenBtnMS"</pre></td>
                
            </tr>
            <tr>
                <td><a class="yellowBtnSL">按钮(长)</a></td>
                <td><a class="yellowBtnSS">按钮</a></td>
                 <td><a class="greenBtnSL">按钮(长)</a></td>
                <td><a class="greenBtnSS">按钮</a></td>
                 
            </tr>
            <tr>
				<td class="cl"><pre>class="yellowBtnSL"</pre></td>
				<td><pre>class="yellowBtnSS"</pre></td>
				<td class="cl"><pre>class="greenBtnSL"</pre></td>
				<td><pre>class="greenBtnSS"</pre></td>
                 
            </tr>
        </table>
    </fieldset>

    <fieldset id="nav-area">
        <legend>导航栏</legend>
        <div class="des">当前导航栏有<mark>2</mark>种样式</div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">心理健康课程平台导航栏:</h4>
            <div class="show-area">
                 <div class="nav_xl">
                                    <a href="/xl/student" title="学生中心" target="" class="selected">
                                        <i class="icon-learnC"></i>
                                        <span>学生中心</span>
                                    </a>
                                    <a href="/xl/study" title="在线学习" target="">
                                        <i class="icon-learn"></i>
                                        <span >在线学习</span>
                                    </a>
                                    <a href="/xl/evaluate" title="质量评价" target="">
                                        <i class="icon-test"></i>
                                        <span>质量评价</span>
                                    </a>
                                    <a href="/xl/course" title="课堂评价" target="">
                                      <i class="icon-lessonLecture"></i>
                                      <span>课堂评价</span>
                                    </a>
                                    <a href="/xl/game" title="心理训练" target="">
                                        <i class="icon-game"></i>
                                        <span>心理训练</span>
                                    </a>
                                    <a href="/xl/question" title="问答" target="">
                                        <i class="icon-FAQs"></i>
                                        <span>问答</span>
                                    </a>
                                    <a href="/xl/info" title="资讯" target="">
                                        <i class="icon-news"></i>
                                        <span>资讯</span>
                                    </a>
                </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：使用selected样式设置选中的Tab.</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="nav_xl">
                                    <a href="/xl/student" title="学生中心" target="" class="selected">
                                        <i class="icon-learnC"></i>
                                        <span>学生中心</span>
                                    </a>
                                    <a href="/xl/study" title="在线学习" target="">
                                        <i class="icon-learn"></i>
                                        <span >在线学习</span>
                                    </a>
                                    <a href="/xl/evaluate" title="质量评价" target="">
                                        <i class="icon-test"></i>
                                        <span>质量评价</span>
                                    </a>
                                    <a href="/xl/course" title="课堂评价" target="">
                                      <i class="icon-lessonLecture"></i>
                                      <span>课堂评价</span>
                                    </a>
                                    <a href="/xl/game" title="心理训练" target="">
                                        <i class="icon-game"></i>
                                        <span>心理训练</span>
                                    </a>
                                    <a href="/xl/question" title="问答" target="">
                                        <i class="icon-FAQs"></i>
                                        <span>问答</span>
                                    </a>
                                    <a href="/xl/info" title="资讯" target="">
                                        <i class="icon-news"></i>
                                        <span>资讯</span>
                                    </a>
                              </div>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
        </div> 
       
        <div class="code-demo1">
            <h4 style="display:inline-block;">生命安全课程平台导航栏:</h4>
            <div class="show-area">
                    <div class="nav_sm">
                        <a href="/sm/resource" title="资源" target="" class="selected"> 
                            <span>资源</span>
                        </a>
                        <a href="/sm/activity" title="研训" target="" > 
                            <span>研训</span>
                        </a>
                        <a href="/sm/lesson" title="备课" target="" > 
                            <span>备课</span>
                        </a>
                        <a href="/sm/course" title="课程" target="" > 
                            <span>课程</span>
                        </a>
                        <a href="/sm/question" title="问答" target=""> 
                            <span>问答</span>
                        </a>
                        <a href="/sm/info" title="资讯" target="" > 
                            <span>资讯</span>
                        </a>
                        <a href="/sm/teacher" title="教师中心" target="" > 
                            <span>教师中心</span>
                        </a>
                    </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：使用selected样式设置选中的Tab.</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="nav_sm">
                                    <a href="/sm/resource" title="资源" target=""  class="selected"> 
                                        <span>资源</span>
                                    </a>
                                    <a href="/sm/activity" title="研训" target="" > 
                                        <span>研训</span>
                                    </a>
                                    <a href="/sm/lesson" title="备课" target="" > 
                                        <span>备课</span>
                                    </a>
                                    <a href="/sm/course" title="课程" target="" > 
                                        <span>课程</span>
                                    </a>
                                    <a href="/sm/question" title="问答" target=""> 
                                        <span>问答</span>
                                    </a>
                                    <a href="/sm/info" title="资讯" target="" > 
                                        <span>资讯</span>
                                    </a>
                                    <a href="/sm/teacher" title="教师中心" target="" > 
                                        <span>教师中心</span>
                                    </a>
                            </div>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
        </div>
    
    </fieldset> 
     <fieldset id="path-area">
        <legend>面包屑</legend>
        <div class="des">
            当前字体有<mark>1</mark>种结构样式效果。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">多多社区面包屑样例:</h4>
            <div class="show-area">
                   <div class="topNavLink">
                        <i></i>
                        <a href="#">首页</a>
                        <span>&gt;</span>
                        <a href="#">我的班级</a>
                        <span>&gt;</span>
                        <em>我们是一群追求自由理想的少年</em>
                    </div> 
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前项目中面包屑结构都差不多，主要是皮肤不一样</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="topNavLink">
                                <i></i>
                                <a href="#">首页</a>
                                <span>&gt;</span>
                                <a href="#">我的班级</a>
                                <span>&gt;</span>
                                <em>我们是一群追求自由理想的少年</em>
                           </div> 
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
        </div>
    </fieldset>
     <fieldset id="border-area">
        <legend>边框</legend>
        <div class="des">
            当前边框有<mark>1</mark>种结构样式效果。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">结合教程样例:</h4>
            <div class="show-area">
                   <div class="boder_yellow">
内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div> 
       
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前项目中多种皮肤效果，基本上只需要换下样式效果就可以</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                             <div class="boder_yellow">
内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div> 
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
        </div> 
    </fieldset>
     <fieldset id="quickPanel-area">
        <legend>快捷面板</legend>
        <div class="des">
            当前快捷面板有<mark>2</mark>种结构样式效果。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">结合教程样例:</h4>
            <div class="show-area">
                  <div class="quickPanel_xl"> 
                            <a href="/xl/resource" title="" target="_self">
                                <i class="icon-resourceSp"></i>
                                <span>找资源</span>
                            </a>
                            <a href="/xl/activity" title="" target="_self">
                                <i class="icon-trainSp"></i>
                                <span>做研训</span>
                            </a>
                            <a href="/xl/lesson" title="" target="_self">
                                <i class="icon-LessonReadySp"></i>
                                <span>去备课</span>
                            </a>
                            <a href="/xl/course" title="" target="_self">
                                <i class="icon-techSp"></i>
                                <span>上课堂</span>
                            </a>
                            <a href="javascript:;" title="" target="">
                                <i class="icon-addSp"></i>
                                <span>快捷方式</span>
                            </a>                        
                    </div>       
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前有两种风格样式，心理健康教程是方形，生命安全是圆形</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="quickPanel_xl"> 
                                    <a href="/xl/resource" title="" target="_self">
                                        <i class="icon-resourceSp"></i>
                                        <span>找资源</span>
                                    </a>
                                    <a href="/xl/activity" title="" target="_self">
                                        <i class="icon-trainSp"></i>
                                        <span>做研训</span>
                                    </a>
                                    <a href="/xl/lesson" title="" target="_self">
                                        <i class="icon-LessonReadySp"></i>
                                        <span>去备课</span>
                                    </a>
                                    <a href="/xl/course" title="" target="_self">
                                        <i class="icon-techSp"></i>
                                        <span>上课堂</span>
                                    </a>
                                    <a href="javascript:;" title="" target="">
                                        <i class="icon-addSp"></i>
                                        <span>快捷方式</span>
                                    </a>                        
                            </div>       
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
            <div class="show-area">
                  <div class="quickPanel_sm"> 
                            <a href="/xl/resource" title="" target="_self">
                                <i class="icon-resourceSp"></i>
                                <span>找资源</span>
                            </a>
                            <a href="/xl/activity" title="" target="_self">
                                <i class="icon-trainSp"></i>
                                <span>做研训</span>
                            </a>
                            <a href="/xl/lesson" title="" target="_self">
                                <i class="icon-LessonReadySp"></i>
                                <span>去备课</span>
                            </a>
                            <a href="/xl/course" title="" target="_self">
                                <i class="icon-techSp"></i>
                                <span>上课堂</span>
                            </a>
                            <a href="javascript:;" title="" target="">
                                <i class="icon-addSp"></i>
                                <span>快捷方式</span>
                            </a>                        
                    </div>       
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前有两种风格样式，心理健康教程是方形，生命安全是圆形</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="quickPanel_sm"> 
                                <a href="/xl/resource" title="" target="_self">
                                    <i class="icon-resourceSp"></i>
                                    <span>找资源</span>
                                </a>
                                <a href="/xl/activity" title="" target="_self">
                                    <i class="icon-trainSp"></i>
                                    <span>做研训</span>
                                </a>
                                <a href="/xl/lesson" title="" target="_self">
                                    <i class="icon-LessonReadySp"></i>
                                    <span>去备课</span>
                                </a>
                                <a href="/xl/course" title="" target="_self">
                                    <i class="icon-techSp"></i>
                                    <span>上课堂</span>
                                </a>
                                <a href="javascript:;" title="" target="">
                                    <i class="icon-addSp"></i>
                                    <span>快捷方式</span>
                                </a>                        
                            </div>       
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
        </div> 
    </fieldset>
     <fieldset id="tabs-area">
        <legend>选项卡</legend>
        <div class="des">
            当前选项卡有<mark>2</mark>种结构样式效果,"selected" 为当前选中样式。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">结合教程样例:</h4>
            <div class="show-area">
                 <div class="tab_menu_default">
                        <ul class="tab_menu_left">
                            <li class="selected"><a href="/sm/resource/xd001-v11-0-0?type=all">全部</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=1">教案</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=2">课件</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=3">题库</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=4">素材</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=5">微视频</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=6">观摩课</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=8">备课夹</a></li>
                        </ul>
                        <div class="tab_menu_right"> 排序:<strong>最新<i class="icon-orderdown"></i></strong><span>|</span><a href="?type=0&amp;order=2" >最热<i class="icon-orderdown-nocur"></i></a>
                         </div>

                        <div class="f-cb"> </div>
                    </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前有两种风格样式两种，结构都相似</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                             <div class="tab_menu">
                        <ul class="tab_menu_left">
                            <li class="selected"><a href="/sm/resource/xd001-v11-0-0?type=all">全部</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=1">教案</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=2">课件</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=3">题库</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=4">素材</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=5">微视频</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=6">观摩课</a></li>
                            <li><a href="/sm/resource/xd001-v11-0-0?type=8">备课夹</a></li>
                        </ul>
                        <div class="tab_menu_right"> 排序:<strong>最新<i class="icon-orderdown"></i></strong><span>|</span><a href="?type=0&amp;order=2" >最热<i class="icon-orderdown-nocur"></i></a>
                         </div>

                        <div class="f-cb"> </div>
                    </div>  
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>  

             <div class="show-area">
                  <div class="tab_menu_underline">
                        <ul > 
                            <li class="selected"><a href="javascript:;" title="">全部</a></li>
                            <li><a href="javascript:;" title="">小学</a></li>
                            <li><a href="javascript:;" title="">初中</a></li>
                            <li><a href="javascript:;" title="">高中</a></li>
                            <li class="menuCell f-fl"></li>
                        </ul> 
                        <div class="f-cb"> </div>
                 </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：简洁，只有单个下划线交互</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="tab_menu_underline">
                                <ul > 
                                    <li class="selected"><a href="javascript:;" title="">全部</a></li>
                                    <li><a href="javascript:;" title="">小学</a></li>
                                    <li><a href="javascript:;" title="">初中</a></li>
                                    <li><a href="javascript:;" title="">高中</a></li>
                                    <li class="menuCell f-fl"></li>
                                </ul> 
                                <div class="f-cb"> </div>
                           </div>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>   
        </div> 
    </fieldset>
      <fieldset id="module-area">
        <legend>模块</legend>
        <div class="des">
            当前模块有<mark>1</mark>种结构样式效果,其他的可以根据这种进行变换。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">结合教程样例:</h4>
            <div class="show-area">
                 <div class="module_default boder_yellow">
                    <h2>
                        <span><i class="icon-evaluation"></i>随堂测评</span> 
                        <a href="javascript:;">+ 添加随堂测评</a>
                    </h2>                 
                </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前有一种风格样式两种，结构都相似，后面的变化都可以根据具体需求来定，这种的话基本囊括了各种结构变化</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="module_default boder_yellow">
                                <h2>
                                    <span><i class="icon-evaluation"></i>随堂测评</span> 
                                    <a href="javascript:;">+ 添加随堂测评</a>
                                </h2>                 
                            </div>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>  

           
        </div> 
    </fieldset>
     <fieldset id="list-area">
        <legend>列表</legend>
        <div class="des">
            当前列表有<mark>8</mark>种结构样式效果,其他的可以根据这种进行细微的变换。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">结合教程样例:</h4>
            <div class="show-area">
                 <div class="list_pic30">
                         <ul>
                                <li>
                                        <a href="/xl/resource/view/679" target="_blank" class="pic"></a>
                                        <dl>
                                            <dt><a href="/xl/resource/view/679" target="_blank">我是标题我是标题我是标题</a></dt>
                                            <dd>
                                                上传 <a href="http://dev.dodoedu.com/w36451978107373010061/Space/Index" target="_blank">数学老师</a>  | 2天前上传  |  大小:1.52 KB  
                                                <span>
                                                <i class="icon_tc3"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i>0<em class="f-fs12 s-fcGray">(浏览量 0)</em>
                                                </span>
                                            </dd>
                                        </dl> 
                                        <div class="f-cb"></div>
                                </li> 
                         </ul>
                </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：当前风格就是前面是小缩略图图标。用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                        <div class="list_pic30">
                             <ul>
                                    <li>
                                            <a href="/xl/resource/view/679" target="_blank" class="pic"></a>
                                            <dl>
                                                <dt><a href="/xl/resource/view/679" target="_blank">我是标题我是标题我是标题</a></dt>
                                                <dd>
                                                    上传 <a href="http://dev.dodoedu.com/w36451978107373010061/Space/Index" target="_blank">数学老师</a>  | 2天前上传  |  大小:1.52 KB  
                                                    <span>
                                                    <i class="icon_tc3"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i>0<em class="f-fs12 s-fcGray">(浏览量 0)</em>
                                                    </span>
                                                </dd>
                                            </dl> 
                                            <div class="f-cb"></div>
                                    </li> 
                             </ul>
                        </div>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>  
             <br/><br/>
            <div class="show-area">
                <div class="list_pic76">
                        <ul>
                            <li> 
                                <div class="previewimg"><a href="/xl/resource/view/653" title="1年级课题目录" target="_blank">
                                    <i class="icon_doc"></i><img width="76px" height="78px" src="http://dev-images.dodoedu.com/wenku/767f7c2390b5d775.png" alt="1年级课题目录"></a>
                                </div>
                                <dl>
                                    <dt><a href="/xl/resource/view/653" title="1年级课题目录" target="_blank">1年级课题目录</a></dt>
                                    <dd class="intro"><strong>文档概要：</strong>一年级课题目录课标模块小小的“我”课题1、1 我从哪里来？2 身体里的“小乐队”3 肚子里的西瓜子4体里的“时钟”5 让我们去感受世界2、 安全过马路6 红灯停 绿灯行7 走路莫分神8 会“说话”的黄线9 弯道让车..... </dd>
                                    <dd class="desc">上传 <a href="http://dev.dodoedu.com/m36359802300862200030/Space/Index" target="_blank">徐杰</a>  |  15天前上传  |  大小:52.5 KB  |  页数：2  |</dd>
                                    <dd class="commet"><i class="icon_tc3"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i>0 <em class="f-fs12 s-fcGray">(浏览量 9)</em></dd>
                                </dl>
                            </li> 
                        </ul>
                </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：当前风格就是前面是小缩略图图标。用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                        <div class="list_pic76">
                                <ul>
                                    <li> 
                                        <div class="previewimg"><a href="/xl/resource/view/653" title="1年级课题目录" target="_blank">
                                            <i class="icon_doc"></i><img width="76px" height="78px" src="http://dev-images.dodoedu.com/wenku/767f7c2390b5d775.png" alt="1年级课题目录"></a>
                                        </div>
                                        <dl>
                                            <dt><a href="/xl/resource/view/653" title="1年级课题目录" target="_blank">1年级课题目录</a></dt>
                                            <dd class="intro"><strong>文档概要：</strong>一年级课题目录课标模块小小的“我”课题1、1 我从哪里来？2 身体里的“小乐队”3 肚子里的西瓜子4体里的“时钟”5 让我们去感受世界2、 安全过马路6 红灯停 绿灯行7 走路莫分神8 会“说话”的黄线9 弯道让车..... </dd>
                                            <dd class="desc">上传 <a href="http://dev.dodoedu.com/m36359802300862200030/Space/Index" target="_blank">徐杰</a>  |  15天前上传  |  大小:52.5 KB  |  页数：2  |</dd>
                                            <dd class="commet"><i class="icon_tc3"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i><i class="icon_tc2"></i>0 <em class="f-fs12 s-fcGray">(浏览量 9)</em></dd>
                                        </dl>
                                    </li> 
                                </ul>
                        </div>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
            <br/><br/> 
             <div class="show-area">
                <div class="list_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>备课夹标题</th>
                                    <th style="width:15%">对应知识点</th>
                                    <th style="width:15%">年级</th>
                                    <th style="width:15%">创建时间</th>
                                    <th style="width:23%">操作</th>
                                </tr>
                            </thead>
                            <!-- 表头可选 -->
                            <tbody>
                                    <tr class="">
                                            <td class="tit">
                                                <a target="_blank" title="第十一课 面对陌生人【备课】" href="/xl/Lesson/detail/id/123">第十一课 面对陌生人【备课】</a>
                                                <i class="share">公开</i>
                                            </td>
                                            <td>
                                                 <span title="第十一课 面对陌生人">第十一课 面...</span>
                                            </td>
                                            <td>
                                                 小学二年级                                   
                                             </td>
                                            <td>
                                                 2014-06-26                                   
                                             </td>
                                            <td class="operate">                                    
                                                <a href="/xl/lesson/addResource/id/123">编辑</a>
                                                |
                                                <a class="js-confirm" data-confirm="你确定要删除这个备课夹吗?" href="/xl/Lesson/delete/id/123">删除</a>
                                                |
                                                <a folder_id="123" name="addCourse" href="javascript:;">添加到课程</a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <td class="tit"> 
                                                <a target="_blank" title="第十一课 面对陌生人【备课】" href="/xl/Lesson/detail/id/122">第十一课 面对陌生人【备课】</a>
                                                <i class="notShare">未公开</i>
                                            </td>
                                            <td>
                                                <span title="第十一课 面对陌生人">第十一课 面...</span>
                                            </td>
                                            <td>
                                                小学二年级                                   
                                             </td>
                                            <td>
                                                2014-06-26 
                                            </td>
                                            <td class="operate">
                                                <a href="/xl/lesson/addResource/id/122">编辑</a>
                                                |
                                                <a class="js-confirm" data-confirm="你确定要删除这个备课夹吗?" href="/xl/Lesson/delete/id/122">删除</a>
                                                |
                                                <a folder_id="122" name="addCourse" href="javascript:;">添加到课程</a>
                                            </td>
                                    </tr>                                                      
                                    </tbody>
                            </table>
                </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：当前风格就是前面是小缩略图图标。用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                      <div class="list_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>备课夹标题</th>
                                    <th style="width:15%">对应知识点</th>
                                    <th style="width:15%">年级</th>
                                    <th style="width:15%">创建时间</th>
                                    <th style="width:23%">操作</th>
                                </tr>
                            </thead>
                            <!-- 表头可选 -->
                            <tbody>
                                    <tr class="">
                                            <td class="tit">
                                                <a target="_blank" title="第十一课 面对陌生人【备课】" href="/xl/Lesson/detail/id/123">第十一课 面对陌生人【备课】</a>
                                                <i class="share">公开</i>
                                            </td>
                                            <td>
                                                 <span title="第十一课 面对陌生人">第十一课 面...</span>
                                            </td>
                                            <td>
                                                 小学二年级                                   
                                             </td>
                                            <td>
                                                 2014-06-26                                   
                                             </td>
                                            <td class="operate">                                    
                                                <a href="/xl/lesson/addResource/id/123">编辑</a>
                                                |
                                                <a class="js-confirm" data-confirm="你确定要删除这个备课夹吗?" href="/xl/Lesson/delete/id/123">删除</a>
                                                |
                                                <a folder_id="123" name="addCourse" href="javascript:;">添加到课程</a>
                                            </td>
                                    </tr>
                                    <tr>
                                            <td class="tit"> 
                                                <a target="_blank" title="第十一课 面对陌生人【备课】" href="/xl/Lesson/detail/id/122">第十一课 面对陌生人【备课】</a>
                                                <i class="notShare">未公开</i>
                                            </td>
                                            <td>
                                                <span title="第十一课 面对陌生人">第十一课 面...</span>
                                            </td>
                                            <td>
                                                小学二年级                                   
                                             </td>
                                            <td>
                                                2014-06-26 
                                            </td>
                                            <td class="operate">
                                                <a href="/xl/lesson/addResource/id/122">编辑</a>
                                                |
                                                <a class="js-confirm" data-confirm="你确定要删除这个备课夹吗?" href="/xl/Lesson/delete/id/122">删除</a>
                                                |
                                                <a folder_id="122" name="addCourse" href="javascript:;">添加到课程</a>
                                            </td>
                                    </tr>                                                      
                                    </tbody>
                            </table>
                </div>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>  
            <br/><br/>
            <div class="show-area">
                 <div class="list_simple_table">
                     <div class="title">
                          <span>标题</span>
                          <div>时间</div>
                    </div>
                    <div class="f-cb"></div>
                    <ul>
                         <li>
                             <a name="question_url" target="_blank" href="#" url_value="http://dev.dodoedu.com/Question/view/590" class="f-fl">1111</a>
                             <span>2014-06-26 10:48:51</span>
                         </li> 
                    </ul>
                    <div class="f-cb"></div>
                </div>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：当前风格是很简单的表格样式，只有标题，日期两个字段。用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div class="list_simple_table">
                                    <div class="title">
                                      <span>标题</span>
                                      <div>时间</div>
                                    </div>
                                    <div class="f-cb"></div>
                                    <ul>
                                     <li>
                                         <a name="question_url" target="_blank" href="#" url_value="http://dev.dodoedu.com/Question/view/590" class="f-fl">1111</a>
                                         <span>2014-06-26 10:48:51</span>
                                     </li> 
                                    </ul>
                                    <div class="f-cb"></div>
                            </div>

                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
            <br/><br/>
             <div class="show-area"> 
                 <div class="list_right_ico">  
                             <ul>
                                    <li>
                                         <a href="/xl/Activity/activityInfo?activity_id=27" target="_blank"  class="pic">
                                             <img src="http://dev-images.dodoedu.com/jiaocai/activity/xl/539e5e8db10f4.jpg" alt="" width="130px" height="80px">
                                         </a>                            
                                        <dl>
                                            <dt><a href="/xl/Activity/activityInfo?activity_id=27" target="_blank">78787878723423424521423424243</a></dt>
                                            <dd><i class="icon-jioner"></i>234</dd>
                                            <dd><i class="icon-intro"></i>通识性培训</dd>
                                            <dd><i class="icon-play"></i>已有2人参与</dd>
                                        </dl>
                                        <div class="f-cb"></div>
                                    </li>
                            </ul>
                 </div> 
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：当列表右边带有ico小图标,用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" > 
                         <div class="list_right_ico">  
                                     <ul>
                                            <li>
                                                 <a href="/xl/Activity/activityInfo?activity_id=27" target="_blank"  class="pic">
                                                     <img src="http://dev-images.dodoedu.com/jiaocai/activity/xl/539e5e8db10f4.jpg" alt="" width="130px" height="80px">
                                                 </a>                            
                                                <dl>
                                                    <dt><a href="/xl/Activity/activityInfo?activity_id=27" target="_blank">78787878723423424521423424243</a></dt>
                                                    <dd><i class="icon-jioner"></i>234</dd>
                                                    <dd><i class="icon-intro"></i>通识性培训</dd>
                                                    <dd><i class="icon-play"></i>已有2人参与</dd>
                                                </dl>
                                                <div class="f-cb"></div>
                                            </li>
                                    </ul>
                         </div> 
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
             <div class="show-area"> 
                    <ul class="list_pic40">
                        <li> 
                            <a href="http://dev.dodoedu.com/w35935506404531840025/Space/Index" title="" target="_blank" class="pic">
                                 <img src="http://dev-images.dodoedu.com/image/20131372300920-130-3209-2221-40.jpg" width="40" alt="吴鹏">
                            </a>         
                            <dl>
                                <dt class="techerName">
                                     <a href="http://dev.dodoedu.com/w35935506404531840025/Space/Index" title="" target="_blank">吴鹏</a>
                                </dt>
                                <dd class="schName">
                                     <a href="http://dev.dodoedu.com/School_Home/index/school/121502" title="" target="_blank">长江出版社</a>
                                </dd>
                            </dl>
                            <div class="f-cb"></div>
                        </li> 
                    </ul>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：当列表样式右边小图宽度为40px像素,用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" > 
                        <ul class="list_pic40">
                        <li> 
                            <a href="http://dev.dodoedu.com/w35935506404531840025/Space/Index" title="" target="_blank" class="pic">
                                 <img src="http://dev-images.dodoedu.com/image/20131372300920-130-3209-2221-40.jpg" width="40" alt="吴鹏">
                            </a>         
                            <dl>
                                <dt class="techerName">
                                     <a href="http://dev.dodoedu.com/w35935506404531840025/Space/Index" title="" target="_blank">吴鹏</a>
                                </dt>
                                <dd class="schName">
                                     <a href="http://dev.dodoedu.com/School_Home/index/school/121502" title="" target="_blank">长江出版社</a>
                                </dd>
                            </dl>
                            <div class="f-cb"></div>
                        </li> 
                    </ul>  
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 
               <div class="show-area"> 
                    <ul class="list_picUp_230">
                         <li>
                         <a href="/xl/Activity/activityInfo?activity_id=17" target="_blank" class="pic"><span>活动编号178</span><img src="http://dev-images.dodoedu.com/jiaocai/536ae63f9b9b4.jpg" alt="" width="230px" height="155px"></a>
                         <dl>
                             <dt >
                                 <h3>活动描述：</h3>
                                 <p >123888</p>
                             </dt>
                             <dd>
                                 <div>
                                     <i class="icon_tc3"></i>
                                     <i class="icon_tc3"></i>
                                     <i class="icon_tc3"></i>
                                     <i class="icon_tc4"></i>
                                     <i class="icon_tc2"></i> 3.5<em>(2参与)</em>
                                 </div>
                             </dd>
                         </dl>
                         </li>
                    </ul>
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：上下结构的列表，上图为230px宽度,用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" > 
                         <ul class="list_picUp_230">
                             <li>
                             <a href="/xl/Activity/activityInfo?activity_id=17" target="_blank" class="pic"><span>活动编号178</span><img src="http://dev-images.dodoedu.com/jiaocai/536ae63f9b9b4.jpg" alt="" width="230px" height="155px"></a>
                             <dl>
                                 <dt >
                                     <h3>活动描述：</h3>
                                     <p >123888</p>
                                 </dt>
                                 <dd>
                                     <div>
                                         <i class="icon_tc3"></i>
                                         <i class="icon_tc3"></i>
                                         <i class="icon_tc3"></i>
                                         <i class="icon_tc4"></i>
                                         <i class="icon_tc2"></i> 3.5<em>(2参与)</em>
                                     </div>
                                 </dd>
                             </dl>
                             </li>
                        </ul>
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button> 

              <div class="show-area"> 
                  <ul class="list_upPic_126">
                    <li>
                        <a href="/xl/lesson/detail/id/113/resource/398" title="test.pdf" target="_blank" class="pic">
                            <span><img src="http://dev-images.dodoedu.com/wenku/ee6353513dcc3f9c.png" alt=""></span>
                        </a>
                        <p>
                            <a href="/xl/lesson/detail/id/113/resource/398" title="test.pdf" target="">
                            <i class="icon_docx f-mr5" title="word文档"></i>test.pdf
                            </a>
                        </p>
                    </li>
                </ul>
                <div class="f-cb"></div>
            </div>
            <ul class="code-area">
                <li> 
                    <span>说明：上下结构的列表，上图大小为126px,用的时候只要重复li就可以了</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" > 
                            <ul class="list_upPic_126">
                            <li>
                                <a href="/xl/lesson/detail/id/113/resource/398" title="test.pdf" target="_blank" class="pic">
                                    <span><img src="http://dev-images.dodoedu.com/wenku/ee6353513dcc3f9c.png" alt=""></span>
                                </a>
                                <p>
                                    <a href="/xl/lesson/detail/id/113/resource/398" title="test.pdf" target="">
                                    <i class="icon_docx f-mr5" title="word文档"></i>test.pdf
                                    </a>
                                </p>
                            </li>
                            </ul>
                            <div class="f-cb"></div>  
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>
        </div> 
    </fieldset>

     <fieldset id="paging-area">
        <legend>分页</legend>
        <div class="des">
            当前模块有<mark>1</mark>种结构样式效果,其他的可以根据这种进行变换。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">结合教程样例:</h4>
            <div class="show-area">
                    <div id="pageNum" class="page">
                        <div>
                            <a href="javascript:void(0)" p="2">&lt;&lt;</a>
                            <a href="javascript:void(0)" p="1">1</a>
                            <a href="javascript:void(0)" p="2">2</a>
                            <b>3</b>
                            <a href="javascript:void(0)" p="4">4</a>
                            <a href="javascript:void(0)" p="5">5</a>
                            <a href="javascript:void(0)" p="4">&gt;&gt;</a>
                        </div>
                    </div>    
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前就一种结构的翻页样式，可以根据不同的风格适当的调整样式</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div id="pageNum" class="page">
                                    <div>
                                            <a href="javascript:void(0)" p="2">&lt;&lt;</a>
                                            <a href="javascript:void(0)" p="1">1</a>
                                            <a href="javascript:void(0)" p="2">2</a>
                                            <b>3</b>
                                            <a href="javascript:void(0)" p="4">4</a>
                                            <a href="javascript:void(0)" p="5">5</a>
                                            <a href="javascript:void(0)" p="4">&gt;&gt;</a>
                                    </div>
                            </div>    
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>  

           
        </div> 
    </fieldset>

     <fieldset id="paging-area">
        <legend>暂无内容</legend>
        <div class="des">
            当前模块有<mark>1</mark>种结构样式效果,其他的可以根据这种进行变换。
        </div>
        <div class="code-demo1">
            <h4 style="display:inline-block;">结合教程样例:</h4>
            <div class="show-area">
                    <div id="pageNum" class="page">
                        <div>
                            <a href="javascript:void(0)" p="2">&lt;&lt;</a>
                            <a href="javascript:void(0)" p="1">1</a>
                            <a href="javascript:void(0)" p="2">2</a>
                            <b>3</b>
                            <a href="javascript:void(0)" p="4">4</a>
                            <a href="javascript:void(0)" p="5">5</a>
                            <a href="javascript:void(0)" p="4">&gt;&gt;</a>
                        </div>
                    </div>    
            </div>
            <ul class="code-area">
                <li> 
                    <span> 说明：目前就一种结构的翻页样式，可以根据不同的风格适当的调整样式</span>
                   
                </li> 
                <li class="code hide">
                    <textarea rows="9" cols="100" class="code_textarea" >
                            <div id="pageNum" class="page">
                                    <div>
                                            <a href="javascript:void(0)" p="2">&lt;&lt;</a>
                                            <a href="javascript:void(0)" p="1">1</a>
                                            <a href="javascript:void(0)" p="2">2</a>
                                            <b>3</b>
                                            <a href="javascript:void(0)" p="4">4</a>
                                            <a href="javascript:void(0)" p="5">5</a>
                                            <a href="javascript:void(0)" p="4">&gt;&gt;</a>
                                    </div>
                            </div>    
                    </textarea>
                </li>
            </ul> 
            <button class="copy_code f-fr" style="margin-right:115px;">复制代码</button>  

           
        </div> 
    </fieldset>

    <script>
       $(document).ready(function(){
       	    $('.copy_code').zclip({
       	    	path : '../static/script/ZeroClipboard.swf',
       	    	copy : function(){
                    var mythis=this;
                   return $(this).prev('.code-area').find('.code_textarea').val();
               }
    });
       });
    </script>
</body> 
</html>