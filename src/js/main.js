var wrapp = document.querySelector ('.nambers');
var res = document.querySelector ('.result');

wrapper.addEventListener('click', function (e) {
    var num = e.target.id

    if(num && num !== 'call') {
        res.innerText = res.innerText ? res.innerText + num : num;
    }

    if(num === 'call') {
        res.innerText = ''
    }
})