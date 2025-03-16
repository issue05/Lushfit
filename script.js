document.getElementById('sizeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the input values
    const shoulder = parseFloat(document.getElementById('shoulder').value);
    const bust = parseFloat(document.getElementById('bust').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hips = parseFloat(document.getElementById('hips').value);
  
    // Calculate body type
    let bodyType = '';
  
    if ((bust - hips) >= 3.6 && (bust - waist) < 9) {
      bodyType = 'Inverted Triangle';
    } else if ((hips - bust) >= 3.6 && (hips - waist) < 9) {
      bodyType = 'Triangle';
    } else if ((hips - bust) > 2 && (hips - waist) >= 7) {
      bodyType = 'Spoon';
    } else if ((bust - waist) >= 9 && (hips - waist) >= 10) {
      bodyType = 'Hourglass';
    } else if (Math.abs(bust - hips) <= 3.6 && Math.abs(bust - waist) < 9) {
      bodyType = 'Rectangle';
    } else {
      bodyType = 'Please enter valid measurements.';
    }
  
    // Display result
    document.getElementById('bodyType').textContent = `Your body type is: ${bodyType}`;
  });

  