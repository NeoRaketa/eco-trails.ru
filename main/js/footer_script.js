document.querySelector(".callback-img-hover").hidden = true;


const hover = document.querySelector(".button-footer")
hover.addEventListener('mouseover',()=>{
const botton = document.querySelector(".button-footer");
const  text = document.querySelector(".button-text");
document.querySelector(".callback-img").hidden = true
document.querySelector(".callback-img-hover").hidden = false
botton.classList.add('button-footer-hover')
text.classList.add('button-text-hover')})


const unhover = document.querySelector(".button-footer")
unhover.addEventListener('mouseout',()=>{
const botton = document.querySelector(".button-footer");
const  text = document.querySelector(".button-text");
document.querySelector(".callback-img").hidden = false
document.querySelector(".callback-img-hover").hidden = true
botton.classList.remove('button-footer-hover')
text.classList.remove('button-text-hover')
})
const footer = document.querySelector(".footer")
footer.onclick = function Test(event){
    console.log(event.target.tagName)
    if (event.target.tagName === 'svg'){
        document.querySelector('#logo-picture-color-footer').style.stroke = '#F19953'
}
}
// const openbut = document.querySelector('.button-footer')
// openbut.addEventListener('click', () =>{
//  document.querySelector('form').hidden = false
// })
// const closebut = document.querySelector('.close-button')
// closebut.addEventListener('click', () =>{
//  document.querySelector('form').hidden = true
// })


// const error = document.querySelector('#send')
// error.addEventListener('click', (event) => {
//     event.preventDefault
//     if (document.querySelector('#e-mail').value === '') 
//     {
//       let email = document.querySelector('#e-mail');
//       email.style.border = 'solid red 2px'
//     }
//     if(document.querySelector('#textarea').value === '')
//     {
//       let area = document.querySelector('#textarea');
//       area.style.border = 'solid red 2px'
//     }
//     if(document.querySelector('#checkbox').checked === false)
//     {
//     let check = document.querySelector('#checkbox');
//     }
// })
 
// const rightarea = document.querySelector('#textarea')
// rightarea.addEventListener('blur', () => { if(document.querySelector('#textarea').value !== '')
//     rightarea.style.border = 'solid black 1px'
// })

// const rightemail = document.querySelector('#e-mail')
// rightemail.addEventListener('blur', () => { if(document.querySelector('#e-mail').value !== '')
//     rightemail.style.border = 'solid black 1px'
// })