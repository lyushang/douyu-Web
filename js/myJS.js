function changeSearchBox(){
    document.getElementById("searchArea").style.width="144px";
    document.getElementById("searchBox").placeholder = "主播、房间、分类、视频";
}

function changePlayer(n){
    document.getElementById("mainPlayer").style.backgroundImage="url(images/player"+n+".jpg)";
    
    var a = "a" + n;
    var player="player"+n;
    var sliderBorder = document.getElementsByClassName("slider-border");
    document.getElementById(player).onmouseout = null;
    document.getElementById(a).style.borderRight="8px solid #ff5d23";
    sliderBorder[n-1].style.display = "block";
    
    
    for (var i=1; i<7; i++){
        if(i!=n){
            a = "a" + i;
            player="player"+i;
            sliderBorder[i-1].style.display="none";
//TODO figure out how to pass i into function
            document.getElementById(player).onmouseover = (function () { sliderBorder[i - 1].style.display = "block"})();
            document.getElementById(player).onmouseout = (function () { sliderBorder[i - 1].style.display = "none"})();
            document.getElementById(a).style.borderRight="8px solid transparent";
        }
    }
    
}

var week_db=[["https://www.douyu.com/4615502","https://www.douyu.com/5524515","https://www.douyu.com/2947432","https://www.douyu.com/1457640","https://www.douyu.com/101367"],["images/week_rank_1.webp","images/week_rank_2.webp","images/week_rank_3.webp","images/week_rank_4.webp","images/week_rank_5.webp"],["一条小团团OvO","陈死狗cnh","呆妹儿小霸王","仙某某","轻语丶619"],["rankUnChange","rankIsUp","rankIsUp","rankIsDown","rankIsUp"]]
var month_db=[["https://www.douyu.com/4615502","https://www.douyu.com/1457640","https://www.douyu.com/2947432","https://www.douyu.com/5524515","https://www.douyu.com/101367"],["images/week_rank_1.webp","images/week_rank_4.webp","images/week_rank_3.webp","images/week_rank_2.webp","images/week_rank_5.webp"],["一条小团团OvO","仙某某","呆妹儿小霸王","陈死狗cnh","轻语丶619"],["rankUnChange","rankUnChange","rankUnChange","rankUnChange","rankUnChange"]]

function changeRank(){
    var weekBut = document.getElementById("weekRank");
    var monthBut = document.getElementById("monthRank"); 
    
    monthBut.onclick=function(){
        monthBut.className="a-more active";
        weekBut.className="a-more";
        var url=month_db[0];
        var image=month_db[1];
        var name=month_db[2];
        var rank=month_db[3];
        var rankInfo = document.getElementsByClassName("rankInfo");
        var rankIcon = document.getElementsByClassName("rankIcon");
        var rankName = document.getElementsByClassName("rankName");
        var rankChange = document.getElementsByClassName("rankChange");
        
        for(var i=0;i<5;i++){
            rankInfo[i].href=url[i];
            rankInfo[i].title=name[i];
            rankIcon[i].childNodes[1].src=image[i];
            rankName[i].innerHTML=name[i];
            rankChange[i].childNodes[1].className=rank[i]; 
        }
    }
    weekBut.onclick= function(){
        weekBut.className="a-more active";
        monthBut.className="a-more";
        var url=week_db[0];
        var image=week_db[1];
        var name=week_db[2];
        var rank=week_db[3];
        var rankInfo = document.getElementsByClassName("rankInfo");
        var rankIcon = document.getElementsByClassName("rankIcon");
        var rankName = document.getElementsByClassName("rankName");
        var rankChange = document.getElementsByClassName("rankChange");
        
        for(var i=0;i<5;i++){
            rankInfo[i].href=url[i];
            rankInfo[i].title=name[i];
            rankIcon[i].childNodes[1].src=image[i];
            rankName[i].innerHTML=name[i];
            rankChange[i].childNodes[1].className=rank[i];
        }
    }
}


// add parts to html

