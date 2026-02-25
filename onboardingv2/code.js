mw.loader.using('mediawiki.api').then(() => {
	class OnboardingSection {
		constructor(title, page, seconds) {
			this.title = title;
			this.page = page;
			this.seconds = seconds;
		}
		
		getTitle() {
			return this.title;
		}
		
		getPage() {
			return this.page;
		}

		getSeconds() {
			return this.seconds;
		}
	}

	let section = 0;
	var wikiName = mw.config.get('wgSiteName');
	var wikiNamespace = wikiName.replace(/ /g, '_');
	
	const onboardingSections = [
		new OnboardingSection("Introduction", 'User:Liminalityyyyy/testing2', 10),
		new OnboardingSection("Rules", 'User:Liminalityyyyy/rules', 20),
		new OnboardingSection("Roles", 'User:Liminalityyyyy/testing3', 20),
	];
	// padding: 6px 0;
	let seconds;
	let canContinue = false;

	async function getPageContent(page) {
		$.get('/wiki/' + page, function(html) {
			const content = $(html).find('.mw-parser-output');
			$('.wiki-onboarding-text').empty();
			$('.wiki-onboarding-text').append(content);
		});
	}
	
	function init() {
		const screen = $('body');
		$(screen).css('overflow', 'hidden');
		$(screen).append('<div class="wiki-onboarding">');
		
		const onboardingDOM = 
		$('<div class="wiki-onboarding-container">').append(
			$('<div class="wiki-onboarding-content">').append(
				$('<div class="wiki-onboarding-header">Onboarding Process</div>'),
				$('<div class="wiki-onboarding-text">'),
				$('<div class="wiki-onboarding-footer">').append(
					$('<div class="wiki-onboarding-title">'),
					$('<button class="wiki-onboarding-continue">Continue</button>')
				)
			)
		);
		
		$('.wiki-onboarding').append(onboardingDOM);
		$('.wiki-onboarding-text').append('Loading...');
		loadSection(section);
	}

	function isFinalStep() {
		return (section+1) == onboardingSections.length;
	}
	
	function loadSection(sectionToLoad) {
		const curSection = sectionToLoad+1;
		getPageContent(onboardingSections[sectionToLoad].getPage());
		$('.wiki-onboarding-title').text(onboardingSections[sectionToLoad].getTitle() + " (" + curSection + "/" + onboardingSections.length + ")");

		seconds = onboardingSections[sectionToLoad].getSeconds();
		canContinue = false;

		const timer = setInterval(function() {
			seconds--;
			updateContinueButton(seconds);

			if (seconds == 0) {
				clearInterval(timer);
				updateContinueButton(seconds);
				seconds = onboardingSections[sectionToLoad].getSeconds();
				canContinue = true;
			}
		}, 1000);
	}
	
	init();

	function updateContinueButton(seconds) {
		const buttonText = 
		isFinalStep() 
		? "Finish" + (seconds == 0 ? "" : " (" + seconds + "s)")
		: "Continue" + (seconds == 0 ? "" : " (" + seconds + "s)");
		
		$('.wiki-onboarding-continue').text(buttonText);
	}

	$('.wiki-onboarding-container').on('click', '.wiki-onboarding-continue', function() {
		if (canContinue) {
			if (isFinalStep()) {
				console.log("finished!");
				return;
			}
			$('.wiki-onboarding-text').text('Loading...');
			section++;
			loadSection(section);
		}
	})
	
	importArticle({
	  type: 'style',
	  article: 'User:Liminalityyyyy/onboarding.css'
	});
})

