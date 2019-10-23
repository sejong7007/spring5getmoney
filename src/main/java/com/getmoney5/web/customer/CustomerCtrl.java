package com.getmoney5.web.customer;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.getmoney5.web.cmm.IConsumer;
import com.getmoney5.web.cmm.IFunction;
import com.getmoney5.web.utl.Printer;

@RestController
@RequestMapping("/customer")

public class CustomerCtrl {

	private static final Logger logger = LoggerFactory.getLogger(CustomerCtrl.class);
	@Autowired Map<String , Object> map;
	@Autowired Customer cus;
	@Autowired Printer printer;
	@Autowired CustomerMapper customerMapper;
		
	@PostMapping("/")
	public String join(@RequestBody Customer param) {
		logger.info("AJAX가 보낸 아이디와 비번{}",param.getMid() +", "+param.getMpw()+", "+param.getMname());
		IConsumer<Customer> c = t -> customerMapper.insertCustomer(param);
		c.accept(param);
		return "success";
	}
	
    @PostMapping("/login")
    public Customer login(@RequestBody Customer param) {
         IFunction<Customer, Customer> f = t -> customerMapper.selectByIdPw(param);
         return f.apply(param);
    }
}





