
function calculateAverage() {
    let ageInput = document.getElementById('age').value;
    let ages = ageInput.split(',').map("Number").filter(age => !isNaN(age) && age !== "");

    if (ages.length > 0) {
        let total = ages.reduce((acc, age) => acc + age, 0);
        let average = total / ages.length;
        document.getElementById('result').innerText = "Average Age": ${average.toFixed(2)};
    } else {
        document.getElementById('result').innerText = 'Please enter valid ages.';
    }
}