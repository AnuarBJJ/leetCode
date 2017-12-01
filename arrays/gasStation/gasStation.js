/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let gasLeft = 0;
    let start;
    let counter = 0;

    for (let i = 0; i < gas.length; i += 1) {
        gasLeft = gas[i] - cost[i];
        start = i;
        counter += 1;

        while (gasLeft >= 0) {
            i += 1;
            if (i === gas.length) {
                i = 0;
            }
            gasLeft += gas[i] - cost[i];
            if (i === start) {
                return start;
            }
        }
        gasLeft = 0;
        if (start < i) {
            counter += i - start - 1;
        } else if (i < start) {
            counter += gas.length - start + i - 1;
        }

        if (counter >= gas.length) {
            return -1;
        }
    }

    return -1;
};