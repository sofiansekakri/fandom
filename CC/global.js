//testing mw.config setup 
mw.config.set('wgUserGroups', ['sysop', '*', 'user', 'autoconfirmed', 'emailconfirmed']);
window.RollbackWikiDisable = false;

//favWikias
window.favWikias = [
  { 
  	name: "dev",
    lang: "en",
    text: "Dev",
    page: ""
  },
  {
  	name: "Community",
    lang: "en",
    text: "CCEN", 
    page: "Community_Central"
  },
  {
  	name: "Community",
    lang: "de",
    text: "CCDE", 
    page: "Community-Wiki"
  },
  {
  	name: "crazytesting",
    lang: "en",
    text: "testing", 
    page: ""
  },
  {
    name: "Backrooms",
    lang: "en",
    text: "Backrooms",
    page: "Backrooms_Wiki"
  },
  {
    name: "aliceinborderland",
    lang: "en",
    text: "AiB",
    page: "Alice_in_Borderland_Wiki"
  }
];

window.nukeDeleteReason = "Cleanup";
window.nukeDelay = 50;
window.nukeTitle = "Mass delete all pages created by this user";

window.AutoCreateUserPagesConfig = {
    content: {
        2: '{{w:User:Crazybloy2}}',
        3: '<!---empty--->'
    },
    summary: 'Creating my pages',
    notify: 'Created User page'
};

window.UserAndIPTools = {
	enable: {
		MultiLookup: true,
		LookupContribs: true,
		LookupUser: true,
	},
	openInNewPage: true,
	disableDebug: true,
};

window.FDCSSVList_Side = true;
window.FDCSSVList_Text = false;

window.MarkForDeletion = {
    promptedDeleteReason: "Vandalism",
    replace: true
};

window.toDoList = {
    page: 'User:Crazybloy2/ToDo',
    height: '35em',
    width: 400
};

window.blockListTools = {
    showAbuseLog: true
};

window.massProtectDelay = 100;
massRenameDelay = 100;
massRenameSummary = "Maintenance";

window.Reconstitution = {
	delay: 100,
	reason: "Mass restoration of pages created by [[User:$1|$1]]",
};

window.fdButtons = [
    {
        summary: 'Vandalism',
        label: 'V'
    },
    {
        summary: 'Inappropriate',
        label: 'I'
    },
    {
        summary: 'Cleanup',
        label: 'C'
    }
];

window.MassEditConfig = {
  interval: 750,
  placement: {
    element: "toolbar",
    type: "append"
  }
};

window.WHAMBotMe = true;
window.WHAMBotReason = "Cleanup";
window.WHAMDelay = 10;
window.WHAMDeleteReason = "Housekeeping.";
window.WHAMBlockReason = "Vandalism";


$('.editable').each(function() {
	$(this).attr('contenteditable', 'true');
});
if (mw.config.get('wgAction') !== 'edit' && mw.config.get('wgNamespaceNumber') != '-1') {
	// $('#content').attr('contenteditable', 'true');
}

