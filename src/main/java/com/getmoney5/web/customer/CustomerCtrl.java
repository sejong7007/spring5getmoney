package com.getmoney5.web.customer;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.getmoney5.web.cmm.IConsumer;
import com.getmoney5.web.cmm.IFunction;
import com.getmoney5.web.cmm.IPredicate;
import com.getmoney5.web.utl.Printer;

@RestController
@RequestMapping("/customer")

public class CustomerCtrl {

	private static final Logger logger = LoggerFactory.getLogger(CustomerCtrl.class);
	@Autowired Map<String , Object> map;
	@Autowired Customer cus;
	@Autowired Printer printer;
	@Autowired CustomerMapper customerMapper;

	@GetMapping("/{mid}/checkId")
	public Map<?,?> checkId(@PathVariable String mid){
		IFunction<String, Integer> p = o -> customerMapper.existId(mid);
		map.clear();
		map.put("msg", (p.apply(mid)==0) ? "SUCCESS" : "FAIL");
		return map;
	}
	
	
	@PostMapping("/")
	public Map<?,?> join(@RequestBody Customer param) {
		logger.info("AJAX가 보낸 아이디와 비번{}",param.getMid() +", "+param.getMpw()+", "+param.getMname());
		IConsumer<Customer> c = t -> customerMapper.insertCustomer(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
    @PostMapping("/{mid}")
    public Customer login(@PathVariable String mid, @RequestBody Customer param) {
         IFunction<Customer, Customer> f = t -> customerMapper.selectByIdPw(param);
         return f.apply(param);
    }
    
    @GetMapping("/{mid}")
    public Customer searchCustomerById(@PathVariable String mid, @RequestBody Customer param) {
    	IFunction<Customer, Customer> f = t -> customerMapper.selectByIdPw(param);
        return f.apply(param);
    }

    @PutMapping("/{mid}")
    public Customer updateCustomerById(@PathVariable String mid, @RequestBody Customer param) {
    	IFunction<Customer, Customer> f = t -> customerMapper.selectByIdPw(param);
        return f.apply(param);
    }
    
    @DeleteMapping("/{mid}")
    public Customer deleteCustomerById(@PathVariable String mid, @RequestBody Customer param) {
    	IFunction<Customer, Customer> f = t -> customerMapper.selectByIdPw(param);
        return f.apply(param);
    }
    
}





