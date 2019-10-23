package com.getmoney5.web.customer;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	private String mid, mpw, mname, email, phonenum, birth, tooja, registerDate, tier;
}
