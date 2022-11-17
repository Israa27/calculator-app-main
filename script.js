window.onload = () => {
    //write your code here

let screen=document.querySelector('.input-user');
let button=document.querySelector('.grid-buttons');
let deleteNumber=document.querySelector('.del');
let addbutton=document.querySelector('.add');
let resultbutton=document.querySelector('.result');
let restbutton=document.querySelector('.rest');
let firstColor=document.querySelector('.first')
let secondColor=document.querySelector('.sec')
let threeColor=document.querySelector('.three')
console.log(firstColor)

button.addEventListener('click',function(e){
    if(e.target.value==undefined){
        screen.textContent=''
    }
    else{screen.textContent+=e.target.value}
     
})
resultbutton.addEventListener('click',function(){
    screen.textContent=eval(screen.textContent)
      
 })
 resultbutton.addEventListener('click',function(){
    let num=eval(screen.textContent)
    num=String(num).split('')
    if(num.length>4){
        
        num[3]=','
        screen.textContent=num.join('')
    }
    screen.textContent=num.join('')
     
 }) 
 addbutton.addEventListener('click',function(){
     screen.textContent=eval(screen.textContent)
    
 })
 restbutton.addEventListener('click',function(){
    screen.textContent=''
 })
 deleteNumber.addEventListener('click',function(){
    screen.textContent=screen.textContent.slice(0,-1)
      
 })

 firstColor.addEventListener('click',function(){
    [...document.body.getElementsByTagName("*")].slice(0,38).map(item=>{
        document.body.classList.remove('theme2')
        document.body.classList.remove('theme3')
        item.classList.remove('theme3')
        item.classList.remove('theme2')
    })
    })
 secondColor.addEventListener('click',function(){
   
    [...document.body.getElementsByTagName("*")].slice(0,38).map(item=>{
        document.body.classList.add('theme2')
        document.body.classList.remove('theme3')
        item.classList.add('theme2')
        item.classList.remove('theme3')
    })
    //secondColor.classList.add('theme2')
      
 })
 threeColor.addEventListener('click',function(){
    [...document.body.getElementsByTagName("*")].slice(0,38).map(item=>{
        document.body.classList.add('theme3')
        document.body.classList.remove('theme2')
        item.classList.add('theme3')
        item.classList.remove('theme2')
    })
    
      
 })
}