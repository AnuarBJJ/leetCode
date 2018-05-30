var exclusiveTime = function(n, logs) {
  // keep a map of current times of all functions seen
  // keep a stack of ongoing functions

  const stack = [];
  const funcs = new Map();

  logs.forEach(log => {
    const data = log.split(':');
    data[0] = +data[0];
    data[2] = +data[2];

    if (data[1] === 'start') {
      if (stack.length) {
        let parentFunc = stack[stack.length - 1];
        parentFunc.span = +parentFunc.span + data[2] - parentFunc.start;
      }
      stack.push({
        start: +data[2],
        span: 0,
        id: +data[0],
      });
    } else if (data[1] === 'end') {
      const soFar = funcs.has(+data[0]) ? funcs.get(+data[0]) : 0;
      const lastFunc = stack.pop();
      const addOne = lastFunc.span === 0 ? 1 : 0;
      const span = soFar + data[2] - lastFunc.start + lastFunc.span + addOne;
      if (stack.length) {
        const parentFunc = stack[stack.length - 1];
        parentFunc.start = +data[2];
      }
      funcs.set(data[0], span);
    }
  });

  const result = [];

  for (let func of funcs) {
    result[+func[0]] = func[1];
  }

  return result;
};

const testLogs = [
  '0:start:0',
  '0:start:2',
  '0:end:5',
  '0:start:6',
  '0:end:6',
  '0:end:7',
];

const testResult = exclusiveTime(1, testLogs);

console.log(testResult);
