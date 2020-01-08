const baltimore = document.querySelectorAll("#baltimore path");

for(let i = 0; i < baltimore.length; i++) {
  console.log(`Letter ${i} is ${baltimore[i].getTotalLength()}`);
}