var lol_database = {
    id: "lol",
    url: "https://www.douyu.com/g_LOL",
    icon_url: "images/lol_icon.webp",
    title: "英雄联盟",
    num: 848,
    content_urls: ["https://www.douyu.com/68172", 
    "https://www.douyu.com/1289415", 
    "https://www.douyu.com/31107", 
    "https://www.douyu.com/5377721",
    "https://www.douyu.com/787579",
    "https://www.douyu.com/226037",
    "https://www.douyu.com/664668",
    "https://www.douyu.com/topic/DCAchallenge?rid=288016"
    ],
    content_titles: ["快乐风男：eeeeeeeeeeeeeee",
    "会词不多...多了不说",
    "胖胖OB：韩服王者 LPL\LCK撞车", 
    "看完必上钻！上单锐雯教学！",
    "月蚀雷霆劫天下无敌！上分秘籍!",
    "最强野王:台服区思路反野3分钟一血教学！",
    "珍惜每一个小幸运",
    "13日17点LPL春季赛IGvsFPX"
    ],
    content_images: ["images/lol_1.webp", 
    "images/lol_2.webp", 
    "images/lol_3.webp", 
    "images/lol_4.webp",
    "images/lol_5.webp",
    "images/lol_6.webp",
    "images/lol_7.webp",
    "images/lol_8.webp",
    ],
    content_types: ["英雄联盟", "英雄联盟", "英雄联盟", "英雄联盟", "英雄联盟", "英雄联盟", "英雄联盟", "英雄联盟"],
    content_users: ["凉风亚索yasuo", "最强皇童王丽农", "胖胖灬", "Xx丶锐雯", "仙凡哥哥丶", "MQ丶蜘蛛馍", "小酒窝翁馨", "英雄联盟赛事"],
    content_hot: ["23万", "49.3万", "47万", "57.1万", "56.5万", "28.5万", "27万", "54.4万"]
};

var cf_database = {
    id:"cf",
    url:"https://www.douyu.com/g_CF",
    icon_url:"images/cf_icon.webp",
    title:"穿越火线",
    num:143,
    content_urls: ["https://www.douyu.com/6688811",
    "https://www.douyu.com/topic/CFPL-S15",
    "https://www.douyu.com/4333088",
    "https://www.douyu.com/3357246",
    "https://www.douyu.com/435504",
    "https://www.douyu.com/5925135",
    "https://www.douyu.com/6043590",
    "https://www.douyu.com/1974713"
                    ],
    content_titles: ["各区排位/首胜+   北部荣耀枪王求带", 
    "2月22日 CFPL秋季赛总决赛", 
    "小哲：一定要笑着玩游戏！",
    "肖晨：新生化挑战赛",
    "前一百局疯狂C。CCC",
    "陪伴是最长情的告白 5925135",
    "暴力AK少女排位如人机",
    "湖北4届省冠金枪王 了解下"
                    ],
    content_images: ["images/cf_1.webp", 
    "images/cf_2.webp", 
    "images/cf_3.webp", 
    "images/cf_4.webp", 
    "images/cf_5.webp", 
    "images/cf_6.webp", 
    "images/cf_7.webp", 
    "images/cf_8.webp" 
],
    content_types: ["穿越火线", "穿越火线", "穿越火线", "穿越火线", "穿越火线", "穿越火线", "穿越火线", "穿越火线"],
    content_users: ["白鲨小璐娜", "穿越火线运营团队", "渝万丶小哲", "肖晨吖", "鲜肉赵山河", "菜敏子", "Baby擎1004", "白鲨金豆豆"],
    content_hot: ["7.8万", "13.6万", "8.1万", "17.1万", "63.8万", "7.9万", "14.1万", "7.1万"]
};

var wzry_database = {
    id: "wzry",
    url: "https://www.douyu.com/g_wzry",
    icon_url: "images/wzry_icon.webp",
    title: "王者荣耀",
    num: 499,
    content_urls: ["https://www.douyu.com/218716", 
    "https://www.douyu.com/6703968",
    "https://www.douyu.com/258718",
    "https://www.douyu.com/4749583",
    "https://www.douyu.com/2433239",
    "https://www.douyu.com/2360132",
    "https://www.douyu.com/7349106",
    "https://www.douyu.com/6499690"
    ],
    content_titles: ["阿君:国服曜 单排冲冲冲",
    "你想成为峡谷王者吗？",
    "国服孙悟空万场猴王，最强身法猴~",
    "国服哪吒司马懿，新赛季带粉5排走起",
    "李白带粉5排 帮自己戒网瘾",
    "第一兰陵王~单排上王者教学",
    "新版本单排打野教学 包教包会",
    "第一露娜新版本乱秀"
    ],
    content_images: ["images/wzry_1.webp", 
    "images/wzry_2.webp", 
    "images/wzry_3.webp", 
    "images/wzry_4.webp", 
    "images/wzry_5.webp", 
    "images/wzry_6.webp", 
    "images/wzry_7.webp", 
    "images/wzry_8.webp"
],
    content_types: ["王者荣耀", "王者荣耀", "王者荣耀", "王者荣耀", "王者荣耀", "王者荣耀", "王者荣耀", "王者荣耀"],
    content_users: ["阿君Doja", "Mars丶命运丨", "国服万场猴王宅哥", "环斐丶蓝羽", "可爱的灰太白", "心海兰陵王", "BOA杭杭", "国宝佳悦"],
    content_hot: ["37.7万", "47.5万", "30.2万", "38.3万", "30.1万", "32.1万", "49.7万", "34.1万"]
};

