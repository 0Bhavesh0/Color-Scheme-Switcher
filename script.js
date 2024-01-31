const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')

buttons.forEach( function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'gray'){
            body.style.backgroundColor = 'gray'
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        else if(e.target.id === 'pink'){
            body.style.backgroundColor = 'pink'
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        else if(e.target.id === 'violet'){
            body.style.backgroundColor = 'violet'
        }
    })
})