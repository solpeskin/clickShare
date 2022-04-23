
const body = document.body;
const header = document.querySelector(".header1")

// const cuando = (document.getElementById("Pindex"))? 800:(document.getElementById("Pfooter"))? 50: "";
const cuando = 100;

let lastScroll = cuando;
 
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > cuando){
        if (currentScroll>lastScroll){
            header.classList.add ("scrollDown")
            header.classList.remove("scrollUp")
        }
    
        if (currentScroll<lastScroll){
            header.classList.add("scrollUp")
            header.classList.remove("scrollDown")
        }
    
        lastScroll = currentScroll;
    }
    
});