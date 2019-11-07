package com.getmoney5.web.pxy;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.getmoney5.web.brd.ArticleMapper;
import com.getmoney5.web.cmm.ISupplier;

import lombok.Data;

@Component
@Data
@Lazy
public class Proxy {
	
	private int pageNum, pageSize, startRow, endRow, startPage, endPage, nextPage, prePage ;
	private boolean existPrev, existNext;
	private final int BLOCK_SIZE = 5;
	private List<Integer> pages;
	private String search;
	
	@Autowired ArticleMapper artMapper;
	
	@SuppressWarnings("unused")
	public void paging() {
		ISupplier<String> s = ()-> artMapper.countArticle();
		int totalCount = Integer.parseInt(s.get());
		int pageCount = (totalCount%pageSize==0)? totalCount/pageSize : totalCount/pageSize+1 ;
		startRow = (pageNum-1) * pageSize ;
		//endRow = (pageNum == pageCount)? (totalCount % pageSize) : pageSize ;
		endRow = (pageNum == pageCount) ? totalCount-1 : startRow+pageSize-1 ;
		int blockCount = (pageCount%BLOCK_SIZE==0)? pageCount/BLOCK_SIZE : (pageCount/BLOCK_SIZE)+1 ;
		int blockNum = (pageNum-1) / BLOCK_SIZE;
		startPage = blockNum * BLOCK_SIZE + 1 ;
		endPage = (blockCount != (blockNum+1))? startPage + BLOCK_SIZE - 1 : pageCount ;
		existPrev = (blockNum!=0);
		existNext = ((blockNum+1)!=blockCount);
		/*pages = new ArrayList<>();
		for( int i=startPage; i<endPage+1 ; i++) {
			pages.add(i);
		}*/
		
		nextPage = startPage+BLOCK_SIZE;
		prePage = startPage-BLOCK_SIZE;
		
	}
	
	public int parseInt(String param) {
		Function<String, Integer> f = s -> Integer.parseInt(s);
		return f.apply(param);
	}
	
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

	public int random(int a, int b) {
		BiFunction<Integer, Integer, Integer> f = (x , y) -> (int)(Math.random()*(y-x))+x; 
		return f.apply(a, b);
	}
	
	
	
}
