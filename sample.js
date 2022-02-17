function makeFunc() {
    var count = 0;
    function countUp() {
      count ++;
      return count;
    }
    return countUp;
  };
  
  var myFunc = makeFunc();
  
  document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('counter').innerHTML = myFunc();
  });











// function handleClick() {
//     let counter = 0;
//      function increment () {
//         counter++;
//         document.getElementById('div2').innerHTML = counter;
//     }
//     return increment;
// }

// function clickFn(){
//     return handleClick();
// }











// document.getElementById('increase').addEventListener('click', clickEvent)

// function handleClick () {
//     let counter = 0;
//      function increment () {
//         counter++;
//         document.getElementById('div2').innerHTML = counter;
//     }
//     return increment;
// }

// const clickEvent = handleClick();

