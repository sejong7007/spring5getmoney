"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, auth_vue_js, brd_js, router_js;
	let init =()=> {
		_=$.ctx();
		js=$.js();
		auth_vue_js=js+'/vue/auth_vue.js'
		brd_js = js+'/brd/brd.js'
		router_js=js+'/cmm/router.js'
	}
	
	let onCreate =()=>{
		init();
		$.when(
			$.getScript(auth_vue_js)
		).done(()=>{
			setContentView()
			$('#a_go_join').click(e=>{
				e.preventDefault()
				$('head').html(auth_vue.join_head())
				$('body').html(auth_vue.join_body())
				$('#customerid').keyup(()=>{
					if($('#customerid').val().length > 2) {
						$.ajax({
					    	url : _+'/customer/'+$('#customerid').val()+'/checkId',
					    	type : 'GET',
					    	success : d => {
					    		alert('AJAX 성공'+d.msg)
					    		if(d.msg==='SUCCESS')
					    			$('#dupl-check')
					    			.val('사용가능한 아이디 입니다.')
					    			.css('color','blue')
					    		else
					    			$('#dupl-check')
					    			.val('이미 사용중인 아이디 입니다.')
					    			.css('color','red')
					    	},
					    	error : e => {
					    		alert('AJAX 실패')
					    	}
				    	})
					}
				});
			$('<button>',{
					text : '회원가입',
					href : '#',
					click : e=>{
							e.preventDefault();
							let data = {
			            			mid : $('#customerid').val(), 
			            			mpw : $('#password').val(),
			            			mname : $('#username').val()
			            			}
							join(data)
						}
				})
				.addClass('btn btn-primary btn-lg btn-block')
				.appendTo('#b_join_success')
			})
		})
	}
		
	let setContentView =()=>{
		$('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(auth_vue.login_body({css: $.css(), img: $.img()}))
		login()
	}
	
    let join =(x)=>{
            	let jdata = {
            			mid : x.mid, 
            			mpw : x.mpw,
            			mname : x.mname
            			}
            	alert('전송되는 데이터 : '+ jdata.mid + jdata.mpw + jdata.mname)
                $.ajax({
			    	url : _+'/customer/',
			    	type : 'POST',
			    	dataType : 'json',
			    	data : JSON.stringify(jdata),
			    	contentType : 'application/json',
			    	success : d => {
			    		alert('AJAX 성공')
			    		$('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
				        $('body').addClass('text-center')
				        .html(auth_vue.login_body({css: $.css(), img: $.img()}))
			    		login()
			    	},
			    	error : e => {
			    		alert('AJAX 실패')
			    	}
            	})
            }
    
    
    let login =()=>{
        $('<button>',{
        	type : "submit",
        	text : "로그인",
        	click : e => {
        		e.preventDefault()
                $.ajax({
                	url : _+'/customer/login',
                	type : 'POST',
                	data : JSON.stringify({
                		mid : $('#loginmid').val(), 
                		mpw : $('#loginmpw').val()
                	}), 
                	dateType : 'json',
                	contentType : 'application/json',
                	success : d => {
                		$.when(
                			$.getScript(brd_js, $.extend(new CusData(d))),
                			$.getScript(router_js)		
                		).done(()=>{
                			alert(d.mid+d.mpw+d.mname+' , '+$.smid()+$.smpw()+$.smname())
                			brd.onCreate()
                		})
                		.fail(()=>{
                			alert(WHEN_ERR)
                		})
                	},
                	error : e => {
                		alert('AJAX ERROR')
                	}
                })
        	}
        })
        .addClass('btn btn-lg btn-primary btn-block')
        .appendTo('#btn_login')
    }
        
    let existId =(x)=> {
    	$.ajax({
	    	url : _+'/customer/'+x.mid+'/checkId',
	    	type : 'GET',
	    	success : d => {
	    		alert('AJAX 성공'+d.msg)
	    		if(d.msg==='SUCCESS')
	    			alert('사용가능한 아이디 입니다.')
	    		else
	    			alert('아이디가 중복됨.')
	    	},
	    	error : e => {
	    		alert('AJAX 실패')
	    	}
    	})
    }
    
	return {onCreate, join, login}	
	
})();

