"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, auth_vue_js, brd_vue_js;
	let init =()=> {
		_=$.ctx();
		js=$.js();
		auth_vue_js=js+'/vue/auth_vue.js';
		brd_vue_js=js+'/vue/brd_vue.js'
	}
	
	let onCreate =()=>{
		init();
		$.getScript(auth_vue_js).done(()=>{
			setContentView()
			$('#a_go_join').click(e=>{
				e.preventDefault()
				$('head').html(auth_vue.join_head())
				$('body').html(auth_vue.join_body())
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
								existId(data)
						}
				})
				.addClass('btn btn-primary btn-lg btn-block')
				.appendTo('#b_join_success')
			})
		})
	}
		
	let setContentView =()=>{
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
			    		login()
			    	},
			    	error : e => {
			    		alert('AJAX 실패')
			    	}
            	})
            }
    
    
    let login =()=>{
    	let x = {css: $.css(), img: $.img()}
    	$('head').html(auth_vue.login_head(x))
        $('body').addClass('text-center')
        .html(auth_vue.login_body(x))
        $('<button>',{
        	type : "submit",
        	text : "로그인",
        	click : e => {
        		e.preventDefault()
        		let datat = {mid : $('#loginmid').val(), mpw : $('#loginmpw').val()}
            	alert('전송되는 데이터 : '+ datat.mid + datat.mpw)
                $.ajax({
                	url : _+'/customer/login',
                	type : 'POST',
                	data : JSON.stringify(datat), 
                	dateType : 'json',
                	contentType : 'application/json',
                	success : d => {
                		alert(d.mname+'님 환영합니다.')
                		mypage(d)
                	},
                	error : e => {
                		alert('AJAX ERROR')
                	}
                })
        	}
        })
        .addClass("btn btn-lg btn-primary btn-block")
        .appendTo('#btn_login')
    }

    let mypage =(d)=>{ 
    	
    	let x = {
    			mid : d.mid,
    			mpw : d.mpw,
    			mname : d.mname
    	}
    	
    	$.getScript(brd_vue_js).done(()=>{
			$('head').html(brd_vue.brd_head(x))
			$('body').html(brd_vue.brd_body(x))	
		}).fail(()=>{alert(WHEN_ERR)})
    }
    
    let existId =(x)=> {
    	$.ajax({
	    	url : _+'/customer/'+x.mid+'/checkId',
	    	type : 'GET',
	    	success : d => {
	    		alert('AJAX 성공'+d.msg)
	    		if(d.msg==='SUCCESS')
	    			join(x)
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

