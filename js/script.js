"use strict"

const creatSlug=str=>str.replaceAll(' ','-')
//upper first word
//const upperFirstWord=(str)=>{
//    const [first,...others]=str.split(' ')
//    return [first.toUpperCase(),...others].join(' ')
//}
//upper first letter
const upperFirstLetter=(str)=>{
   const arrayStr=str.split(' ')
   let newStr=[]
   for(let word of arrayStr){
      const letter=[...word]
      letter[0]=letter[0].toUpperCase()
      const newWord=letter.join('')
      newStr.push(newWord)
   }
   return newStr.join(' ')
}


const selectEl=document.querySelector('#transform-func')
const textAreaEl=document.querySelector('#str')
const changeBtnEl=document.querySelector('#chenge-str')
const resultEl=document.querySelector('#result')

changeBtnEl.addEventListener('click',()=>{
 const txt=textAreaEl.value
 const funcType=selectEl.value
 if(funcType=='slugify'){
    textAreaEl.value=creatSlug(txt)
 }else{
    textAreaEl.value=upperFirstLetter(txt)
 }
 
})