$.get('/api.php?action=query&list=users&ususers=fandom&usprop=rights&format=json', data => {
	mw.user.getRights = () => { return data.query.users[0].rights; };
	
	importArticles({
	    type: 'script',
	    articles: [
	        'u:dev:MediaWiki:MassEdit/code.js',
	        'u:dev:MediaWiki:MassPatrol/code.js',
	        'u:dev:MediaWiki:MassProtect/code.js',
	        'u:dev:MediaWiki:MassRename/code.js',
	        'u:dev:MediaWiki:PageRenameAuto-update/code.js',
	        'u:dev:MediaWiki:PowerDelete.js',
	        'u:dev:MediaWiki:CategoryQuickRemove.js',
	        'u:dev:MediaWiki:WikiActivity.js',
	        'u:dev:MediaWiki:OpenWithVSC.js',
	        'u:dev:MediaWiki:FastDelete/code.js',
	        'u:dev:MediaWiki:PatrolPanel.js',
	        'u:dev:MediaWiki:BlockListTools.js',
	        'u:dev:MediaWiki:QuickIW/code.js',
	        'u:dev:MediaWiki:User Admin Tools.js',
	        'u:dev:MediaWiki:ToDoList.js',
	        'u:dev:MediaWiki:MarkForDeletion/code.js',
	        'u:dev:MediaWiki:Reconstitution.js',
	        'u:dev:MediaWiki:NotificationCenter.js',
	        'u:dev:MediaWiki:UTCClock/code.js',
	        'u:dev:MediaWiki:View_Source/code.js',
	        'u:dev:MediaWiki:WebArchive.js',
	        'u:dev:MediaWiki:UsernameAvailability/code.js',
	        'u:dev:MediaWiki:UserAndIPTools.js',
	        'u:dev:MediaWiki:Blame.js',
	        'u:dev:MediaWiki:CopyCodeButton.js',
	        'u:dev:MediaWiki:CacheCheck/code.js',
	        'u:dev:MediaWiki:ExportList/code.js',
	        'u:dev:MediaWiki:Goopatars.js',
	        'u:dev:MediaWiki:JSONViewer.js',
	        'u:dev:MediaWiki:GlobalJSLinks.js',
	        'u:dev:MediaWiki:SOAPReport.js',
	        'u:dev:MediaWiki:CodeLinksDropdown.js',
	        'u:dev:MediaWiki:CollapsiblePageTools.js',
	        'u:dev:MediaWiki:LastEdited/code.js',
	        'u:dev:MediaWiki:RevealAnonIP.js',
	        'u:dev:MediaWiki:Discussions Delete All/code.js',
	        'u:dev:MediaWiki:Discussions Restore All.js',
	        'u:dev:MediaWiki:PurgeD.js',
	        'u:dev:MediaWiki:PortableCSSPad/code.js',
	        'u:dev:MediaWiki:AutoCreateUserPages.js',
	        'u:dev:MediaWiki:DiscussionsRailModule/UCP.js',
	        'u:dev:MediaWiki:FanFeed.js',
	        'u:dev:MediaWiki:ShowUserGroups.js',
	        'u:dev:MediaWiki:PageCreator/code2.js',
	        'u:dev:MediaWiki:ThemeToggler.js',
	        'u:dev:MediaWiki:MarkBlocked.js',
	        'u:dev:MediaWiki:InterwikisOnSpecialPages.js',
	        'u:dev:MediaWiki:CodeQuickLinks/code.js',
	        'u:dev:MediaWiki:MastheadGender/code.js',
	        'u:dev:MediaWiki:ReportArticle.js',
	        'u:dev:MediaWiki:Nuke/code.js',
	        'u:dev:MediaWiki:UsefulDropdown/code.js',
	        'u:dev:MediaWiki:AddUserRightsTag/code.js',
	        'u:dev:MediaWiki:MisspelledPage/code.js',
	        'u:dev:MediaWiki:BotManagement.js',
	        'u:dev:MediaWiki:Status/code.js',
	        'u:dev:MediaWiki:QuickJSRT.js',
	        'u:dev:MediaWiki:FavWikias.js',
	        'u:dev:MediaWiki:FriendMe.js',
	        'u:dev:MediaWiki:VanguardTools.js',
	        'u:dev:MediaWiki:PageMetrics.js',
	        'u:dev:MediaWiki:DisableAccessKeys.js',
	        'u:dev:MediaWiki:DisableCode/code.js',
	        'u:dev:MediaWiki:Rollback/code.js',
	        'u:dev:MediaWiki:JWB/load.js',
	        'u:dev:MediaWiki:TemplateWizard.js',
	        'u:dev:MediaWiki:Wikificator.js',
	        'u:dev:MediaWiki:Summarysuggestion.js',
	        'u:dev:MediaWiki:ImportJS-Plus.js',
	        'u:dev:MediaWiki:PortableListUsers.js',
	        'u:dev:MediaWiki:UnifiedControlPanel.js',
	        'u:dev:MediaWiki:WHAM/code.2.js',
	        'u:dev:MediaWiki:BannerNotification.js',
	        'u:dev:MediaWiki:PreloadTemplates.js',
	        'u:dev:MediaWiki:Matrix.js',
	        'u:community:User:Crazybloy2/common.js'
	    ]
	}).done(function(){
		$('.protection-level').remove();
		
		 mw.loader.load('https://community.fandom.com/index.php?title=User:Crazybloy2/common.js&action=raw&ctype=text/javascript');
		const id = mw.config.get( 'wgArticleId' );
	const ns = mw.config.get ( 'wgNamespaceNumber' );
	const lang = mw.config.get( 'wgContentLanguage' );
	const userid = mw.config.get( 'wgUserId' );
	$('.page-header__title-wrapper').append(`
	<div style="font-size: small;">
	<p>Article Id: <code>$1</code> | Namespace: <code>$2</code> | Language: <code>$3</code> | User Id: <code>$4</code></p>
	</div>
	`.replace(/\$1/g, id).replace(/\$2/g, ns).replace(/\$3/g, lang).replace(/\$4/g, userid));
	
	function bypass() {
		$('.FormEntryPoint_form-entry-point__E4Elr').each(function(){
			$(this).css({'display': ''});
		});
		$('[class*="InlineEntityFormWrapper_inline-entity-form-wrapper"]').each(function() {
			const ele = $(this).find('div:not(.FormEntryPoint_form-entry-point__E4Elr)');
				ele.css({'margin-top':'10px'});
		});
		/*
		$('[class*="InlineEntityFormWrapper_inline-entity-form-wrapper"]>div:not([class], [id])').each(function(){
			$(this).text('');
			$(this).prepend("<span class='nocommenttext'><svg class='wds-icon wds-icon-small'><use xlink:href='#wds-icons-lock-small'></use></svg> Old comment, don't reply unless necessary.</span>");
		});
		$('.rich-text-editor__toolbar__icon-wrapper').each(function(){
			$('.'+$(this).attr('class')+'>div:not([class])').remove();
		});
		*/
		setInterval(bypass, 2000);
	}
	bypass();
	/*
	$('#content').prepend(`<div class="wds-collapsible-panel wds-is-collapsed" style="margin-bottom:15px;margin-top:10px;"><div class="wds-collapsible-panel__header wds-button" style="align-items: start;width:150px;" aria-expanded="false"><svg class="wds-icon" style="height:40px;width:40px;"><use xlink:href="#wds-icons-menu-control" style="height:40px;width:40px;"></use></svg><span style="margin-right:20px;"> JSON Data	</span></div><div class="wds-collapsible-panel__content" style="margin-top:10px;"><div id="codingboxes" style="display:flex;gap:15px;"></div></div></div>`);
	$.get('https://services.fandom.com/user-attribute/user/'+mw.config.get('wgUserId'), data => {
	$('#codingboxes').prepend(`
	    <pre style="width:50%;height:230px;">
	    <center><h2>User data</h2></center>
		<code class="language-json">`
			+JSON.stringify(data)+
		`</code></pre>
	`);
	}).then(function() {
		$.get('https://services.fandom.com/site-attribute/site/'+window.fandomContext.site.siteId+'/attr', data => {
			$('#codingboxes').prepend(`
		<pre style="width:50%;height:230px;">
		<center><h2>Wiki data</h2></center>
		<code class="language-json">`
			+JSON.stringify(data)+
		`</code></pre>
		
		`);
		}).then(function() {
		$.getScript( "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js", function() {
			$('head').append(`
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/default.min.css">
				<style>
				.hljs {background-color:black !important;}
				</style>
			`);
			hljs.highlightAll();
		});
		});
	});
	*/
	
	mw.loader.using('mediawiki.api').then(function() {
	if ($('.mw-userrights-groups').length > 0) {
		$('.mw-userrights-disabled').each(function(){
			$(this).find('input[disabled]').removeAttr('disabled');
			$(this).find('select[disabled]').removeAttr('disabled');
			$(this).removeAttr('class');
		});
		$('.mw-userrights-groups > tbody > tr:nth-child(2) > td:nth-child(1) > div').each(function(){
				$('.mw-userrights-groups > tbody > tr:nth-child(2) > td:nth-child(2)').append($(this));
			});
		$('.mw-userrights-groups > tbody > tr:nth-child(2) > td:nth-child(1)').remove();
		$('.mw-userrights-groups > tbody > tr:nth-child(1) > th:nth-child(1)').remove();
		$('.mw-userrights-groups').addClass('bypassed');
	} else if($('#mw-userrights-form2').length > 0) {
		const groupsUserName = new URL(window.location.href).searchParams.get('user');
		$('#mw-userrights-form2>fieldset').append(`<table class="mw-userrights-groups bypassed"><tbody><tr>
	<th>Groups you can change</th></tr><tr class="mw-groups-custom"><td style="vertical-align:top;"></td></tr>
	</tbody></table>`);
		new mw.Api().get({
			action: 'query',
			meta: 'siteinfo',
			siprop: 'usergroups',
			format: 'json'
		}).then(groups => {
			for (let i = 0; i < groups.query.usergroups.length; i++) {
				let div = $('<div/>');
				div.append(`<input type="checkbox" name="wpGroup-sysop" value="1" id="wpGroup-sysop" class="mw-userrights-groupcheckbox">&nbsp;<label for="wpGroup-sysop">sysop</label>			<div id="mw-userrights-nested-wpGroup-sysop" class="mw-userrights-nested"><span>Expires:</span><span><select name="wpExpiry-sysop" id="mw-input-wpExpiry-sysop
				<option value="infinite" selected="">Does not expire</option>
	<option value="other">Other time:</option>
	<option value="1 day">1 day</option>
	<option value="1 week">1 week</option>
	<option value="1 month">1 month</option>
	<option value="3 months">3 months</option>
	<option value="6 months">6 months</option>
	<option value="1 year">1 year</option></select><br><input name="wpExpiry-sysop-other" size="30" id="mw-input-wpExpiry-sysop-other" class="mw-userrights-expiryfield"></span></div>`.replace(/sysop/g, groups.query.usergroups[i].name));
				$('.mw-groups-custom > td').append(div);
			}
			if ($('#mw-userrights-table-outer').length === 0) {
					$('#mw-userrights-form2>fieldset').append(`<table id="mw-userrights-table-outer"><tbody><tr>
							<td class="mw-label"><label for="wpReason">Reason:</label></td>
							<td class="mw-input"><input name="user-reason" size="60" id="wpReason"></td>
						</tr>
						<tr>
							<td></td>
							<td class="mw-submit"><input name="saveusergroups" title="[s] [alt-shift-s]" accesskey="s" type="submit" value="Save user groups"></td>
						</tr>
						<tr>
							<td></td>
							<td class="mw-input"><input id="wpWatch" type="checkbox" value="1" name="wpWatch">&nbsp;<label for="wpWatch">Watch this user's user and talk pages</label></td>
						</tr></tbody></table>`);
			}
			let urlusername = $('#mw-input-user>input').val();
			if (urlusername === '') {
				urlusername = new URL(window.location.href).searchParams.get('user');
				if (urlusername === null) {
					urlusername = mw.config.get('wgPageName').split("/")[1];
				}
			}
			new mw.Api().get({
				action: 'query',
				list: 'users',
				ususers: urlusername,
				usprop: 'groups'
			}).then(data => {
				for (let i = 0; data.query.users[0].groups.length; i++) {
					document.querySelector('#wpGroup-'+CSS.escape(data.query.users[0].groups[i])).checked = true;
				}
			});
		});
	}
	});
	
	
	mw.loader.using('mediawiki.api').then(() => {new mw.Api().get({action:'query', titles:'Message_Wall:Crazybloy2', format:'json'}).then(data => {if(Object.values(data.query.pages)[0].missing !== undefined && window.location.host !== 'backrooms-convergence.fandom.com') {new mw.Api().post({action:"edit",title:"Message_Wall:Crazybloy2",text:'<span style="font-weight:bold;color:white;background:black;padding:4px;border-radius:2px;">Hello</span>',summary:"auto create",token:mw.user.tokens.get("csrfToken")});}})});
	
	
	if (
		($('.mw-permissionerror-protectedpagetext').length !== 0 ||
		$('.mw-permissionerror-protectedinterface').length !== 0) && !window.unlockeditorloaded
	) {
		window.unlockeditorloaded = true;
		$('#wpTextbox1').css('display', 'none');
		$('#wpTextbox1').removeAttr('readonly');
		mw.loader.using('mediawiki.api').then(function () {
			function savePage(title, summary) {
				new mw.Api().post({
					action: 'edit',
					title: title,
					text: document.querySelector('.cm-content').innerText,
					summary: summary,
					token: mw.user.tokens.get('csrfToken')
				}).done(() => {
					window.location.search = '';
				}).fail(() => {
					// $('#errorlabel').attr('style', 'transform:translateY(-16px);font-size: 12px;line-height: .75em;9px;pointer-events: auto;color:red;vertical-align:text-bottom;}');
					mw.hook('dev.banners').add(function(BannerNotification) {
					    const editErrorNotif = new BannerNotification('Failed', 'erroroccured');
					    editErrorNotif.type = 'error';
					    editErrorNotif.show();
					    $('.erroroccured>.wds-banner-notification__icon:not(:has(svg))').append(`<svg class="wds-icon wds-icon-small">  
	                    <use xlink:href="#wds-icons-error-small"></use></svg>`);
	                    $('.erroroccured>.wds-banner-notification__icon').css('background', 'red');
	
					});
				});
			}
			$('.templatesUsed').prepend(`
	      <div class="editOptions" style="background-color:var(--theme-page-background-color--secondary);padding:12px;">
	      <div class="wds-input">
	          <input class="wds-input__field" type="text" id="EDITsummary" tabindex="1" value="">
	          <label class="wds-input__label" for="wds_input">Summary:</label>
	        </div>
	        <div class="wds-input" id="pagetitleinput">
	          <input class="wds-input__field" type="text" id="newPageTitle" tabindex="1" value="User:`+mw.config.get('wgUserName')+`/`+mw.config.get('wgPageName')+`">
	          <label class="wds-input__label" for="wds_input">Title:</label>
	        </div>
	        <div class="editButtons">
	          <button id="SavePageAs" tabindex="2" accesskey="s" class="wds-button">Save changes</button>
	          <button id="CancelEdit" tabindex="3" class="wds-button">Cancel</button>
	          <label id="errorlabel" style="display:none;"> an error occured.</label>
	        </div>
	      </div>
	    `);
	    $('#SavePageAs').click(function() {
	    	if ($('#newPageTitle').val().length > 0) {
	    		savePage($('#newPageTitle').val(), $('#EDITsummary').val());
	    	} else {
	    		 $('#pagetitleinput').addClass('has-error');
	    	}
	    });
	    
	    $('#CancelEdit').click(function() {
	    	window.location.search = '';
	    });
	    $('body').append(`
	        <style>
	            #wikiEditor-ui-toolbar {
	                background-color:#37393b ant;
	                color:white !important;
	                fill:white !important;
	            }
	
	            .oo-ui-popupToolGroup-handle span.oo-ui-iconElement-icon,
	            .oo-ui-popupToolGroup-handle span.oo-ui-indicatorElement-indicator {
	                margin-top:-25px !important;
	            }
	
	            #mw-content-text:nth-child(6) {
	                display:none !important;
	            }
	
	            .oo-ui-toolbar-bar {
	                padding:1px !important;
	            }
	
	            .ve-init-mw-editSwitch .oo-ui-popupToolGroup.oo-ui-iconElement .oo-ui-popupToolGroup-handle {
	                padding-top: 29px !important;
	                height: 0 !important;
	            }
	
	            .tabs a {
	                color:#e8621a !important;
	            }
	
	            .wikiEditor-ui-toolbar .booklet > .index > .current {
	                background-color: transparent !important;
	                color:#e8621a !important;
	            }
	
	            .wikiEditor-ui-toolbar .booklet > .index > :not(.current) {
	                background-color:transparent !important;
	            }
	
	            .wikiEditor-ui-toolbar .page-table th,
	            .wikiEditor-ui-toolbar .page-table td {
	                color:white !important;
	            }
	
	            .ͼ1.cm-focused {
	                outline:0 !important;
	            }
	
	            .cm-content {
	                caret-color:white !important;
	            }
	
	            .codeEditor-ui-toolbar .booklet > .index > .current {
	                background-color: transparent !important;
	                color:#e8621a !important;
	            }
	
	            .codeEditor-ui-toolbar .booklet > .index > :not(.current) {
	                background-color:transparent !important;
	            }
	
	            .codeEditor-ui-toolbar .page-table th,
	            .wikiEditor-ui-toolbar .page-table td {
	                color:white !important;
	            }
	
	            div.wikiEditor-ui-toolbar.codeEditor-ui-toolbar {
	                background-color:#37393b !important;
	                color:#e8621a !important;
	                fill:#e8621a !important;
	            }
	            
	            .global-explore-navigation__nav, .global-explore-navigation#global-explore-navigation {
	            	max-width:66px;
	            }
	            
	            .global-explore-navigation__panel-item {
	            	position:fixed;
	            	left:3px;
	            }
	            
	            .page__main {
	            	resize:horizontal !important;
	            }
	            
	            .wds-collapsible-panel.wds-is-collapsed .wds-collapsible-panel__header .wds-icon {
	    			-webkit-transform: none !important;
					transform: none !important;
				}
				
				.wds-collapsible-panel__header .wds-icon {
	    			transform: none !important;
	    			transition: none !important;
				}
				
				.ve-init-mw-editSwitch {
					display:none;
				}
	        </style>
	    `);
	    $('#mw-content-text>hr').remove();
		$('#mw-content-text>p').each(function(){
			$(this).remove();
		});
		$('.ace_text-input').each(function(){
			$(this).removeAttr('readonly');
		});
		$('.permissions-errors').append('<br>');
		if (window.location.pathname.includes('.js')) {
			$('.ace_text-input').removeAttr('readonly');
		}
	
		/*
    (function() {
			function ariabypass() {
			if (location.search.includes('veaction=edit')) {
				$('[aria-disabled="true"]').attr('aria-disabled', 'false');
			}
		}
	
			ariabypass();
			setTimeout(ariabypass, 2500);
		})();
		*/
		});
	}

	});
	
	var backupFetch = (url, obj = null) => {
		fetch(url, obj);
	};
	
	fetch = (url, obj) => {
		if (url === '' || (url.includes('services.fandom.com') && JSON.stringify(obj).includes(''))) return;
		backupFetch(url, obj);
	};
});



