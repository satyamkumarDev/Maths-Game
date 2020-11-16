var playing=false;
var score;
var timeremaining;
var correctres;
var correctposition;
document.getElementById("startreset").onclick=function(){
if(playing==true){
location.reload()
}else{
    playing=true
    score=0;
    document.getElementById("scorevalue").innerHTML= score
    show("timeremaining")
    document.getElementById("timeremaining").style.display="block"
    timeremaining=60
    document.getElementById("timeremianingvalue").innerHTML=timeremaining
    hide("gameover")
    document.getElementById("startreset").innerHTML= "Reset Game"
    startCountDown()
    generateQA()
}
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==correctres){
                score++
                document.getElementById("scorevalue").innerHTML=score
                hide("wrong")
                show("correct")
                setTimeout(function(){
                    hide("correct")
                },1000)
                generateQA()
            }else{
                hide("correct")
                show("wrong")
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }
        }
    }

}

// start counter
function startCountDown(){
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremianingvalue").innerHTML=timeremaining
        if(timeremaining==0){
            stopCountDown()
            show("gameover")
            // document.getElementById("gameover").style.display="block"
            document.getElementById("gameover").innerHTML="<p>GAME OVER </p> <P> Your Score is"  + " "+score+ "</p>"
            hide("timeremaining")
            // document.getElementById("timeremaining").style.display="none"
            hide("correct")
            hide("wrong")
            playing=false
            document.getElementById("startreset").innerHTML="Start Game"
        }
    },1000)
}

// stop counter
function stopCountDown(){
    clearInterval(action)
}

// hide an element
function hide(Id){
    document.getElementById(Id).style.display="none"
}

// show an element
function show(Id){
    document.getElementById(Id).style.display="block"
}

// generate question and mutiple answer
function generateQA(){
var val1=1+Math.round(9*Math.random())
var val2=1+Math.round(9*Math.random())
 correctres=val1 * val2
 document.getElementById("question").innerHTML=val1 + "X" + val2;   
 correctposition=1+Math.round(3*Math.random())
document.getElementById("box"+correctposition).innerHTML=correctres

// fill other boxes with wrong answer
var options=[correctres];
for(i=1;i<5;i++){
    if(i!== correctposition){
        var wrongoptions ;
        do{
            wrongoptions=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))
       
        }while(options.indexOf(wrongoptions)>-1)
        document.getElementById("box"+i).innerHTML=wrongoptions
        options.push(wrongoptions)
    }

}

}


