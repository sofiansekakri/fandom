(() => {
	'use strict';
	if (window.audioJSLoaded) return;
	window.audioJSLoaded = true;
	$('div.audioevents').each(function() {
		const params = $(this).text().trim();
		const diffParams = {
			audioUrl: params.split("|")[0],
			element: params.split("|").slice(1).join("|")
		};
		const audio = new Audio(diffParams.audioUrl);
		$(diffParams.element).each(function() {
			$(this).click(function() {
				if($(this).attr('data-audioenabled') === ('false') || $(this).attr('data-audioenabled') === undefined) {
					audio.play();
					$(this).attr('data-audioenabled', 'true');
				} else {
					audio.pause();
					audio.currentTime = 0;
					$(this).attr('data-audioenabled', 'false');
				}
			});
		});
		$(this).css('display', 'none');
	});
})();
