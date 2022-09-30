/**
 * 
 */

//테이블에 마우스 올라가면 엘리먼트 강조
$(document).ready(function(){
   $('table td').mouseover(function(){
      $(this).css("backgroundColor","#D8D8D8");
   });
   $('table td').mouseout(function(){
      $(this).css("backgroundColor","#ffffff");
   });
});

$('td').on('click', function(e){
	location.href = "../sellersDetail.html";
});