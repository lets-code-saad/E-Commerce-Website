// Cart Side Bar
let cartData = document.getElementById("cartSidebar");
let cartToggle = document.getElementById("cartButton");
let cartCloseBtn = document.getElementById("cartCloser");

cartToggle.addEventListener("click",()=>{
    cartData.style.display = "block";
})
cartCloseBtn.addEventListener("click",()=>{
    cartData.style.display = "none";
})

// Nav Side Bar
let navOpener = document.getElementById("navToggleBtn")
let navCloser = document.getElementById("navCloserIcon")
let navSideBarData= document.getElementById("sidebarNavData")
navOpener.addEventListener("click",()=>{
    navSideBarData.style.display="block";
})
navCloser.addEventListener("click",()=>{
    navSideBarData.style.display="none";
})

// Languages Opener Icon
let languagesChanger = document.getElementById("langOpener")
let languages = document.getElementById("langChangeData")


languagesChanger.addEventListener("click",()=>{
    if(languages.style.display ==="none"){
        languages.style.display = "block";
}
else{
    languages.style.display ="none";
}
})
