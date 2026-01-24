mw.loader.using('mediawiki.api').then(() => {
	class OnboardingSection {
		constructor(title, page) {
			this.title = title;
			this.page = page;
		}
		
		getTitle() {
			return this.title;
		}
		
		getPage() {
			return this.page;
		}
	}
	
	const onboardingSections = [
		new OnboardingSection("Introduction", 'User:Liminalityyyyy/testing2'),
		new OnboardingSection("Rules", 'Backrooms_Freewriting_Wiki:Wiki_rules')
	];

	let section = 0;

	let canContinue = false;
	let continueTimer = 5;
	
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
		
		updateContinueButton();
	}
	
	init();

	function updateContinueButton() {
		const buttonText = isFinalStep() ? "Finish (" + continueTimer + "s)" : "Continue (" + continueTimer + "s)";
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

