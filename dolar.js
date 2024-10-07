fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = "$" + parseFloat(economia.USDBRL.bid).toFixed(2);
    document.getElementById('maiorDolar').innerHTML = "$" + parseFloat(economia.USDBRL.high).toFixed(2);
    document.getElementById('menorDolar').innerHTML = "$" + parseFloat(economia.USDBRL.low).toFixed(2);
})
