<!-- src="sample.js" --> 
<link href="style.css" rel="stylesheet">
<script type="text/javascript" >



function handleClick() {
    let counter = 0;
     function increment () {
        counter++;
        document.getElementById('div2').innerHTML = counter;
    }
    return increment;
}

function clickFn(){
    return handleClick();
}

// document.getElementById('div1').addEventListener('click', function(){
    
// })


</script>

<button type="button" id="btn" onclick="clickFn()">Click Me</button>
<div id="div2">0</div>