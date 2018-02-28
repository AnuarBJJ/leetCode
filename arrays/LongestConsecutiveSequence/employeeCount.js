const binaryHeap = require('./binaryHeap');

const schedules = [[3, 7], [5, 7], [7, 15], [8, 12], [10, 15], [12, 15]];

const employeeCount = slots => {
  const minHeap = new binaryHeap(function(x) {
    return x;
  });

  slots.forEach(slot => minHeap.push(slot[1])); // n logn

  while (minHeap.content.length) {
    minHeap.pop();
    console.log(minHeap);
  }
};

const res = employeeCount(schedules);
