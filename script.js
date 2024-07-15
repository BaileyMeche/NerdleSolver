function processInputs(event) {
    event.preventDefault(); // Prevent the default form submission
    const grid = document.getElementById('inputGrid');
    const inputs = grid.getElementsByTagName('input');
    const data = {
        green: [],
        purple: [],
        black: []
    };

    Array.from(inputs).forEach(input => {
        const type = input.parentNode.getAttribute('data-row-type');
        if (input.value) { // Only add non-empty values
            data[type].push(input.value);
        }
    });

    fetch('/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => alert('Results processed! Check console for details.'))
    .catch(error => console.error('Error:', error));

    console.log(data);
}
