console.log("hello");

let bmi = 0;

function handleClick(event) {
    event.preventDefault(); // Prevent page refresh

    // Get input values and convert to numbers
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);

    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        console.log("Invalid input! Please enter valid height and weight.");
        return;
    }

    // Calculate BMI
    bmi = weight / (height * height);
     print();
     alert(`Your BMI is: ${bmi.toFixed(2)}`);
}

function print(){
    console.log("Your BMI is:", bmi.toFixed(2));

}