var databases = [lol_database, cf_database, wzry_database];

window.onload = addElement;

function createElementWithClass(classN){
    var div = document.createElement("div");
    div.className = classN;
    return div;
}

function createElementWithSpan(spanN){
    var span = document.createElement("span");
    span.className = spanN;
    return span;
}

function addElement(){
    var main = document.getElementById("mainContent");
    var usersvg = document.getElementsByClassName("layout2-icon")[1]
    var hotsvg = document.getElementsByClassName("layout2-icon")[0]

    for (var i = 0; i<databases.length; i++){
        var database = databases[i];

        var id = database.id;
        var url = database.url;
        var icon_url = database.icon_url;
        var title = database.title;
        var num = database.num;
        var content_urls = database.content_urls;
        var content_titles = database.content_titles;
        var content_images = database.content_images;
        var content_types = database.content_types;
        var content_users = database.content_users;
        var content_hot = database.content_hot;

        var div1 = createElementWithClass("layout2");
        div1.id = "part_" + id;
        if (id == "lol"){
            var jdqs = document.getElementById("part_jdqs");
            main.insertBefore(div1, jdqs);
        }
        else{
            var gfhd = document.getElementById("part_gfhd");
            main.insertBefore(div1, gfhd);
        }

        var div2 = createElementWithClass("layout2-part");
        div2.id = id;
        div1.appendChild(div2);

        // add header
        var div_header = createElementWithClass("layout2-header");
        div2.appendChild(div_header);

        var layout_icon = createElementWithClass("layout-icon");
        var icon_a = document.createElement("a");
        icon_a.href=url;
        icon_a.target="_blank";
        var icon_img = document.createElement("img");
        icon_img.src = icon_url;
        icon_a.appendChild(icon_img);
        layout_icon.appendChild(icon_a);
        div_header.appendChild(layout_icon);

        var layout_head = createElementWithClass("layout-head");
        var div_title = document.createElement("h2");
        var title_a = document.createElement("a");
        title_a.href = url;
        title_a.target = "_blank";
        title_a.innerHTML = title;
        div_title.appendChild(title_a);
        layout_head.appendChild(div_title);
        div_header.appendChild(layout_head);

        var layout_extra = createElementWithClass("layout-extra");
        var layout_live = createElementWithClass("layout-live");
        var liveLabel = createElementWithSpan("liveLabel");
        liveLabel.innerHTML = "当前直播 ";
        layout_live.appendChild(liveLabel);
        var liveNum = createElementWithSpan("liveNum");
        liveNum.innerHTML = num;
        layout_live.appendChild(liveNum);
        var split = createElementWithSpan("split");
        layout_live.appendChild(split);
        var layout_more = createElementWithClass("layout-more");
        var more_a = document.createElement("a");
        more_a.href = url;
        more_a.target = "_blank";
        more_a.className = "a-more";
        more_a.innerHTML = "更多 >"
        layout_more.appendChild(more_a);
        layout_extra.appendChild(layout_live);
        layout_extra.appendChild(layout_more);
        div_header.appendChild(layout_extra);

        // add content
        var div_content = createElementWithClass("layout2-content");
        var ul = document.createElement("ul");
        ul.className = "layout-list";
        for(var idx=0;idx<8;idx++){
            var li = document.createElement("li");
            li.className = "layout-list-item";
            var user_a = document.createElement("a");
            user_a.className = "layout-a";
            user_a.href = content_urls[idx];
            user_a.target="_blank";
            user_a.title= content_titles[idx];
            li.appendChild(user_a);

            var layout_pic = createElementWithClass("layout2-pic");
            var layout_img = createElementWithClass("layout2-img");
            var user_img = document.createElement("img");
            user_img.src = content_images[idx];
            layout_img.appendChild(user_img);
            layout_pic.appendChild(layout_img);
            user_a.appendChild(layout_pic);

            var layout_description = createElementWithClass("layout2-description");
            var layout_title = createElementWithClass("layout2-title");
            var type = createElementWithSpan("layout2-type")
            type.innerHTML = content_types[idx];
            layout_title.appendChild(type);
            var content = document.createElement("h3");
            content.title = content_titles[idx];
            content.innerHTML = content_titles[idx];
            layout_title.appendChild(content);
            layout_description.appendChild(layout_title);

            var layout_title_second = createElementWithClass("layout2-title second");
            var hot_icon = createElementWithSpan("layout2-hot");
//TODO add SVG
            hot_icon.innerHTML = content_hot[idx];
            layout_title_second.appendChild(hot_icon);

            var user = document.createElement("h2");
//TODO add SVG
            user.innerHTML = content_users[idx];
            layout_title_second.appendChild(user);
            layout_description.appendChild(layout_title_second);

            user_a.appendChild(layout_description);
            ul.appendChild(li);
        }
        div_content.appendChild(ul);
        div2.appendChild(div_content);
    }

}


