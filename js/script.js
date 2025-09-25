"use strict"

const creatSlug=str=>str.replaceAll(' ','-')
const upperFirstWord=(str)=>{
    const [first,...others]=str.split(' ')
    return [first.toUpperCase(),...others].join(' ')
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
    textAreaEl.value=upperFirstWord(txt)
 }
})