let bsInp = document.getElementById('lbsInput');
let output = document.getElementById('output');
let gramsOutput = document.getElementById('gramsOutput');
let kgOutput = document.getElementById('kgOutput');
let ounOutput = document.getElementById('ounOutput');



output.style.visibility = 'hidden';

bsInp.addEventListener('input', function (e) {

    output.style.visibility = 'visible';

    let pounds = e.target.value;
    console.log(pounds);

    gramsOutput.innerHTML = pounds / 0.0022046;
    kgOutput.innerHTML = pounds / 2.2046;
    ounOutput.innerHTML = pounds * 16;
});