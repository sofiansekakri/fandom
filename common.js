(() => {
	if(window.customConsoleLoaded) return;
	window.customConsoleLoaded = true;
	const backupConsole = { log: console.log, error: console.error, info: console.info, warn: console.warn, debug: console.debug};
	console.log = (...args) => {
		$('#output>div').append(($('#output>div>span').length+1)+'. <span>'+args+ '</span><br>');
		return backupConsole.log(...args);
	};
	console.error = (...args) => {
		$('#output>div').append(($('#output>div>span').length+1)+'. <span style="color:red;">'+args+ '</span><br>');
		return backupConsole.error(...args);
	};
	
	console.info = (...args) => {
		$('#output>div').append(($('#output>div>span').length+1)+'. <span style="color:#D3D3D3;">[INFO] '+args+ '</span><br>');
		return backupConsole.info(...args);
	};
	
	console.warn = (...args) => {
		$('#output>div').append(($('#output>div>span').length+1)+'. <span style="color:#fff49b;">'+args+ '</span><br>');
		return backupConsole.warn(...args);
	};
	
	console.debug = (...args) => {
		$('#output>div').append(($('#output>div>span').length+1)+'. <span>[DEBUG] '+args+ '</span><br>');
		return backupConsole.debug(...args);
	};
	$('.main-container').append(`<div id="customconsole" style="border-radius:2px;background:var(--theme-page-background-color);color:var(--theme-page-text-color);position:fixed;top:30vh;right:40vh;z-index:600;width:400px;border:1px solid var(--theme-page-background-color--secondary) !important;"><h1 id="customdevtools-toggle" style="font-weight:bold;padding:14px 20px 20px;border:1px solid var(--darkreader-bg--theme-page-background-color--secondary) !important;z-index:601 !important;"><center><span style="color:var(--darkreader-text--theme-link-color) !important;cursor:pointer;">SHOW CONSOLE</span></center></h1><div id="customconsole-main" style="padding:16px 22px 22px;display:none;height:100%;"></div></div>`);
	$('#customconsole-main').append(`
	<div id="output" style="background-color:black;font:14px Consolas,Eupheima UCAS,Monaco,Menlo,monospace;height:65%;width:100%;color:white;border:1px solid white;overflow-y:scroll;padding:10px;z-index:601 !important;">
		<div style="border-left:2px solid white;height:auto;min-height:100%;position:relative;padding-left:4px;"></div>
	</div>
	<div class="wds-input wds-input--outlined" style="margin-bottom:3px;margin-top:10px;">  
    <textarea class="wds-input__field" id="consoleExec" name="wds_input" type="text" placeholder="console.log('hi');"></textarea>
	</div>  
	<div>
	<a class="wds-button" id="runCode" style="margin-right:5px;">Run</a>
	<a class="wds-button" id="clearText" style="margin-right:5px;">Clear</a>
	<a class="wds-button" id="emptyConsole">reset output</a>
	</div>
	`);
	$('#customdevtools-toggle>center>span').click(function() {
		if ($(this).attr('data-open') !== 'true') {
			$('#customconsole').css('height', '630px');
			$('#customconsole-main').css('display', 'block');
			$(this).attr('data-open', 'true');
			$(this).text('HIDE');
		} else {
			$('#customconsole').css('height', 'auto');
			$('#customconsole-main').css('display', 'none');
			$(this).attr('data-open', 'false');
			$(this).text('SHOW CONSOLE');
		}
	});
	let d = false, ox = 0, oy = 0;
	$("#customconsole").mousedown(function(e){
		d=true; ox=e.clientX-this.offsetLeft; oy=e.clientY-this.offsetTop;
		$('body').addClass('unselectable');
		$('#customdevtools-toggle').css('pointer-events', 'none');
	});
	
	$(document).mousemove(function(e){
		if(d) $("#customconsole").css({left:e.clientX-ox, top:e.clientY-oy});
	});
	
	$(document).mouseup(function(){
		d=false;
		$('body').removeClass('unselectable');
		$('#customdevtools-toggle').css('pointer-events', 'auto');
	});
	
	$('#output>div>span').each(function() {
		$(this).click(function() {
			navigator.clipboard.writeText($(this).text());
		});
	});
	
	$('a.wds-button#runCode').click(() => {
		$('body').append($('<script>').text($('.wds-input.wds-input--outlined>textarea.wds-input__field#consoleExec').val()));
		$('.wds-input.wds-input--outlined>textarea.wds-input__field#consoleExec').val('');
	});
	
	$('a.wds-button#clearText').click(() => {
		$('.wds-input.wds-input--outlined>textarea.wds-input__field#consoleExec').val('');
	});
	
	$('a.wds-button#emptyConsole').click(() => {
		$('#output>div').text('');
	});
	
	$('body').append(`<style>
	.unselectable {
		-webkit-user-select: none !important;       
		-moz-user-select: none !important; 
		-ms-user-select: none !important; 
		user-select: none !important;
	}
	#customdevtools-toggle:hover {
		pointer-events: auto !important;
	}
	
	#customconsole:has(#output:hover) {
	pointer-events:none;
	}
	
	div#output:hover {
		pointer-events:auto !important;
		z-index:99999 !important;
	}
	
	.tempinput {
		opacity:0 !important;
	}
	</style>`);
})();
