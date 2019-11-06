package com.getmoney5.web.test;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Crawler {

	public static void main(String[] args) {
		try {
			Document rawData = Jsoup.connect("https://finance.naver.com/item/main.nhn?code=005930").timeout(10*1000).get();
			Elements number = rawData.select("p[id=krx_per]");
			Elements  tltle = rawData.select("p[class=tltle]");
			List<String> number2 = new ArrayList<>();
			List<String> title2 = new ArrayList<>();
			for(Element e : number) {
				number2.add(e.text());
			}
			for(Element e : tltle) {
				title2.add(e.text());
			}
			System.out.println(number2);
			System.out.println("-----------------------");
			System.out.println(title2);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	/*public static void main(String[] args) {
		String url = "http://google.co.kr";
		try {
			Connection.Response response = Jsoup.connect(url)
					.method(Connection.Method.GET)
					.execute();
			Document document = response.parse();
			String text = document.text();
			System.out.println(text);
			
		}catch(Exception e2) {
			e2.printStackTrace();
		}
	}*/
}
