var n = 0
$(document).ready(function(){
    
$(".individual360Advisory").click(function(){
  $("#xbox360Prices").toggle();
    });           
    
    $(".individualPS2").click(function(){
  $("#ps2Prices").toggle();
    });
    
    $(".ddr1").click(function(){
  $(".ddr1Table").toggle();
    });       
        $(".ddr2").click(function(){
  $(".ddr2Table").toggle();
    });    
  
        $(".ddr3").click(function(){
  $(".ddr3Table").toggle();
    });    
        $(".ddr4").click(function(){
  $(".ddr4Table").toggle();
    });    
    
$(".navbar-brand").mouseover(function(){
 $(this).css({color: "#FFFFFF"});
 });
    
 $(".navbar-brand").mouseout(function() {
  $(this).removeAttr("style");
}); 
    
$(".navbar").mouseover(function(){
    $(this).css({opacity: 0.5});
});
    
$(".navbar").mouseleave(function(){
    $(this).css({opacity: 1.0});
});
    
   });                               