function processInputs(event) {
    event.preventDefault(); // Prevent the default form behavior
    const inputs = document.querySelectorAll('input');
    const data = { green: [], purple: [], black: [] };

    inputs.forEach(input => {
        const type = input.parentNode.getAttribute('data-row-type');
        data[type].push(input.value || null);  // Collect data, use null for empty inputs
    });

    // Send this data to the Flask server
    fetch('/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Server response:', data))
    .catch(error => console.error('Error:', error));
}
