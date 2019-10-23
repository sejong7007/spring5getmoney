package com.getmoney5.web.lambda;

import com.getmoney5.web.customer.Customer;

public class GenericTest {
	
	static class Box<T> {
		T item;
		void setItem(T item) {
			this.item = item;
		}
		T getItem() {
			return item;
		}
	}

	public static void main(String[] args) {
		GenericTest s = new GenericTest();
		GenericTest.Box<String> s2 = new GenericTest.Box<>();
		GenericTest.Box<Integer> s3 = new GenericTest.Box<>();
		GenericTest.Box<Customer> ubox = new GenericTest.Box<>();
	}

}
