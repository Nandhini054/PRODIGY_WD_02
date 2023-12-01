let timer; // To hold the interval
    let isRunning = false;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    
    function startStopwatch() {
      if (!isRunning) {
        isRunning = true;
        timer = setInterval(runStopwatch, 1000);
        document.getElementById("startStopButton").innerText = "Stop";
      } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startStopButton").innerText = "Start";
      }
    }
    
    function runStopwatch() {
      seconds++;
    
      if (seconds === 60) {
        seconds = 0;
        minutes++;
    
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
    
      const display = document.getElementById("display");
      display.textContent =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    }
    
    function resetStopwatch() {
      clearInterval(timer);
      isRunning = false;
      seconds = 0;
      minutes = 0;
      hours = 0;
      document.getElementById("display").innerText = "00:00:00";
      document.getElementById("startStopButton").innerText = "Start";
    }
    
    document.getElementById("startStopButton").addEventListener("click", startStopwatch);
    document.getElementById("resetButton").addEventListener("click", resetStopwatch);