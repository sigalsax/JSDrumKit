  function playSound(e){
    //run function when log event fires (e), object full of data describing what happened
    // log that event -- info
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // div .key
    const key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function from running
    audio.currentTime=0; //rewind to start
    audio.play();
    // add css
    key.classList.add('playing');
  }
  
  function removeTransition(e){
    if (e.propertyName!=='transform') return;
    //remove transition of playing
    this.classList.remove('playing');
    console.log(e.propertyName);
  }
  // array of every element matched
  const keys= document.querySelectorAll('.key');
  // each key gets eventListener on it, transitionend
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
   // add eventlistener for keydown event
  window.addEventListener('keydown', playSound);
  // console.log(audio);
  