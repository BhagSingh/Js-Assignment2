
// Function to handle the form submission on excel.html
function myExcelFuns(event) {
    event.preventDefault(); // Prevent form submission and page reload
  
    // Get user input (string of numbers separated by spaces)
    const numbersInput = document.getElementById("numbers");
    const numbersString = numbersInput.value;
  
    // Check if the user input is not empty
    if (numbersString.trim() === "") {
      alert("Please enter numbers separated by spaces.");
      return;
    }
  
    // Get the selected function (AutoSum, Average, Maximum, or Minimum)
    const excelFunctions = document.getElementsByName("excel");
    let selectedFunction;
    for (const func of excelFunctions) {
      if (func.checked) {
        selectedFunction = func.value;
        break;
      }
    }
    
  // Convert the string of numbers to an array of numeric values
  const numbersArray = numbersString.split(" ").map(Number);
  
  // Remove NaN and undefined values from the array (caused by extra spaces)
  const numericArray = numbersArray.filter((num) => !isNaN(num));

    // Perform the calculation based on the selected function
    let result;
    if (selectedFunction === "autosum") {
      result = numericArray.reduce((sum, num) => sum + num, 0);
    } else if (selectedFunction === "average") {
      result = numericArray.reduce((sum, num) => sum + num, 0) / numericArray.length;
    } else if (selectedFunction === "max") {
      result = Math.max(...numericArray);
    } else if (selectedFunction === "min") {
      result = Math.min(...numericArray);
    }
  
    // Display the result in the output div
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `Result: ${result}`;
  }
  
  // Add event listener to the form on excel.html
  const excelForm = document.getElementById("excel-form");
  excelForm.addEventListener("submit", myExcelFuns);
  