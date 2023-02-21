console.log('It works 🏸')

updateColor = function(){
    console.log('hukuna matata is a great song')
}

function doSomething(){
    alert('I am doing something')
}

animate_button = () => {
    console.log('I am animating the button')
}

changeMessage = (e) => {
    e.target.innerText = 'Button Clicked'
}

// event listener
let btnul = document.querySelector('#btn-uplink')
let allLinks = document.querySelectorAll('a')

btnul.addEventListener('click', (e) =>{
    allLinks.forEach((link, idx)=>{
        link.textContent = `Link ${idx}`
    })
})