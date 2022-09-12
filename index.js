// Dark Theme section
const changeMode = () => {
    let icon=document.getElementById('icon')
    icon.onclick = () =>{
        document.body.classList.toggle('mydark')
    if( document.body.classList.contains('mydark')){
        icon.src="Images/dark/sun.png" 
        icon.title="Light Mode"
    }else{
        icon.src="Images/dark/moon.png"
        icon.title="Dark Mode"
    }
    }
}
// Coupon code section
console.log("Coupon code")
const loadcoupon = () =>{
    let ele=document.getElementById("coupon")
    ele.style.display="block";
}
const closecoupon = () => {
    let ele=document.getElementById("coupon")
    ele.style.display="none";
    let myele=document.getElementById('mybdoy')
    myele.style.opacity="1"
    let btn=document.getElementById("btn")
    btn.style.display="block"
}