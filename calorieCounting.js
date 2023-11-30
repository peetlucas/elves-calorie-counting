const fs = require('fs');

let calorieCounts = [];
let currentElfCalories = 0;
const filePath = 'input_data.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if(err) throw err;
  
  const lines = data.split('\n');
  
  lines.forEach(line => {
    if(line.trim() === '') {
      // Blank line reached, push individual Elf's calories
      calorieCounts.push(currentElfCalories);
      currentElfCalories = 0;    
    } else {
      currentElfCalories += parseInt(line);      
    }
  });
  
  // Add last Elf's calories
  calorieCounts.push(currentElfCalories); 
  
  let maxCalories = 0;
  calorieCounts.forEach((cals) => {
    //Retrieve the highest calorie amount
    maxCalories = Math.max(maxCalories, cals);
  });
  
  console.log(maxCalories);
});