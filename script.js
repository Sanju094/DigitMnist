// frontend/script.js
async function predictDigit() {
    const form = document.getElementById('uploadForm');
    const formData = new FormData(form);

    try {
        const response = await fetch('http://127.0.0.1:8000/predict', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('result').innerText = `Predicted Digit: ${result.predicted_class}`;
        } else {
            console.error('Error predicting digit:', response.statusText);
            document.getElementById('result').innerText = 'Error predicting digit.';
        }
    } catch (error) {
        console.error('Error predicting digit:', error.message);
        document.getElementById('result').innerText = 'Error predicting digit.';
    }
}
