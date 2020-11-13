var playing=false;
var score;
var timeremaining;
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

}
}

