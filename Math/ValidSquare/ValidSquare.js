/**
 * Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:
Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True
Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
function getSquareDistance(pointOne, pointTwo) {
    return (pointOne[0] - pointTwo[0]) ** 2 + (pointOne[1] - pointTwo[1]) ** 2;
}

var validSquare = function (p1, p2, p3, p4) {
    const points = [p1, p2, p3, p4];
    const lengths = {};
    for (let i = 0; i < points.length - 1; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
            let distance = getSquareDistance(points[i], points[j]);

            if (!lengths.hasOwnProperty(distance)) {
                lengths[distance] = true;
            }
        }
    }
    return !lengths.hasOwnProperty(0) && Object.keys(lengths).length === 2;
};