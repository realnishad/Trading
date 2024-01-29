function calculateShareWorth() {
    let initialQuantity = document.getElementById('initialQuantity').value;
    let initialPrice = document.getElementById('initialPrice').value;
    let finalQuantity = document.getElementById('finalQuantity').value;
    let finalPrice = document.getElementById('finalPrice').value;

    let initialWorth = initialQuantity * initialPrice;
    let finalWorth = finalQuantity * finalPrice;
    let worthChange = finalWorth - initialWorth;

    document.getElementById('shareResult').innerText = 
        `Initial Worth: $${initialWorth.toFixed(2)}, Final Worth: $${finalWorth.toFixed(2)}, Change: $${worthChange.toFixed(2)}`;
}

function calculateCAGR() {
    let initialValue = document.getElementById('initialValue').value;
    let cagr = document.getElementById('cagr').value / 100;
    let years = document.getElementById('years').value;

    let futureValue = initialValue * Math.pow((1 + cagr), years);
    let profit = futureValue - initialValue;

    document.getElementById('cagrResult').innerText = 
        `Future Value: $${futureValue.toFixed(2)}, Profit: $${profit.toFixed(2)}`;
}
