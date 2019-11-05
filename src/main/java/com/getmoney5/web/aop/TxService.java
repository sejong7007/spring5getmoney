package com.getmoney5.web.aop;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.getmoney5.web.pxy.Proxy;

@Transactional
@Service
public class TxService {

	@Autowired TxMapper mapper;
	@Autowired Proxy pxy;
	//@Autowired List<String> txServiceList;

	@SuppressWarnings("unchecked")
	public List<?> crawling(Map<?,?> paramMap){
		List<String> txServiceList = new ArrayList<>();
		txServiceList.clear();
		txServiceList = (List<String>) pxy.crawl(paramMap);
		return null;		
	}
}
