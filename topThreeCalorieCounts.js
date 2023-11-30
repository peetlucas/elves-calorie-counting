const fs = require('fs');

let calorieCounts = [];
let currentElfCalories = 0;
const filePath = 'input_data.txt';

fs.readFile(filePath, 'utf8', (err, data) => {

  if(err) throw err;
  
  const lines = data.split('\n');
  
  lines.forEach(line => {
    if(line.trim() === '') { 
      calorieCounts.push(currentElfCalories);
      currentElfCalories = 0;
    } else {
      currentElfCalories += parseInt(line); 
    }
  });
  
  calorieCounts.push(currentElfCalories);

  // Sort descending
  calorieCounts.sort((a, b) => b - a);

  // Get top 3 calorie counts
  const top3 = calorieCounts.slice(0, 3);

  // Sum top 3 calorie counts
  const total = top3.reduce((sum, curr) => sum + curr); 
  
  console.log(total);
  
});