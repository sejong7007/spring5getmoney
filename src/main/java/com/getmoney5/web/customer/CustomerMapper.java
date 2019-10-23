package com.getmoney5.web.customer;

import org.springframework.stereotype.Repository;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer cus);
	public Customer selectByIdPw(Customer cus);
}
