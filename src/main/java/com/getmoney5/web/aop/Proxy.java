package com.getmoney5.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Connection.Response;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class Proxy {

	private int pageNum; 
	private String search;
	
	//@Autowired List<String> proxyList;
	
	public List<?> crawl(Map<?,?> paramMap){
		List<String> proxyList = new ArrayList<>();
		String url = "http://"+paramMap.get("site")+".co.kr";
		proxyList.clear();
		try {
			Connection.Response response = Jsoup.connect(url)
												.method(Connection.Method.GET)
												.execute();
			Document document = response.parse();
			String text = document.html();
			System.out.println("크롤링한 텍스트 : "+text);
			proxyList.add(text);
		}catch(Exception e2) {
			e2.printStackTrace();
		}
		
		return proxyList;
	}
}
