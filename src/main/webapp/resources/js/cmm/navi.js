"use strict"
var navi = navi || {}

navi = (()=>{
	
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	
	let _, js, css, img, navi_js, brd_vue_js, brd_js, auth_js, auth_vue_js;
	
	let init = ()=>{
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		navi_js=js+'/cmm/navi.js'
		brd_vue_js=js+'/vue/brd_vue.js'
		auth_vue_js=js+'/vue/auth_vue.js'
		brd_js = js+'/brd/brd.js'
		auth_js = js+'/cmm/auth.js'
	}
	
	let onCreate = ()=>{
		init()
		$.when(
				$.getScript(brd_js),
				$.getScript(auth_js),
				$.getScript(brd_vue_js),
				$.getScript(auth_vue_js)
		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView = ()=>{
		
		$('<a>',{
	       	href : '#',
	       	click : e =>{
	       				e.preventDefault()
	       				$.getScript(brd_js, ()=>{
	       					brd.write()
	       				})
	       			},
			text : '글쓰기'
		})
		.addClass('nav-link')
		.appendTo('#go_write')
		
		$('<a>',{
	       	href : '#',
			text : '로그아웃'
		})
		.addClass('nav-link')
		.appendTo('#go_logout')
		.click(e=>{
			e.preventDefault()
			alert('로그아웃 클릭')
			deleteCookie()
			app.run(_)
		})
	}
	
	
	return {onCreate}
	
})();