function processInputs() {
    const grid = document.getElementById('inputGrid');
    const inputs = grid.getElementsByTagName('input');
    const data = {
        green: [],
        purple: [],
        black: []
    };

    // Iterate over inputs and organize data by row type
    Array.from(inputs).forEach(input => {
        const type = input.parentNode.getAttribute('data-row-type');
        data[type].push(input.value);
    });

    // Send data to the server
    fetch('/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Result:', data);
        alert('Check the console for results!');
    })
    .catch(error => console.error('Error:', error));
}
