mw.loader.using('mediawiki.api').then(() => {
	class OnboardingSection {
		constructor(title, content) {
			this.title = title;
			this.content = content;
		}
		
		getTitle() {
			return this.title;
		}
		
		getContent() {
			return this.content;
		}
	}
	
	const onboardingSections = [
		new OnboardingSection("Introduction", getPageContent('The Transrooms'))
	];
	
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
					$('<button class="wiki-onboarding-continue">')
				)
			)
		);
		
		$('.wiki-onboarding').append(onboardingDOM);
		$('.wiki-onboarding-text').append('Loading...');
		loadSection(0);
	}
	
	function loadSection(sectionToLoad) {
		onboardingSections[sectionToLoad].getContent()
		$('.wiki-onboarding-title').append(onboardingSections[sectionToLoad].getTitle());
		$('.wiki-onboarding-continue').append("Continue");
	}
	
	init();
	
	importArticle({
	  type: 'style',
	  article: 'User:Liminalityyyyy/onboarding.css'
	});
})

