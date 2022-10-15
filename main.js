const start =document.getElementById('start');
const reset  =document.getElementById('reset');
const stop  =document.getElementById('stop');

const wm  =document.getElementById('w_minutes');
const ws  =document.getElementById('w_seconds');

const bm  =document.getElementById('b_minutes');
const bs  =document.getElementById('b_seconds');


let startTimer;

start.addEventListener('click',function(){

    if(startTimer==undefined){
        startTimer=setInterval(timer,1000)
    }else{
        alert("Timmer is already running")
    }
})

reset.addEventListener('click',function(){
    wm.innerText=25;
    ws.innerText="00"
    bm.innerText=5;
    bs.innerText="00"
    document.getElementById('counter').innerText=0;
    stopInterval()
    startTimer=undefined;
})

stop.addEventListener('click',function(){
    stopInterval()
    startTimer=undefined;
    // ??? good to use undefined?
})

function timer(){

    if(ws.innerText!==0){
        ws.innerText--;
    }else if (wm.innerText!==0& ws.innerText===0){
        ws.innerText=59;
        wm.innerText--;
    }
    if(wm.innerText===0&&ws.innerText){
        if(bs.innerText!=0){
            bs.innerText--;
        }else if(bm.innerText!==0&& bs.innerText===0){
            bs.innerText=59;
            bm.innerText--
        }
    }

    if(wm.innerText==0&&ws.innerText==0&bm.innerText==0&& bs.innerText==0){
        wm.innerText=25;
        ws.innerText="00";

        bm.innerText=0;
        bs.innerText="00"
        document.getElementById('counter').innerText++;
    }
}

function stopInterval(){
    clearInterval(startTimer);
    // !!!
}


// From WebDuck: I don't think he writes good code