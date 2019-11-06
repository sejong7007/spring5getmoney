"use strict";
var brd = brd || {};
brd = (()=>{

	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	
	let _, js, css, img, brd_vue_js, navi_js, navi_vue_js, page_vue_js, compo_vue_js;
	
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		brd_vue_js = js+'/vue/brd_vue.js'
		navi_js = js+'/cmm/navi.js'
		navi_vue_js = js+'/vue/navi_vue.js'
		page_vue_js = js+'/vue/page_vue.js'
		compo_vue_js = js+'/vue/compo_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
				$.getScript(brd_vue_js),
				$.getScript(navi_js),
				$.getScript(navi_vue_js),
				$.getScript(page_vue_js),
				$.getScript(compo_vue_js)
		).done(()=>{
			setContentView()
			navi.onCreate()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =()=>{
			$('head').html(brd_vue.brd_head({css: $.css(), img: $.img()}))
	        $('body').addClass('text-center')
	        		 .html(brd_vue.brd_body({cxt: '/web', css: $.css(), img: $.img()}))
	        $(navi_vue.navi_body()).appendTo('#snavi_vue')
	        recent_update({page : '1', size : '5'})
	}
	
	let recent_update=x=>{
		$('#recent_updates .media').remove()
		$('#suggestions').remove()
        $('#recent_updates .d-block').remove()
        $('#recent_updates .container').remove()
        $.getJSON(_+'/articles/page/'+x.page+'/size/'+x.size, d=>{
        	alert('getJSON 성공')
        	$.each(d.articles, (i,j)=>{
        		$('<div class="media text-muted pt-3">'+
			      '	<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
			      '          <p id="id_'+i+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			      '			</p></div>')
			    .appendTo('#recent_updates')
			    $('<strong class="d-block text-gray-dark">@<a>'+j.mid+'</a></strong>')
			    .appendTo("#id_"+i)
			    .click(()=>{
							alert('아이디 클릭 ')
				})
				$('<a>'+j.title+'</a>')
				.appendTo("#id_"+i)
				.click(()=>{
				     		alert('제목 클릭')
				     		detail(j)
				     })
	        })
	        $(page_vue.pagination()).appendTo('#recent_updates')
	        $('#pagination').empty()
	        
	        $('<form id="listSizeSelectDiv2" class="form-inline my-2 my-lg-0" action="/action_page.php">'+
	    			'  <select name="site" size="1">'+
	    			'  </select>'+
	    			'</form>')
	    	.prependTo('#recent_updates div.container')
	        
	        $.each([{sub:'5개보기', val: '5'},
	        		{sub:'10개보기', val: '10'},
	        		{sub:'15개보기', val:'15'}],(i,j)=>{
	        	$('<option value='+j.val+'>'+j.sub+'</option>')
	        	.appendTo('#listSizeSelectDiv2 select')
	        })
	        
	        $('#listSizeSelectDiv2 option[value="'+d.pxy.pageSize+'"]').attr('selected',true)
	        $('#listSizeSelectDiv2').change(()=>{
	        	alert('선택한 보기 : '+ $('#listSizeSelectDiv2 option:selected').val())
	        	recent_update({page : '1', size : $('#listSizeSelectDiv2 option:selected').val()})
	        })
	        
	        if(d.pxy.existPrev){
	        	$('<li class="page-item"><a class="page-link" href="#">Previous</a></li>')
	        	.appendTo('#pagination')
	        	.click(()=>{
	        		let nextpage = d.pxy.startPage - 1
	        		alert('이전 블럭으로 이동'+nextpage)
	        		recent_update({page : nextpage, size : '5'})	        	
	        })
	        }

	        $.each(d.pages,(i,j)=>{
	        	$('<li class="page-item"><a class="page-link" href="#">'+j+'</a></li>')
	        	.appendTo('#pagination')
	        	.click(()=>{
	        		alert(j+'페이지 이동')
	        		recent_update({page : j, size : '5'})
	        	})
	        })
	        
	        if(d.pxy.existNext){
	        $('<li class="page-item"><a class="page-link" href="#">Next</a></li>')
	        .appendTo('#pagination')
	        .click(()=>{
	        	let nextpage = d.pxy.endPage + 1
	        	alert('다음 블럭으로 이동'+nextpage)
        		recent_update({page : nextpage, size : '5'})	        	
	        })
	        }
	        
	        $('#pagination').css({'justify-content' : 'center'})
	        $('#listSizeSelectDiv2 select').css({'margin-inline-start': 'auto'})
	        
	        $('#recent_updates h2').remove()

        })
	}
	
	let write =()=>{
		alert('글쓰기 클릭 ')
		$('#recent_updates').html(brd_vue.write())
		$('#suggestions').remove()
		$('#bbsubmit input[name="writer"]').val(getCookie("USERID"))
		
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
            			mid : $('#bbsubmit input[name="writer"]').val(),
            			title : $('#bbsubmit input[name="title"]').val(),
            			content : $('#bbsubmit textarea[name="content"]').val()
            			}),
        			dataType : 'json',
        			contentType : 'application/json',
        			success : d => {
        				alert('AJAX 성공')
        				$('#recent_updates div.container-fluid').remove()
        				recent_update({page : '1', size : '5'})
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
        		$('#recent_updates div.container-fluid').remove()
				recent_update({page : '1', size : '5'})
        	})
	}
		
	let detail =x=> {
		
		$('#recent_updates').html(brd_vue.write())
		$('#suggestions').remove()
		$('#bbsubmit input[name="writer"]').val(x.mid)
		$('#bbsubmit input[name="title"]').val(x.title)
		$('#bbsubmit textarea').val(x.content)
		
		$('<input>', {
        	style : "float:right;width:100px;margin-right:10px",
			value : "수정"
		})
		.addClass('btn btn-primary')
		.appendTo('#bbsubmit')
		.click( e => {
        		e.preventDefault()
        		$.ajax({
        			url : _+'/articles/',
        			type : 'PUT',
        			data : JSON.stringify({
            			artseq : x.artseq,
            			title : $('#bbsubmit input[name="title"]').val(),
            			content : $('#bbsubmit textarea[name="content"]').val()
            			}),
        			dataType : 'json',
        			contentType : 'application/json',
        			success : d => {
        				alert('선택하신 글이 수정되었습니다.')
        				$('#recent_updates div.container-fluid').remove()
        				recent_update({page : '1', size : '5'})
        			},
        			error : e => {
        				alert('AJAX 실패')
        			}
        		})
        	})
		
		$('<input>', {
        	type : "reset",
        	style : "float:right;width:100px;margin-right:10px",
			value : "삭제"
		})
		.addClass('btn btn-danger')
		.appendTo('#bbsubmit')
		.click( e => {
			e.preventDefault()
			$.ajax({
				url : _+'/articles/',
				type : 'DELETE',
				data : JSON.stringify({
	    			artseq : x.artseq,
	    			}),
				dataType : 'json',
				contentType : 'application/json',
				success : d => {
					alert('선택하신 글이 삭제되었습니다.')
					$('#recent_updates div.container-fluid').remove()
					recent_update({page : '1', size : '5'})
				},
				error : e => {
					alert('AJAX 실패')
				}
			})
		})
	}
	
	return {onCreate, write}
	
})();