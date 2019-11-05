var compo_vue = compo_vue || {}

compo_vue = {
		pageSize : ()=>{
			return '<div id="listSizeSelectDiv" class="select_component2" style="width: 80px">'+
			//'    <a href="#" onclick="nhn.search.toggleBoxLayer('listSizeSelectDiv');return false;" class="select_box">15개씩</a>'+
			'      <ul class="select_list">'+
			'        <li>'+
			'    		<a href="#">5개씩</a>'+
			'        </li>'+
			'      </ul>'+
			'</div>'
		}
}