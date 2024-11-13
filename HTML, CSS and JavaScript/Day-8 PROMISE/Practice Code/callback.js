// SetTimeout Async code

function task(run) {
  setTimeout(() => {
    console.log("task");
    run();
  }, 2000);
}

function doTask() {
  console.log("perform this task");
}

task(doTask); // doTask is a callback function to task which is HOF
