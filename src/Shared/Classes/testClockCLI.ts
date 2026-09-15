import Clock from "./Ticker.ts";

function main() {
  const ticker = new Clock(1000);
  let time = 0;
  ticker.addListener(() => {
    time++;
    console.log("Tick", time);
  });

  ticker.start();
  // after 5 seconds, go to step2
  setTimeout(() => {
    ticker.stop();
    step2(ticker);
  }, 5000);
}

// the timer has just stopped.
 // wait 5 seconds, then start the timer again and go to step3
function step2(ticker: Clock) {
  console.log("starting step2");
  setTimeout(() => {
    ticker.start();
    step3(ticker);
  }, 5000);
}

// the timer has just restarted.  Wait 5 seconds, then stop the timer. and end step3
function step3(ticker: Clock) {
  console.log("starting step3");
  setTimeout(() => {
    ticker.stop();
    console.log("reached end of step3");
  }, 5000);
}
main();
