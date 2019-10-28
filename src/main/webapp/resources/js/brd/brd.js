"use strict";
var brd = brd || {};
brd = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, brd_vue_js, router_js, smname, smid;
	let init =()=> {
		_=$.ctx()
		js=$.js()
		smname=$.smname()
		smid=$.smid()
		brd_vue_js=js+'/vue/brd_vue.js'
		router_js=js+'/cmm/router.js'
	}
	
	let onCreate =()=>{
		init()
 		$.getScript(brd_vue_js).done(()=>{
 		 		setContentView()
 				navigation()
 				 }	
 		)
	}
	
	let setContentView =()=>{
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
	        $('body').addClass('text-center')
	        		 .html(brd_vue.brd_body({css: $.css(), img: $.img()}))
	        $('#recent_updates .media').remove()
	        $('#recent_updates .d-block').remove()
	        $('#recent_updates').append(smname+'<h1>등록된 글이 없습니다.</h1>')
	}
	
	let write =()=>{
		alert('글쓰기 클릭')
		$('#recent_updates').html(brd_vue.write())
		$('#suggestions').remove()
		$('#bbsubmit input[name="writer"]').val(smname)
		
		$('<input>', {
        	type : "submit",
        	style : "float:right;width:100px;margin-right:10px",
			value : "SUBMIT"
		})
		.addClass('btn btn-primary')
		.appendTo('#bbsubmit')
		.click( e => {
        		e.preventDefault()
        		$.ajax({
        			url : _+'/articles/',
        			type : 'POST',
        			data : JSON.stringify({
            			mid : smid,
            			title : $('#bbsubmit input[name="title"]').val(),
            			content : $('#bbsubmit textarea[name="content"]').val()
            			}),
        			dataType : 'json',
        			contentType : 'application/json',
        			success : d => {
        				alert('AJAX 성공')
        			},
        			error : e => {
        				alert('AJAX 실패')
        			}
        		})
        	})
		
		$('<input>', {
        	type : "reset",
        	style : "float:right;width:100px;margin-right:10px",
			value : "CANCEL"
		})
		.addClass('btn btn-danger')
		.appendTo('#bbsubmit')
		.click( e => {
        		e.preventDefault()
        		alert('취소되었습니다.')
        		setContentView()
        		navigation()
        	})
	}
	
	let navigation = ()=>{
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
	
	return {onCreate}
	
})();