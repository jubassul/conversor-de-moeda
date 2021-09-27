const dollarConvert = () => {
  let realDolar = parseFloat(document.getElementById("realDolar").value);
  let calculoDolar = realDolar * 5;
  console.log(calculoDolar);
  alert(`O valor é US$ ${calculoDolar}`);
};

const euroConvert = () => {
  let realEuro = parseFloat(document.getElementById("realEuro").value);
  let calculoEuro = realEuro * 6;
  console.log(calculoEuro);
  alert(`O valor  é € ${calculoEuro}`);
};

const bitcoinConvert = () => {
  let realBitcoin = parseFloat(document.getElementById("realBitcoin").value);
  let calculoBitcoin = realBitcoin * 0.0000041;
  console.log(calculoBitcoin);
  alert(`O valor  é ฿ ${calculoBitcoin}`);
};