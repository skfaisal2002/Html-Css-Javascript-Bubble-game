var timer = 60;
var Score = 0;
var hitrn = 0;
function increaseScore(){
    var rn = Score += 10;
    document.querySelector("#scoreval").textContent= Score;

}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){
var clutter = "";

for(var i=1; i<=102; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;


}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function () {
        if(timer > 0){
        timer--;
        document.querySelector("#timeval").textContent = timer;
        } else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
        }
        
    },1000);
    
}
document.querySelector("#pbtm")
.addEventListener("click",function(details){
var clickedNum = Number(details.target.textContent);
if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
    
})
getNewHit();
runTimer();
makeBubble();