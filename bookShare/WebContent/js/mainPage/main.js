/**
 * 
 */

//테이블에 마우스 올라가면 엘리먼트 강조
$(function() {
	$('#ourUsedBook_1').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_1').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_2').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_2').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_3').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_3').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_4').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_4').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_5').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_5').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_6').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_6').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_7').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_7').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_8').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_8').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_9').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_9').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_10').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_10').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_11').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_11').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_12').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_12').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_13').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_13').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_14').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_14').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_15').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_15').mouseout(function() {
		$(this).css('background', '#ededed');
	})
	$('#ourUsedBook_16').mouseover(function() {
		$(this).css('background', '#D8D8D8');
	})
	$('#ourUsedBook_16').mouseout(function() {
		$(this).css('background', '#ededed');
	})
});

//캐로셀 cell hover 주기
$(".cell_1").hover(
	function() {
		$(".cell_1").animate({
			width: "40px" //커질크기
		}, 300); //속도(slow, fast, 숫자...)
	},
	function() {
		$(".cell_1").animate({
			width: "32px" //원래크기
		}, 300); //속도(slow, fast, 숫자...)
	}
)