function solveNerdle() {
    const input = document.getElementById('nerdleInput').value;
    fetch('/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ equation: input })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('results').innerText = JSON.stringify(data.data);
    })
    .catch(error => console.error('Error:', error));
}
