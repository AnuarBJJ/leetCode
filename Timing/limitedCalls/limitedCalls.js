// imitsde server point
// checks if we should accept
// 60 requests per minute
// output is boolean (429)

// track how many requests have not expired at every moment

// const moment = require('moment');

function canAccept(size) {
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

const withSize60 = canAccept(60);

for (let i = 0; i < 80; i += 1) {
    console.log(`${i}: ${withSize60()}`);
}

setTimeout(() => {
    console.log(`after half a second: ${withSize60()}`);
}, 500);

setTimeout(() => {
    console.log(`after a second: ${withSize60()}`);
}, 1000);
// stubbing