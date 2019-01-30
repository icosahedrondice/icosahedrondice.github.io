var PL = prompt("剪刀,石頭,布");
var BOT = Math.random();
if( BOT <= 0.33){
    BOT = "剪刀";
}
else if( BOT <= 0.66){
    BOT = "石頭";
}
else{
    BOT = "布";
}
alert("電腦出"+ BOT);
if(PL==BOT){
    alert("平手!       O - O");
}
else if(PL=="剪刀"){
    if(BOT=="石頭"){
        alert("電腦獲勝      OUO)/嫩啦");
    }
    else{
        alert("玩家獲勝      =皿= 淦")
    }
}
else if(PL=="石頭"){
    if(BOT=="布"){
        alert("電腦獲勝      OUO)/小ㄈㄨ");
    }
    else{
        alert("玩家獲勝      =皿= 淦")
    }
}
else if(PL=="布"){
    if(BOT=="剪刀"){
        alert("電腦獲勝      OUO)/ w w w");
    }
    else{
        alert("玩家獲勝      =皿= 淦")
    }
}