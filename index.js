function myFunction() {
    //alert("button was clicked");
    var i1=document.getElementById('img1');
    var i2=document.getElementById('img2');
    var p1=Math.floor(Math.random()*6)+1;
    //alert("p1="+p1);
    var p2=Math.floor(Math.random()*6)+1;
   // var imgStr1="Dice"+p1+".jpg";
   // alert(imgStr1);
   // var imgStr2='Dice'+p2+'.jpg';
    if(p1==1){
        i1.innerHTML="<img class='img11'  src=\"Dice1.png\") alt=\"player1 Dice\">";
    }
    if(p1==2){
        i1.innerHTML="<img class='img11'  src=\"Dice2.png\") alt=\"player1 Dice\">";
    }
    if(p1==3){
        i1.innerHTML="<img class='img11'  src=\"Dice3.png\") alt=\"player1 Dice\">";
    }
    if(p1==4){
        i1.innerHTML="<img class='img11'  src=\"Dice4.png\") alt=\"player1 Dice\">";
    }
    if(p1==5){
        i1.innerHTML="<img class='img11'  src=\"Dice5.png\") alt=\"player1 Dice\">";
    }
    if(p1==6){
        i1.innerHTML="<img class='img11'  src=\"Dice6.png\") alt=\"player1 Dice\">";
    }
    
    if(p2==1){
        i2.innerHTML="<img class='img11'  src=\"Dice1.png\") alt=\"player2 Dice\">";
    }
    if(p2==2){
        i2.innerHTML="<img class='img11'  src=\"Dice2.png\") alt=\"player2 Dice\">";
    }
    if(p2==3){
        i2.innerHTML="<img class='img11'  src=\"Dice3.png\") alt=\"player2 Dice\">";
    }
    if(p2==4){
        i2.innerHTML="<img class='img11'  src=\"Dice4.png\") alt=\"player2 Dice\">";
    }
    if(p2==5){
        i2.innerHTML="<img class='img11'  src=\"Dice5.png\") alt=\"player2 Dice\">";
    }
    if(p2==6){
        i2.innerHTML="<img class='img11'  src=\"Dice6.png\") alt=\"player2 Dice\">";
    }
    var res=document.getElementById("RESULT");
    var w1=false;
    var w2=false;
    if(p1>p2){
        res.innerHTML="<h1>PLAYER1 WON</h1>";
        w1=true;
    }
    else if(p2>p1){
        res.innerHTML="<h1>PLAYER2 WON</h1>";
        w2=true;
    }
    else{
        res.innerHTML="<h1>TIED, Play Again</h1>";
        w1=true;
        w2=true;
    }
  }