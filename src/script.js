const runOnKeys = (fn, code1, code2) => {
  const set = new Set();

  document.body.addEventListener("keydown", (event) => {
    set.add(event.code);
  });

  document.body.addEventListener("keyup", (event) => {
    if (set.has(code1) && set.has(code2)) {
      fn();
    }
    set.clear();
  });
};

function func() {
  console.log("Привет");
}

runOnKeys(func, "KeyZ", "KeyX");
