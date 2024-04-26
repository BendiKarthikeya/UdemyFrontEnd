//jQuery
$("h1").addClass("big-title margin-50").text("Hi ,How are you!");
$("button").addClass("margin-50").text("Don't click on me")

$("button").click(function(){
    $("h1").css("color","purple")
})
$(document).keydown(function(event){
    $("h1").text(event.key);
})
$("h1").on("mouseover",function(){
    $("h1").css("color","purple")
});
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");
// $("button").remove()

$("button").on("click" , function(){
    $("h1").hide();
})

$("button").click(function(){
    $("h1").show()
})

$("button").click(function(){
    $("h1").toggle()
})

$("button").click(function(){
    $("h1").fadeOut()
})

$("button").click(function(){
    $("h1").fadeIn()
})

$("button").click(function(){
    $("h1").fadeToggle()
})

$("button").click(function(){
    $("h1").slideUp()
})

$("button").click(function(){
    $("h1").slideDown()
})

$("button").click(function(){
    $("h1").slideToggle()
})

$("button").click(function(){
    $("h1").animate({opacity:0.5})
})