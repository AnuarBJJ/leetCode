module.exports = function limitCalls(size) {
    const circularBuffer = [];

    let start = 0;

    return () => {
        const now = Date.now();
        const atStart = circularBuffer[start];

        if (!atStart || now - atStart > 1000) {
            circularBuffer[start] = now;
            start += 1;
            if (start === size) {
                start = 0;
            }
            return true;
        } else {
            return false;
        }
    }
}
// stubbing