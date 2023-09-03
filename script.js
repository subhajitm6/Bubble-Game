var timer=60;
var score=0;
var hit=0;



function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").innerHTML=score;
}


function makeHit(){
    hit=Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerHTML=hit;
}


function makeBubble() {
    var prev = "";

    for (var i = 0; i < 119; i++) {
        var rn = Math.floor(Math.random() * 10);
        prev += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = prev;

}


function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").innerHTML=timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
            // document.querySelector("#pbtm").innerHTML=`<h2>Total Score: ${score}</h2>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(hit===clickedNum){
        increaseScore();
        makeHit();
        makeBubble();
    }
});


makeHit();
runTimer();
makeBubble();