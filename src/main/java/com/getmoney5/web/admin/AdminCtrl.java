package com.getmoney5.web.admin;

import org.slf4j.LoggerFactory;

import java.util.Map;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.getmoney5.web.cmm.IFunction;

@RestController
@RequestMapping("/admins")
public class AdminCtrl {

	private static final Logger logger = LoggerFactory.getLogger(AdminCtrl.class);
	
	@Autowired Map<String, Object> map;
	@Autowired Admin admin;
	@Autowired AdminMapper adMapper;
	
	@PostMapping("/{aid}")
	public Map<?,?> access(@PathVariable String aid, @RequestBody Admin param){
		System.out.println("들어옴.");
		IFunction<Admin, Admin> f = t -> adMapper.selectByIdPw(param);
		System.out.println(param.getAid());
		String result = (f.apply(param)!=null)?"SUCCESS":"FAIL";
		map.clear();
		map.put("msg", result);
		return map;
	}
	
	
	
	
}
