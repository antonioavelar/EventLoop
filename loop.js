//program entry

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from the program running
myProgram.runContents();

function shouldContinue() {
  // CHECK 1: Any pending setTimeout, setInterval, setImmediate
  // CHECK 2: Any pending OS task (Like any server listening to port)
  // CHECK 3: Any pending long running operations (Like fs module)
  return pendingOperations.length || pendingOSTasks.length || pendingTimers.length;
}

// Entire body executes in one 'tick
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval

  // 2) Node looks at pendingOSTasks and pendingOperations and calls the callbacks

  // 3) Pause execution. Continue when:
  //    -> a new pendingOSTasks is done
  //    -> a new pendingOperation is done
  //    -> a timer is about to complete

  // 4) Look at pendingTimers. Call any setImmediate

  // 5) Handle any 'close' events.
}

//exit to terminal
