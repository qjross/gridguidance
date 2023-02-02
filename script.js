var n = 0
$(document).ready(function(){
    
$(".individual360Advisory").click(function(){
  $("#xbox360Prices").toggle();
    $("#ps2Prices").hide();
    $("#ps3Prices").hide();
    $("#specialNESprices").hide();
    $("#specialSNESprices").hide();
    $("#specialN64prices").hide();
    });           
    

$(".individualPS3").click(function(){
  $("#ps3Prices").toggle();
    $("#ps2Prices").hide();
    $("#xbox360Prices").hide();
    $("#specialNESprices").hide();
    $("#specialSNESprices").hide();
    $("#specialN64prices").hide();
    });
    
$(".specialNESadvisory").click(function(){
  $("#specialNESPrices").toggle();
    $("#ps2Prices").hide();
    $("#ps3Prices").hide();
    $("#xbox360Prices").hide();
    $("#specialSNESprices").hide();
    $("#specialN64prices").hide();
    });
    
$(".specialSNESadvisory").click(function(){
  $("#specialSNESPrices").toggle();
    $("#ps2Prices").hide();
    $("#ps3Prices").hide();
    $("#xbox360Prices").hide();
    $("#specialNESprices").hide();
    $("#specialN64prices").hide();
    });
    
$(".specialN64advisory").click(function(){
  $("#specialN64Prices").toggle();
    $("#ps2Prices").hide();
    $("#ps3Prices").hide();
    $("#xbox360Prices").hide();
    $("#specialNESprices").hide();
    $("#specialSNESprices").hide();
    });
    
$(".specialXBOXadvisory").click(function(){
  $("#specialXboxPrices").toggle();
    $("#ps2Prices").hide();
    $("#ps3Prices").hide();
    $("#xbox360Prices").hide();
    $("#specialNESprices").hide();
    $("#specialSNESprices").hide();
    });
$(".individualDS").click(function(){
  $("#dsTable").toggle();
    $("#ps2Prices").hide();
    $("#ps3Prices").hide();
    $("#xbox360Prices").hide();
    $("#specialNESprices").hide();
    $("#specialSNESprices").hide();
    });
    
        
$(".ddr1").click(function(){
  $(".ddr1Table").toggle();
    $(".ddr2Table").hide();
    $(".ddr3Table").hide();
    $(".ddr4Table").hide();
    });
    
$(".ddr2").click(function(){
  $(".ddr2Table").toggle();
    $(".ddr1Table").hide();
    $(".ddr3Table").hide();
    $(".ddr4Table").hide();
    });    
  
$(".ddr3").click(function(){
  $(".ddr3Table").toggle();
    $(".ddr1Table").hide();
    $(".ddr2Table").hide();
    $(".ddr4Table").hide();
    });    
    
$(".ddr4").click(function(){
  $(".ddr4Table").toggle();
    $(".ddr1Table").hide();
    $(".ddr2Table").hide();
    $(".ddr3Table").hide();
    });    
    
$(".nav-item").mouseover(function() {
   $(this).css({color:"#FFFFFF"});
    
});
    
$(".nav-item").mouseleave(function() {
   $(this).removeAttr("style");                    
});

$(".x360HDD").click(function(){
    $(".x360StorTable").toggle();
        });
$(".navbar-brand").click(function(){
    $(".dropMenu").toggle();
});
    
   });                               