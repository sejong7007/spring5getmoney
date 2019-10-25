"use strict";
var brd = brd || {};
brd = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, brd_vue_js, router_js, sejongtest;
	let init =()=> {
		_=$.ctx()
		js=$.js()
		sejongtest=$.smname()
		brd_vue_js=js+'/vue/brd_vue.js'
		router_js=js+'/cmm/router.js'
		
	}
	
	let onCreate =()=>{
		init()
 		$.getScript(brd_vue_js).done(()=>{
 		 		setContentView()
 				$('<a>',{
 				       	href : '#',
 				       	click : e =>{
 				       				e.preventDefault()
 				       				write()},
 						text : '글쓰기'
 				})
 				.addClass('nav-link')
 				.appendTo('#go_write')
 				 }	
 		)
	}
	
	let setContentView =()=>{
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
	        $('body').addClass('text-center')
	        		 .html(brd_vue.brd_body({css: $.css(), img: $.img()}))
	        $('#recent_updates .media').remove()
	        $('#recent_updates .d-block').remove()
	        $('#recent_updates').append(sejongtest+'<h1>등록된 글이 없습니다.</h1>')
	}
	
	let write =()=>{
		alert('글쓰기 클릭')
		$('#recent_updates').html(brd_vue.write())
		$('#suggestions').remove()
		
		$('#s_writername').val(sejongtest)
	}
	
	return {onCreate}
	
})();