let countDown = document.querySelector(".count-down");
let targetDate = new Date("2024-12-1").getTime();
let countDownInterval = setInterval(function() {
    let currentDate = new Date().getTime();
    let timeLeft = targetDate - currentDate
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countDown.innerHTML =
        days + "D    " +
        hours + "H   " +
        minutes + "M   " +
        seconds + "S   ";
   
}, 1000);
$("textArea").on("input",function(){
const maxlength=100;
const textLength = $("textArea").val().length;
const remainingChars = maxlength-textLength
if(textLength<maxlength){
    $(".chars").html(remainingChars)
    $(".CharacterReamining").show();

}
else{
    $(".chars").html("your available character finished")
    $(".CharacterReamining").hide();
}
});
const sidebarwidth = $("aside").outerWidth();
$(".fa-x").on("click",function(){
$("aside").animate({left :`${-sidebarwidth}px`},1000)
$(".openword").show(2000);
    $(".openIcon").show(2000);
})

$(".open").on("click",function(){

    $("aside").animate({left :`${0}px`},1000)  
})
$(".openword").on("click",function(){
    $(".openword").hide();
    $(".openIcon").hide()
})

const contactOffsetTop = $(".contact").offset().top;
$("aside ul li.contact a").on("click",function(){
    $("html, body ").animate({scrollTop:contactOffsetTop},4000)
    
})

const countDownOffset=$(".details").offset().top;
$("aside ul li.details a").on("click",function(){
    $("html, body ").animate({scrollTop:countDownOffset},4000)
    
})
const singersOffset=$(".duration").offset().top;
$("aside ul li.duration a").on("click",function(){
    $("html, body ").animate({scrollTop:countDownOffset},4000)
    
})

