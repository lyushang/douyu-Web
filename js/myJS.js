function changeSearchBox(){
    document.getElementById("searchArea").style.width="144px";
    document.getElementById("searchBox").placeholder = "主播、房间、分类、视频";
}

function changePlayer(n){
    document.getElementById("mainPlayer").style.backgroundImage="url(images/player"+n+".jpg)";
    
    var a = "a" + n;
    var player="player"+n;
    document.getElementById(player).onmouseout = null;
    document.getElementById(a).style.borderRight="8px solid #ff5d23";
    document.getElementById(player).style.border="3px solid #ff5d23";
    document.getElementById(player).style.boxSizing="border-box";
    
    for (var i=1; i<7; i++){
        if(i!=n){
            a = "a" + i;
            player="player"+i;
            document.getElementById(player).onmouseover= function(){this.style.border="3px solid #ff5d23"; this.style.boxSizing="border-box";}
            document.getElementById(player).onmouseout= function(){this.style.border="none"; }
            document.getElementById(a).style.borderRight="8px solid transparent";
            document.getElementById(player).style.border="none";
        }
    }
    
}

function hoverEffect(){
    
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













