// Automatic show popup after 3 second of page
"use strict"

const popup =document.querySelector(".popup_box");
const close = document.querySelector("#pBtn");
const body= document.querySelector("body");
const width=document.querySelector("window.screen.width");
const contentBox = document.querySelector(".contentBox");
const modalHeader = document.querySelector(".modal-header");
const btnClose = document.querySelector(".btnClose");
const modalTitle =document.querySelector(".modal-title1");


window.onload = function(){
    setTimeout(function(){
        popup.style.display="block";
        body.style.overflow="hidden";
        // popup screen size

        if (window.screen.width <=600) {

            contentBox.style.width="100%";
            contentBox.style.position="relative";
            contentBox.style.top="0%";
            contentBox.style.left="0%";
            contentBox.style.transform="translate(0%,0%)";
            body.style.overflow="auto";
            modalHeader.style.padding="0rem 0 !important";
            btnClose.style.position="relative";
            btnClose.style.top="0";
            btnClose.style.right="0";
            modalTitle.style.fontSize="1rem";
            
          }
         

        

        // add some Time delay to show popup
    },5000)
}


close.addEventListener('click', ()=>{
    popup.style.display="none";
    body.style.overflow="auto";
})