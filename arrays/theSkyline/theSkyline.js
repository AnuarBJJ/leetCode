/*
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

 Buildings Skyline Contour
The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

Notes:

The number of buildings in any input list is guaranteed to be in the range [0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]
Credits:
Special thanks to @stellari for adding this problem, creating these two awesome images and all test cases.
*/

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

 // heap functionality
var Heap = function(){
    this.heap = [];
    this.size = 0;

    this.peek = function(){
        return this.heap[0];
    };
    this.getLeftChild = function(index){
        return this.heap[index*2+1] ? index*2+1 : -1;
    };
    this.getRightChild = function(index){
        return this.heap[index*2+2] ? index*2+2 : -1;
    };

    this.getParentIndex = function(index){
        return Math.floor((index-1)/2);
    };

    this.swap = function(index1, index2){
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    };

    this.siftDown = function(index){
        const leftIndex = this.getLeftChild(index);
        const rightIndex = this.getRightChild(index);

        let biggerIndex = -1;

        if(leftIndex !== -1 && rightIndex !== -1){
            biggerIndex = this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex;
        } else if( leftIndex !== -1 ){
            biggerIndex = leftIndex;
        } else if( rightIndex !== -1 ){
            biggerIndex = rightIndex;
        }

        if(biggerIndex === -1){
            return;
        }

        if(this.heap[biggerIndex] > this.heap[index]){
            this.swap(biggerIndex, index);
            this.siftDown(biggerIndex);
        }
    };

    this.siftUp = function(index){
        const parentIndex = this.getParentIndex(index);

        if(parentIndex !== -1 && this.heap[parentIndex] < this.heap[index]){
            this.swap(parentIndex, index);

            this.siftUp(parentIndex);
        }
    };

    this.removeHighest = function(){
        const max = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        this.size --;

        return max;
    };

    this.insert = function(num){
      this.heap.push(num);

      this.siftUp(this.heap.length-1);

      this.size++;
    };

    this.remove = function(num){
        for(let i=0; i<this.heap.length; i++){
            if(this.heap[i] === num){
                if(i === this.heap.length-1){
                  this.heap.pop();
                  return;
                }
                this.heap[i] = this.heap.pop();
                this.siftDown(i);
                break;
            }
        }
    };

  this.print = function(){
    console.log(this.heap);
  }
};
// main functionality
var getSkyline = function(buildings) {
    const result = [];
    const heights = [];
    buildings.forEach(building => {
        heights.push([building[0], building[2]*(-1)]);
        heights.push([building[1], building[2]]);
    });
    heights.sort( (a, b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });

    const pq = new Heap();
    pq.insert(0);
    let prev = 0;
    heights.forEach( h => {
       if(h[1]<0){
           pq.insert(h[1]*(-1));
       } else {
           pq.remove(h[1]);
       }

       let current = pq.peek();
       if(prev !== current){
           result.push([h[0],current]);
           prev = current;
       }
    });
    return result;
};
