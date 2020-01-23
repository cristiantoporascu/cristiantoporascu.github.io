$(document).ready( function() {
	initWebPage();
	initEvents();
});

function initWebPage() {
	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	// Prioritize "important" elements on medium.
	skel.on('+medium -medium', function() {
		$.prioritize(
			'.important\\28 medium\\29',
			skel.breakpoint('medium').active
		);
	});
}

function initEvents() {
	// Fix: Placeholder polyfill.
	$('form').placeholder();

	var	$window = $(window),
	$body = $('body');

	// Disable animations/transitions until the page has loaded.
	$body.addClass('is-loading');

	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-loading');
		}, 100);
	});

	$('#continue-button').on( 'click', function() {
		$('html, body').animate({
			scrollTop: $(".about-selector").offset().top
		});
	});
}

function initReplaceComponents() {
	var includes = $('[data-include-component]');
	$.each(includes, function(){
		var file = '../component/' + $(this).data('include-component') + '.html';
		$(this).load(file);
	});
}

function replaceString(object, toReplace, replacement) {
	return object.replace(toReplace, replacement);
}