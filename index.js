var color_select = document.getElementById('color-input')
var menu = document.getElementById('theme-select')
var submit_btn = document.getElementById('get-scheme')
var display = document.getElementById('')

function submitColor() {
    fetch(`https://www.thecolorapi.com/scheme/?hex=${color_select.value.replace('#', '')}&mode=${menu.value}&count=5`)
    .then((response) => response.json())
    .then(function(data) {
        console.log(data);
        colors = data.colors.map(color => color.hex.value)
        for (var color in colors) {
            console.log(document.getElementsByClassName('color')[color])
            // window.getComputedStyle(document.getElementsByClassName('color')[color], null
            // ).getPropertyValue('background-color') = colors[color]
            document.querySelectorAll('.color')[color].style.backgroundColor = colors[color]
            console.log(document.querySelectorAll('.color'))
        }
    })
}

menu.addEventListener('change', function() {
    submitColor()
})

color_select.addEventListener('change', function() {
    submitColor()
})

submit_btn.addEventListener('click', function() {
    submitColor()
})