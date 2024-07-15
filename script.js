function processInputs() {
    // Collect data from each row
    const grid = document.getElementById('inputGrid');
    const rows = grid.getElementsByClassName('input-row');
    
    const results = {
        green: [],
        purple: [],
        black: []
    };

    Array.from(rows).forEach(row => {
        const type = row.getAttribute('data-row-type');
        const inputs = row.getElementsByTagName('input');
        Array.from(inputs).forEach(input => {
            if (input.value) {
                results[type].push(input.value);
            } else {
                results[type].push('');
            }
        });
    });

    console.log(results); // This will log the inputs; you'll replace this with solver logic.
    alert('Check the console for input results!');
}

