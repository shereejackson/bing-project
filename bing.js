

// for numbers 1 thru 100
for(var i=0; i < 101; i++) {
document.write(i);

// if number is divisible by 3 and 5, write "Bing Bong"
if (i % 3 ===0 && i % 5 ===0) {
  document.write("Bing Bong");
}
// if number is divisible by 3, write "Bing"
else if (i % 3 ===0){
  document.write("Bing");
}
// if number is divisible by 5, write "Bong"
else if (i % 5 ===0){
  document.write("Bong");
}
// otherwise, write number
else{
  document.write(i);
}
}
