var _base="//qzonestyle.gtimg.cn/qzone/v6/portal/";var QZONE=window.QZONE||{};function imagezoom(e,t,i){var a=e.width;var n=e.height;var o=a/n,s=t/i;var r,c;if(o>s){r=t;c=Math.round(r/a*n)}else{if(o<s){c=i;r=Math.round(c/n*a)}else{r=t;c=i}}e.style.marginLeft=(t-r)/2+"px";e.style.marginTop=(i-c)/2+"px";e.style.width=r+"px";e.style.height=c+"px";e.style.opacity=1}(function(e,f){var $scope={};var current;var tmnow;var chId
;var cityList="|石家庄|唐山|秦皇岛|邯郸|邢台|保定|张家口|承德|沧|廊坊|衡水|太原|大同|阳泉|长治|晋城|朔|晋中|运城|忻|临汾|吕梁|呼和浩特|包头|乌海|赤峰|通辽|鄂尔多斯|呼伦贝尔|巴彦淖尔|乌兰察布|锡林郭勒盟|阿拉善盟|兴安盟|南京|无锡|徐|常|苏|南通|连云港|淮安|盐城|扬|镇江|泰|宿迁|合肥|芜湖|蚌埠|淮南|马鞍山|淮北|铜陵|安庆|黄山|滁|阜阳|宿|巢湖|六安|亳|池|宣城|济南|青岛|淄博|枣庄|东营|潍坊|烟台|威海|济宁|泰安|日照|莱芜|临沂|德|聊城|滨|菏泽|沈阳|大连|鞍山|抚顺|本溪|丹东|锦|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛|长春|吉林|四平|辽源|通化|白山|松原|白城|延边|哈尔滨|齐齐哈尔|鸡西|鹤岗|双鸭山|大庆|伊春|牡丹江|佳木斯|七台河|黑河|绥化|大兴安岭地区|杭|宁波|温|嘉兴|湖|绍兴|金华|衢|舟山|台|丽水|南昌|景德镇|萍乡|九江|新余|鹰潭|赣|吉安|宜春|抚|上饶|福|厦门|莆田|三明|泉|漳|南平|龙岩|宁德|武汉|黄石|襄樊|十堰|荆|宜昌|荆门|鄂|孝感|黄冈|咸宁|随|恩施|仙桃|天门|潜江|神农架林区|长沙|株洲|湘潭|衡阳|邵阳|岳阳|常德|张家界|益阳|郴|永|怀化|娄底|湘西|郑|开封|洛阳|平顶山|焦作|鹤壁|新乡|安阳|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源|广|深圳|珠海|汕头|韶关|河源|梅|惠|汕尾|东莞|中山|江门|佛山|阳江|湛江|茂名|肇庆|清远|潮|揭阳|云浮|南宁|柳|桂林|梧|北海|防城港|钦|贵港|玉林|百色|贺|河池|来宾|崇左|海口|三亚|五指山|琼海|儋|文昌|万宁|东方|澄迈|定安|屯昌|临高|白沙|||||||||||||||||||||||||||||||成都|自贡|攀枝花|泸|德阳|绵阳|广元|遂宁|内江|乐山|南充|宜宾|广安|达|眉山|雅安|巴中|资阳|阿坝|甘孜|凉山|贵阳|六盘水|遵义|安顺|铜仁地区|毕节地区|黔西南|黔东南|黔南|昆明|曲靖|玉溪|保山|昭通|丽江|思茅|临沧|文山|红河|西双版纳|楚雄|大理|德宏|怒江|迪庆|拉萨|那曲地区|昌都地区|山南地区|日喀则地区|阿里地区|林芝地区|西安|铜川|宝鸡|咸阳|渭南|延安|汉中|榆林|安康|商洛|兰|金昌|白银|天水|嘉峪关|武威|张掖|平凉|酒泉|庆阳|定西|陇南|临夏|甘南|银川|石嘴山|吴忠|固原|中卫|西宁|海东地区|海北|黄南|海南|果洛|玉树|海西|乌鲁木齐|克拉玛依|吐鲁番地区|哈密地区|和田地区|阿克苏地区|喀什地区|克孜勒苏柯|巴音郭楞|昌吉|博尔塔拉|伊犁|塔城地区|阿勒泰地区|石河子|阿拉尔|||台北|高雄|台中|花莲|基隆|嘉义|金门|连江|苗栗|南投|澎湖|屏东|台东|台南|桃园|新竹|宜兰|云林|彰化|北京|上海|天津|重庆|香港|澳门".split("|")
;var provList="|北京|天津|河北|山西|内蒙古|江苏|安徽|山东|辽宁|吉林|黑龙江|上海|浙江|江西|福建|湖北|湖南|河南|广东|广西|海南|重庆|四川|贵州|云南|西藏|陕西|甘肃|宁夏|青海|新疆|香港|澳门|台湾".split("|");function l(e,t){function i(){"loaded"===a.readyState&&setTimeout(function(){t&&t()},0)}var a=f.createElement("script");a.addEventListener?t&&a.addEventListener("load",t,!1):a.attachEvent("onreadystatechange",i);k&&k.appendChild(a);a.src=e}function getData(e,t){var i=document.createElement("script");function a(){if(/(complete)|(loaded)/.test(i.readyState)&&t){t()}}if(i.addEventListener){if(t){i.addEventListener("load",t,false)}}else{i.attachEvent("onreadystatechange",a)}(document.head||document.getElementsByTagName("head")[0]).appendChild(i);i.src=e}function setTopData(tdata){current=tdata;$scope.topname=tdata.name;$scope.topgender=tdata.sex;$scope.topbirth=tdata.birth_time;$scope.toplostdate=tdata.lost_time;$scope.toplostplace=tdata.lost_place;$scope.toplostdesc=tdata.child_feature;$scope.toplink=tdata.url;$scope.topimg=tdata.child_pic
;$scope.topid=tdata._id;$scope.renderTarget=document.getElementById($scope.renderTarget);$scope.renderTarget=$scope.renderTarget?$scope.renderTarget:document.body;$scope.renderTarget.innerHTML=template("body",$scope);if($scope.renderTarget!=document.body){with(document.getElementById("mainWrap").style){position="relative";marginTop=0;top="0";height="auto"}}}for(var k=f.head||f.getElementsByTagName("head")[0],c={},p,r,s,n,t,a=document.getElementsByTagName("script"),b=0;b<a.length;b++)if(-1<a[b].src.indexOf("/404/search_children.js")){n=a[b].getAttribute("homePageUrl");t=a[b].getAttribute("homePageName");$scope.renderTarget=a[b].getAttribute("renderTarget");break}$scope.rettext=t||(-1<location.href.indexOf("qzone.qq.com")?"返回我的空间":"返回腾讯网");$scope.retlink=n||(-1<location.href.indexOf("qzone.qq.com")?"http://qzone.qq.com/":"http://www.qq.com/");var h;var city="未知",province="未知";var caseList=[],optList=[];window._Callback=function(e){clearTimeout(h);city=cityList[e.data.city_code]
;province=provList[e.data.province_code];if(!city)city="未知";if(!province)province="未知";tmnow=1e3*e.data.tm_now;getData(_base+"gy/404/data.js",function(){var e=jsondata.data;if(e&&e.length){e.sort(function(){return Math.random()-.5});for(var t=0;t<e.length;t++){e[t]._id=Math.random();if(!e[t].expire){var i=e[t].lost_place;if(i.indexOf(city)>-1){caseList.unshift(e[t])}else if(i.indexOf(province)>-1){caseList.push(e[t])}else{optList.push(e[t])}}}e=caseList.concat(optList);tdata=e[0];if(!tdata.ext1){tdata.ext1="但我们可以一起寻找失踪宝贝"}$scope.otherdata=e.slice(0,6);setTopData(tdata)}})};h=setTimeout(function(){_Callback({code:0,subcode:0,message:"",default:0,data:{city_code:0,country_code:0,province_code:0,query_ret:0,tm_now:(new Date).getTime()/1e3}})},2e3);getData("//h5.qzone.qq.com/proxy/domain/boss.qzone.qq.com/fcg-bin/fcg_zone_info");window.share=function(e){
var t=["背景：",current.name,"，性别：",current.sex,"，出生时间：",current.birth_time,"，失踪时间：",current.lost_time,"，特征描述：",current.child_feature].join("");if(t){t="#寻找失踪的宝贝#"+t}var i="失踪的宝贝详情";var a="失踪的宝贝要回家，快来参与爱心的传递吧！";var n=encodeURIComponent;var o={surl:"http://qzone.qq.com/gy/404/"+current.id+"/lostchild.html",site:"QQ空间",summary:t||"#宝贝回家#腾讯志愿者用技术点亮公益，让我们一起寻找走失的儿童吧！",stitle:i,pics:current.child_pic,desc:a,origin_url:current.url};var s=o.surl||"http://www.qq.com/404/",t=o.summary||"这个是分享的内容",i=o.stitle||"这个是分享的标题",r=o.pics||"http://qzonestyle.gtimg.cn/qzone_v6/act/img/20120422_qzone_7_years/pop_up/icon-pop-seven-years.png",c=o.site||"这个是分享链接的文字",a=o.desc||"失踪的宝贝要回家，快来参与爱心的传递吧！",l=o.origin_url||"http://www.qq.com/404/";var d={weibo:{method:function(e){var i="http://v.t.qq.com/share/share.php",a=["?site=",n(s+"#via=share_t_weib"),"&title=",n(t),"&pic=",n(r),"&url=",n(s)].join(""),o=[i,a].join("")
;p(o,"weibo","width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no")}},qzone:{method:function(e){var o=[],l={url:s+"#via=404-qzoneshare",desc:a||"失踪的宝贝要回家，快来参与爱心的传递吧！",summary:t,title:i,pics:r,site:c};for(var d in l){o.push(d+"="+n(l[d]||""))}var h="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+o.join("&"),u=["#via=share_t_qzone","&title=",n(t),"&pic=",n(r),"&url=",n(s)].join(""),m=[h,u].join("");p(m,"qzone","width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no")}},sina:{method:function(){var e="http://v.t.sina.com.cn/share/share.php",i=["?url=",n(s+"#via=share_x_weib"),"&title=",n(t),"&source=","&sourceUrl=",s,"&content=utf-8","&pic=",n(r)].join(""),a=[e,i].join("");p(a,"sina","toolbar=0,status=0,resizable=1,width=440,height=430")}},kaixin:{method:function(){
var e="http://www.kaixin001.com/repaste/bshare.php?rurl="+n(s+"#via=share_kaixin")+"&rcontent=&rtitle="+n(t);p(e,"kaixin","toolbar=0,status=0,resizable=1,width=600,height=360")}},renren:{method:function(){var e="http://www.connect.renren.com/share/sharer?title="+n(t)+"&url="+n(s+"#via=share_renren"),i=window.open(e,"rr","toolbar=0,status=0,resizable=1,width=510,height=300");if(i){i.focus()}}},weixin:{method:function(){var e="http://qzone.qq.com/gy/404/page/qrcode.html?url="+n(l+"#via=share_weixin"),t=window.open(e,"rr","toolbar=0,status=0,resizable=1,width=620,height=430");if(t){t.focus()}}}};var p=function(e,t,i){function a(){var a;if(!(a=window.open(e,t,i))){location.href=e}else{a.focus()}}a()};d[e]&&d[e].method()};window.toThis=function(e){for(var t=0;t<$scope.otherdata.length;t++){if($scope.otherdata[t]._id==e){setTopData($scope.otherdata[t]);break}}return false};n=document.createElement("meta");n.name="viewport"
;n.content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";k.appendChild(n);(function(){var e=document.createElement("link");e.rel="stylesheet";e.type="text/css";e.href="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/style/404style_min.css";k.appendChild(e)})()})(window,document);!function(){function e(e,t){return(/string|function/.test(typeof t)?n:a)(e,t)}function t(e,i){return"string"!=typeof e&&(i=typeof e,"number"===i?e+="":e="function"===i?t(e.call(e)):""),e}function i(e){return c[e]}function a(t,i){var a=e.get(t)||o({filename:t,name:"Render Error",message:"Template not found"});return i?a(i):a}function n(e,t){if("string"==typeof t){var i=t;t=function(){return new r(i)}}var a=s[e]=function(i){try{return new t(i,e)+""}catch(e){return o(e)()}};return a.prototype=t.prototype=d,a.toString=function(){return t+""},a}function o(e){var t=e.stack||"";if(t)t=t.split("\n").slice(0,2).join("\n");else for(var i in e)t+="<"+i+">\n"+e[i]+"\n\n";return function(){
return"object"==typeof console&&console.error("{Template Error}\n\n"+t),"{Template Error}"}}var s=e.cache={},r=this.String,c={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},l=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},d=e.utils={$helpers:{},$include:function(e,t,i){var n=e,o=/(\/)[^/]+\1\.\.\1/;i=("./"+i).replace(/[^/]+$/,"")+n;for(i=i.replace(/\/\.\//g,"/");i.match(o);)i=i.replace(o,"/");return e=i,a(e,t)},$string:t,$escape:function(e){return t(e).replace(/&(?![\w#]+;)|[<>"']/g,i)},$each:function(e,t){if(l(e))for(var i=0,a=e.length;a>i;i++)t.call(e,e[i],i,e);else for(i in e)t.call(e,e[i],i)}},p=e.helpers=d.$helpers;e.get=function(e){return s[e.replace(/^\.\//,"")]};e.helper=function(e,t){p[e]=t};"function"==typeof define?define(function(){return e}):"undefined"!=typeof exports?module.exports=e:this.template=e;e("body",function(e){var t=(this.$helpers,
this.$escape),i=e.retlink,a=e.rettext,n=e.topid,o=e.topimg,s=e.topname,c=e.topgender,l=e.topbirth,d=e.toplostdate,p=e.toplostplace,h=e.toplostdesc,u=e.toplink,m=this.$each,f=e.otherdata,v=(e.otheritem,e.index,""),_=new Date,g=_.getMonth()+1,b=_.getDate();return v+='<div class="mod_404"> <div class="wrapper" id="mainWrap"> <div class="mod_hd"> <h1 class="title'+(g===4&&(b===18||b===19)?" title_419":"")+'"><span class="title_inner">404，您访问的页面找不回来了，但我们可以一起帮他们回家！</span></h1> <div class="desc"><a href="',v+=t(i),v+='" class="desc_link">',v+=t(a),v+='</a></div> </div> <div class="mod_bd"> <div class="child_box"> <div class="mod_404_child child_in" data-id="',v+=t(n),v+='" id="top_',v+=t(n),v+='"> <div class="child_main cf"> <div class="child_avatar"><img src="',v+=t(o).replace(/http:\/\/qzone\.qq\.com\//g,"//imgcache.qq.com/qzone/v6/portal/"),v+='" onload="imagezoom(this, 160, 216);" style="opacity:0"></div> <div class="child_info"> <div class="info_name"> <h2><span class="name_inner">',
v+=t(s),v+='</span><span class="info_sex">(',v+=t(c),v+=')</span></h2> </div> <div class="info_item info_birth"><span class="info_lbl">出生日期：</span><span class="item_inner">',v+=t(l),v+='</span></div> <div class="info_item info_time"><span class="info_lbl">失踪时间：</span><span class="item_inner">',v+=t(d),v+='</span></div> <div class="info_item info_address"><span class="info_lbl">失踪地点：</span><span class="item_inner">',v+=t(p),v+='</span></div> <div class="info_item info_desc"><span class="info_lbl">失踪人特征描述：</span><span class="item_inner">',v+=t(h),v+='</span></div> <a href="',v+=t(u),
v+='" class="link_view" title="查看详情"><span class="link_inner">查看详情</span></a> </div> </div> <div class="child_bottom cf"> <div class="bottom_logo"> <ul class="logo_list"> <li><a href="http://e.t.qq.com/Tencent-Volunteers" title="腾讯志愿者"><img src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/style/image/logo_tencentvolunteers.png"></a></li> <li><a href="http://bbs.baobeihuijia.com/forum.php" title="宝贝回家"><img src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/style/image/logo_baobeihuijia.png"></a></li> </ul> </div> <div class="bottom_right"> <div class="mod_share" onmouseover="this.className += \' mod_share_hover\';" onmouseout="this.className = this.className.replace(\' mod_share_hover\',\'\')"> <span class="share_inner">分享</span> <ul class="share_list"> <li><a href="javascript:void(0);" class="share_link" onclick="share(\'weibo\');return false;" title="腾讯微博"><span class="link_inner">腾讯微博</span><i class="ico_tencentweibo"></i></a></li> <li><a href="javascript:void(0);" class="share_link" onclick="share(\'qzone\');return false;" title="QQ空间"><span class="link_inner">QQ空间</span><i class="ico_qzone"></i></a></li> <li><a href="javascript:void(0);" class="share_link" onclick="share(\'sina\');return false;" title="新浪微博"><span class="link_inner">新浪微博</span><i class="ico_sinaweibo"></i></a></li> <li><a href="javascript:void(0);" class="share_link" onclick="share(\'weixin\');return false;" title="微信"><span class="link_inner">微信</span><i class="ico_weixin"></i></a></li> </ul> <span style="clear: both;"></span> </div> </div> </div> </div> <i class="ico_corner"></i> </div> </div> <div class="mod_fd"> <div class="mod_404_children"> <ul class="children_list"> ',
m(f,function(e){v+=' <li class="';v+=t(n==e._id?"current":"");v+='"><a href="javascript:;" onclick="toThis(\'';v+=t(e._id);v+='\');" title="';v+=t(e.name);v+='" ><img src="';v+=t(e.child_pic).replace(/http:\/\/qzone\.qq\.com\//g,"//imgcache.qq.com/qzone/v6/portal/");v+='"></a></li> '}),v+=" </ul> </div> </div> </div> </div>",new r(v)})}();