function showLeftBar (){
    var height = document.documentElement.scrollTop;
    var leftBar = document.getElementById("left-sideBar");
    var top = document.getElementById("yzns");
    var show_time = top.offsetTop-top.offsetHeight;

    if(height > show_time){
        leftBar.style.display="block";
    }
    else if(height < show_time){
        leftBar.style.display="none";
    }
}


function changeActive(n){
    var items = document.getElementById("s"+n);
    items.className="left-sideBar-item is-active";
    items.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(images/left_sidebar_"+n+".webp)";
    var seperators = document.getElementsByClassName("seperator");
    seperators[n-1].style.display="inline-block";

    for (var i=1;i<6;i++){
        if(i!=n){
            if(i%2 == 0){
                var item = document.getElementById("s"+i);
                item.className="left-sideBar-item";
                item.style.backgroundImage = "none";
            }
            else{
                var item = document.getElementById("s"+i);
                item.className="left-sideBar-item grey";
                item.style.backgroundImage = "none";
            }
            seperators[i-1].style.display="none";
        }
    }
}

var part_id = ["yzns", "part_lol", "part_jdqs", "part_cf", "part_wzry"];

function locate_leftSideBar(){
    var seperators = document.getElementsByClassName("seperator");
    var items = document.getElementsByClassName("left-sideBar-item");
    
    for(var i=0; i<items.length; i++){
        var id = part_id[i];
        var part = document.getElementById(id);
        var botHeight = part.offsetTop;
        var elementHeight = part.offsetHeight;
        var topHeight = botHeight - elementHeight;
        var height = document.documentElement.scrollTop;

        if(height>topHeight && height<botHeight){
            items[i].className="left-sideBar-item is-active";
            items[i].style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(images/left_sidebar_"+(i+1)+".webp)";
            seperators[i].style.display="inline-block";
        }
        else{
            if(i%2==0){
                items[i].className="left-sideBar-item grey";
            }
            else{
                items[i].className="left-sideBar-item";
            }
            items[i].style.backgroundImage = "none";
            seperators[i].style.display="none";
        }
    }
}


function showRightBackTop(){
    var height = document.documentElement.scrollTop;
    var backTop = document.getElementById("back-top");

    if(height > 400){
        backTop.style.display="block";
    }
    else{
        backTop.style.display="none";
    }
}

window.addEventListener("scroll", function(){
    showRightBackTop();
    locate_leftSideBar();
    showLeftBar();
});


function tjhd_player (){
    var full_items = document.getElementById("full-items");
    var players = document.getElementsByClassName("tjhd-player");
    setTimeout(function(){
        for(var i=0;i<3;i++){
            if(players[i].className == "tjhd-player is-show"){
                var index=(i+1)%3;
                full_items.style.transform="translateX("+index*(-33.33)+"%)";
                players[index].className = "tjhd-player is-show";
                players[i].className="tjhd-player";
                changeDot();
                break;
            }
        }
    }, 1000);
}

function chooseDot(){
    clearInterval(4);
}

function changeDot(){
    var player = document.getElementsByClassName("tjhd-player");
    var dot = document.getElementsByClassName("dots");

    for(var i=0; i<3; i++){
        if(player[i].className == "tjhd-player is-show"){
            dot[i].className = "dots is-selected";
        }
        else{
            dot[i].className = "dots";
        }
    }
}



window.onload=function(){
    this.tjhd_player();
    setInterval(tjhd_player, 1000);
};