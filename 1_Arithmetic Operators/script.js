function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById("result");
  
    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter valid numbers.";
      return;
    }
  
    result.textContent = "Results:\n" +
      "Addition: " + (num1 + num2) + "\n" +
      "Subtraction: " + (num1 - num2) + "\n" +
      "Multiplication: " + (num1 * num2) + "\n" +
      "Division: " + (num1 / num2) + "\n" +
      "Modulus: " + (num1 % num2);
  }
  