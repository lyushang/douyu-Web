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