let bestDayToSell = (prices) => {
    // MaxProfit
    let maxProfit = 0;
    // PurchaseDay
    let purchaseDay = 0;
    
    // EdgeCases - If prices.length === 1 return 0
    if (prices.length===1) return 0
    
    // Iterate over each element tallying up the current profit (diff between)
    // index value you started from and index value from current operation
    // Use two pointers, one to iterate over the list
    // One to anchor to index value representing day you purchased the stock
    for (let i=0; i<prices.length; i++) {
        const spread = prices[i] - prices[purchaseDay];
        if (spread > maxProfit) {
            maxProfit = spread;
        } else if (spread < 0) {
            purchaseDay = i;
        }
    }
    
    return maxProfit;
}

console.log(bestDayToSell([7,1,5,3,6,4])) // 5
console.log(bestDayToSell([7,6,4,3,1])) // 0