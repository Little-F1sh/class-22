function makegreen() {
    document.body.style.backgroundColor = 'green'
}

const blueBtn = document.getElementById('make-blue');
blueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

const goldenBtn = document.querySelector('#make-golden');
// goldenBtn.onclick = function() {
//     document.body.style.backgroundColor = 'gold'
// };

goldenBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'gold'
})
