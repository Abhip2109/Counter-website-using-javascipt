let count=0;
const decrementBtn = document.getElementById("b1");
const incrementBtn = document.getElementById("b2");
const resetBtn = document.getElementById("b3");
const displayValue = document.getElementById("d");

// for decrement button click
decrementBtn.addEventListener("click", () => {
  if(count==0){
    alert("Negative not allowed");
  }
  else{
  count--;
  displayValue.innerText=count;}

});


// for increment button click
incrementBtn.addEventListener("click", () => {
  count++;
  displayValue.innerText=count;
});

// for reset button click
resetBtn.addEventListener("click", () => {
    count=0;
  displayValue.innerText = 0;
});