const playButton=document.getElementsByClassName("play")[0];
const lapButton=document.getElementsByClassName("lap")[0];
const resetButton=document.getElementsByClassName("reset")[0];
const minute=document.getElementsByClassName("minute")[0];
const second=document.getElementsByClassName("sec")[0];
const centiSecond=document.getElementsByClassName("msec")[0];
const laps=document.getElementsByClassName("laps")[0];
const clearButton=document.getElementsByClassName("lap-clear-button")[0];
const bg=document.getElementsByClassName("outer-circle")[0];



let isPlay=false;
let minCounter=0;
let min;
let secCounter=0;
let sec;
let centiSecCounter=0;
let centiSec;
let isReset=false;
let lapItem=0;


const toggleButton=()=>{
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
}

const play = ()=>{

  if(!isPlay && !isReset){
    playButton.innerHTML="Pause";
    bg.classList.add("animation-bg");
   
    min=setInterval(()=>{
      if(minCounter===60){
        minCounter=0
      }
      minute.innerHTML=`${++minCounter} : `;
    },60 * 1000);
    sec=setInterval(()=>{
      if(secCounter===60){
        secCounter=0
      }
      second.innerHTML=`&nbsp;${++secCounter} :  `;
    },1000);
    centiSec=setInterval(()=>{
     if(centiSecCounter===100) {
      centiSecCounter=0;
     }
      centiSecond.innerHTML=`&nbsp;${++centiSecCounter}`;
    },10);
    
   
    isPlay=true;
    isReset=true;

  }else{
    playButton.innerHTML="Play";
    clearInterval(sec)
    clearInterval(centiSec);
    clearInterval(min);
    isPlay=false;
    isReset=false;
    bg.classList.remove("animation-bg");
  }
  toggleButton();
}

const reset = ()=>{
  isReset=true;
  isPlay=true;
  play();
  clearAll();
  minCounter = 0;
  secCounter = 0;
  centiSecCounter = 0;
  lapItem=0;
  lapButton.classList.add("hidden");
  resetButton.classList.add("hidden");
  second.innerHTML='&nbsp;0 :'
  centiSecond.innerHTML='&nbsp;0';
  minute.innerHTML='0 :';
  bg.classList.remove("animation-bg");
}

const lap = () =>{
 const li=document.createElement("li");
 const number=document.createElement("span");
 const timeStamp=document.createElement("span");

 li.setAttribute("class","lap-item");
 number.setAttribute("class","number");
 timeStamp.setAttribute("class","time-stamp");

 number.innerText=`#${++lapItem}`;
 timeStamp.innerHTML=`${minCounter} : ${secCounter} : ${centiSecCounter}`;

 li.append(number, timeStamp);
 laps.append(li);

 clearButton.classList.remove("hidden");
}

const clearAll= () => {
  laps.innerHTML = '';
  laps.append(clearButton);
  clearButton.classList.add("hidden");
  lapItem=0;

}

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",clearAll);

