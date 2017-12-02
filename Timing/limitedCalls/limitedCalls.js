function canAccept(size) {
    const circularBuffer = [];

    let start = 0;

    return () => {
        const now = Date.now();
        const atStart = circularBuffer[start];
        console.log(`Circular buffer is less then size: ${circularBuffer.length <= size}`);

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
    console.log(`${i}: ${withSize60()}`);
}

setTimeout(() => {
    console.log(`after half a second: ${withSize60()}`);
}, 500);

setTimeout(() => {
    console.log(`after a second: ${withSize60()}`);
}, 1000);
// stubbing