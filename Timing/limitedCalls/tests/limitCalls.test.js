const limitedCalls = require('../limitedCalls');
const mockdate = require('mockdate');

test('checks if the first function call returns true', () => {
    let acceptsSixty = limitedCalls(60);
    expect(acceptsSixty()).toBe(true);
});

test('returns true for the 60th consequitive call within a second', () => {
    let acceptsSixty = limitedCalls(60);

    for(let i = 0; i < 59; i += 1) {
        expect(acceptsSixty()).toBe(true);
    }
})

test('returns false for the 61st consequitive call within a second', () => {
    let acceptsSixty = limitedCalls(60);

    for(let i = 0; i < 60; i += 1) {
        acceptsSixty();
    }
    expect(acceptsSixty()).toBe(false);
})

test(`returns false if time hasn't expired and the limit been hit`, () => {
    let acceptsOne = limitedCalls(2);
    acceptsOne();
    acceptsOne();
    mockdate.set(Date.now() + 500);
    expect(acceptsOne()).toBe(false);
})

test(`returns true if time has expired and the limit been hit`, () => {
    let acceptsOne = limitedCalls(1);
    acceptsOne();
    mockdate.set(Date.now() + 1000);
    expect(acceptsOne()).toBe(false);
})