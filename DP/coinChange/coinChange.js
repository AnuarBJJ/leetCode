/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const DP = [0];

    for (let i = 1; i <= amount; i += 1) {
        DP[i] = Number.MAX_SAFE_INTEGER;
        let coinIndex = 0;
        for (let j = 0; j < coins.length; j += 1) {
            if (i >= coins[j] && DP[i - coins[j]] + 1 < DP[i]) {
                DP[i] = DP[i - coins[j]] + 1;
            }
        }
    }

    return DP[amount] === Number.MAX_SAFE_INTEGER ? -1 : DP[amount] ;
};