/*
archived
$(() => {
	  'use strict';
	  if (window.favWikiaLoaded) return;
	
	  const currentWikia = window.location.host.replace(/.fandom.com/g, '');
	
	  const parent = '.page__main';
	  $(parent).prepend('<div class="wikiafavorites"></div>');
	  for (let i = 0; i < window.favWikias.length; i++) 
	  {
	    let language = '';
	    if (window.favWikias[i].lang && window.favWikias[i].lang !== 'en' && !/\d/.test(window.favWikias[i].lang))
	    {
	       language = '/' + window.favWikias[i].lang;
	    }
	  $('.wikiafavorites').append(
	    `<span data-fav="` + window.favWikias[i].name.toLowerCase() + `" data-lang="`+ window.favWikias[i].lang +`"><a href="https://`+window.favWikias[i].name.toLowerCase() + '.fandom.com' + language + '/wiki/' + window.favWikias[i].page + `" class="wds-button">` + window.favWikias[i].text + `</a></span>`
	  );
	}
	$('span[data-fav]').each(function() 
	{
	  if($(this).attr('data-fav') === currentWikia && (mw.config.get('wgArticlePath').includes($(this).attr('data-lang')) || ($(this).attr('data-lang') === 'en' && mw.config.get('wgArticlePath') === '/wiki/$1')))
	  {
	    $('.wikiafavorites').prepend($(this));
	    $(this).attr('class', 'currentwikia');
	    $('.currentwikia').append('<span class="wds-button"><p></p></span>');
	    $('.currentwikia span>p').text($('.currentwikia a').text());
	    $('.currentwikia a').remove();
	  }
	});
	$('[data-fav]').children(':not(.currentwikia)').first().find('a').addClass('first');
	mw.loader.addStyleTag( `
		.wikiafavorites {
    display:flex;
    flex-wrap:nowrap;
    max-width:60vw;
    height:30px;
    position:absolute;
    top:0;
    left:0;
    zoom:0.8;
    z-index:200;
}

[data-fav]>span.wds-button {
    cursor:default;
    filter:brightness(1);
    border-color:var(--theme-page-background-color--secondary);
    color:white !important;
}

.wikiafavorites .wds-button {
    background:transparent;
    color:var(--theme-link-color);
    border-left:0;
    border-right:0;
    border-top:0;
    padding:5px;
    font-size:0.7rem !important;
    border-color:var(--theme-page-background-color--secondary);
    border-radius:0 !important;
}

.wikiafavorites .wds-button:not(:last-child) {
    border-right:0;
}

.wikiafavorites > span:last-child > .wds-button {
	border-right:0.5px solid var(--theme-page-background-color--secondary);
} 

.currentwikia>.wds-button {
    border-bottom:transparent;
    border-right: 0.5px solid var(--theme-page-background-color--secondary) !important;
}

.currentwikia p {
zoom:120%;
}
.wikiafavorites {
    -webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-o-user-select: none;
	user-select: none;
}
` );
window.favWikiaLoaded = true;
});
*/
