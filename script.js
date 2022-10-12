function loadcoupon() {
    document.getElementById('coupon').style.visibility = "visible";
    document.getElementById('main').style.opacity = '0.7'
    document.getElementById('navbar').style.opacity = '0.7'

}
function closecoupon() {
    document.getElementById('coupon').style.visibility = "hidden";
    document.getElementById('main').style.opacity = '1'
    document.getElementById('navbar').style.opacity = '1'
}
function click(){
    let dark = document.body;
    dark.classList.toggle('mydark')
}