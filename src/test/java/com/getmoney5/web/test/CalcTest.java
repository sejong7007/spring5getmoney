package com.getmoney5.web.test;

public class CalcTest {

	public static void main(String[] args) {
		
		int totalCount = 31;
		int pagesize = 5;
		int pageCount = 0;
		
		pageCount = (totalCount%pagesize==0)? totalCount/pagesize : totalCount/pagesize+1 ;
		
		System.out.println(pageCount);
		
	}

}
