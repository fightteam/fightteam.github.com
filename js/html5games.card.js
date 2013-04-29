jQuery(document).ready(function($) {
	var matchingGame = {};
	matchingGame.deck = [
		'cardAK', 'cardAK',
		'cardAQ', 'cardAQ',
		'cardAJ', 'cardAJ',
		'cardBK', 'cardBK',
		'cardBQ', 'cardBQ',
		'cardBJ', 'cardBJ', ]
	// $('.card').attr('data-pppp',matchingGame.deck[1]);

	// console.log($('.card').data('pppp'));
	// 	$('.card').click(function(){
	// 		$(this).toggleClass("flipped");
	// 		// $('.back').addClass("cardAQ");
	// 	});
	$(function() {
		matchingGame.deck.sort(shuffle);
		for (var i = 0; i < 11; i++) {
			$('.card:first-child').clone().appendTo('#cards');
		}
		$('#cards').children().each(function(index) {
			var cardData = matchingGame.deck[index];
			$(this).css({
				'left': ($(this).width() + 20) * (index % 4),
				'top': ($(this).height() + 20) * Math.floor(index / 4)
			})
				.attr('data-pattern', cardData)
				.children('.back')
				.addClass(cardData);
			$(this).click(selectCard);
		});
	});

	function shuffle() {
		return 0.5 - Math.random();
	}

	function selectCard() {
		if ($('.flipped').size() > 1) {
			return;
		}
		$(this).addClass('flipped');
		if ($('.flipped').size() == 2) {
			// console.log('OK@@@');
			setTimeout(checkPattern, 700);
		}
	}

	function checkPattern() {
		// if($('.card').size()==2)
		if (isMatchPattern()) {
			// alert("OK!");
			// $('.flipped').addClass('removeCard').removeClass('flipped');
			// setTimeout($('.flipped').remove(), 10000);
			$('.flipped').remove();
			if ($('.card').size() == 0) {
				alert('恭喜你！');
			}
		} else {
			$('.flipped').removeClass('flipped');
		}
	}

	function isMatchPattern() {
		var cards = $('.flipped');
		var pattern = $(cards[0]).data('pattern');
		var AnotherPattern = $(cards[1]).data('pattern');
		// console.log(pattern);
		return (AnotherPattern == pattern);
	}

});