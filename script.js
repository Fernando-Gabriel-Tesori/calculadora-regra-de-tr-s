function calculate() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var result = parseFloat(document.getElementById('result').value);
  
    if (isNaN(value1) || isNaN(value2) || isNaN(result)) {
      document.getElementById('output').innerText = "Por favor, insira valores válidos.";
      return;
    }
  
    if (value1 === 0 || value2 === 0) {
      document.getElementById('output').innerText = "Não é possível dividir por zero.";
      return;
    }
  
    var calculatedValue = (result * value2) / value1;
  
    document.getElementById('output').innerText = "Resultado: " + calculatedValue;
  }
  