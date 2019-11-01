package com.getmoney5.web.admin;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.getmoney5.web.customer.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Lazy
@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
	private String aid, apw, aname, anum, arank, email, phonenum;
}
