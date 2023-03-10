let inpShorten = document.querySelector('.Shorten [type="text"]');
let formShorten = document.querySelector(".Shorten");
let btnShorten = document.querySelector('[type="submit"]');
let divLinks = document.querySelector(".links");
let reShorten = /https?:\/\/(www.)?\w+\d*.\w+((\/\w*\d*)?)*/;
let arrayrondomlink=['https://rel.link/K4lKyk','https://rel.link/djy5re','https://rel.link/gob3fe','https://rel.link/f5etr','https://rel.link/pas3e4']

console.log(inpShorten);
inpShorten.onfocus =(e) =>{
    
    formShorten.classList.add("wrong");
    e.preventDefault()
}
inpShorten.addEventListener("input", (e) => {
    if (reShorten.test(inpShorten.value)) {
        formShorten.classList.remove("wrong");
        formShorten.classList.add("succes");
    } else {
        formShorten.classList.remove("succes");
        formShorten.classList.add("wrong");
    }
    e.preventDefault();
});

//?create links////
//!create links////
//?create links////
//!create links////
let createDivLink=(link,rundomlink)=>{
    let count=0
    link.forEach(e => {
        
        let rowdiv=document.createElement('div');
        let btncopyied=document.createElement('button');
        btncopyied.classList='col-lg-1 col-md-5 col-11 btn btn-main ps-2 pe-2 rounded-3 copy';
        btncopyied.textContent='copy';
        rowdiv.classList='row  mt-5 bg-white pt-2 pb-2 justify-content-evenly  align-items-center rounded-3 ms-5 me-5 mt-5'
    
        rowdiv.innerHTML=`
        
        <h5 class="col-lg-5 col-md-10   col-11">${e.link}</h5>
        
        <h6 class="col-lg-3 col-md-6  col-11">${rundomlink[count]}</h6>
        
        `
        rowdiv.appendChild(btncopyied);
        divLinks.appendChild(rowdiv);
        btncopyied.addEventListener('click',a=>{
            btncopyied.style.cssText="background: #382e56 !important;";
            btncopyied.textContent='copied!'
            a.preventDefault();
            count++;
            
        });
        })
    }


let result=[];
window.onload=()=>{
    let getdata=JSON.parse(sessionStorage.getItem('links'))
        createDivLink(getdata,arrayrondomlink);
        result=getdata;
}
let sendlocalStor=(link)=>{
    
    let jsopj={
        link:link,
        
    } 
    result.push(jsopj);
    update(result)
    divLinks.innerHTML=''
    if ( reShorten.test(inpShorten.value)) {
        let getdata=JSON.parse(sessionStorage.getItem('links'))
        createDivLink(getdata,arrayrondomlink);
    }
}
let update=(result)=>{
    let data=JSON.stringify(result);
    sessionStorage.setItem("links",data)
}
//?add link////
//!add link////
//?add link////
//!add link////
btnShorten.addEventListener('click',e=>{
    if(inpShorten.value!=''){
    sendlocalStor(inpShorten.value);
    }
    inpShorten.value='';
    formShorten.classList.remove('succes')
    e.preventDefault();
})



