"use strick"
var admin = admin || {}

admin = (()=>{
	
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
		
	let _, js, css, img, brd_vue_js, navi_vue_js, navi_js
	
	let init = ()=>{
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		brd_vue_js = js+'/vue/brd_vue.js'
		navi_js = js+'/cmm/navi.js'
		navi_vue_js = js+'/vue/navi_vue.js'
		
	}
	
	let onCreate = ()=>{
		alert('관리자 화면으로 이동합니다.')
		init()
		$.when(
			$.getScript(brd_vue_js),
			$.getScript(navi_js),
			$.getScript(navi_vue_js)
		).done(()=>{
			setContentView()
			//navi.onCreate()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		
		$('head').html('<head>'+
				'<meta charset="utf-8">'+
			    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
				'    <meta name="description" content="">'+
				'    <meta name="author" content="">'+
			    '<link rel="icon" href="https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico">'+
				'    <title>Offcanvas template for Bootstrap</title>'+
				'    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">'+
				'    <!-- Bootstrap core CSS -->'+
			    '<link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">'+
				'    <!-- Custom styles for this template -->'+
				'    <link href="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
				'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'+
				'  </head>')
		//$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))		

		$('body').html(navi_vue.navi_body({cxt: '/web', css: $.css(), img: $.img()}))
		
		/*$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        		 .html(brd_vue.brd_body({cxt: '/web', css: $.css(), img: $.img()}))
        $(navi_vue.navi_body()).appendTo('#snavi_vue')*/
		
		$('<table id="customers">'+
		'  <tr>'+
		'		<th>Company</th>'+
		'		<th>Contact</th>'+
		'  		<th>Country</th>'+
		'	</tr>'+
		'</table>').appendTo($('body'))
		
	}
	
	return {onCreate}
	
})();