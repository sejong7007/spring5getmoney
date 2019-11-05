package com.getmoney5.web.brd;

import java.util.Arrays;
import java.util.List;
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
import org.springframework.web.bind.annotation.RestController;

import com.getmoney5.web.cmm.IConsumer;
import com.getmoney5.web.cmm.ISupplier;
import com.getmoney5.web.pxy.Proxy;
import com.getmoney5.web.pxy.ProxyMap;
import com.getmoney5.web.utl.Printer;


@RestController
@RequestMapping("/articles")
public class ArticleCtrl {

	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	
	@Autowired Map<String, Object> Articlemap;
	@Autowired Article art;
	@Autowired Printer printer;
	@Autowired ArticleMapper artMapper;
	@Autowired List<Article> list;
	@Autowired Proxy pxy;
	@Autowired ProxyMap map ;
		
	@PostMapping("/")
	public Map<?,?> writeArticle(@RequestBody Article param){
		printer.accept("글쓰기 들어옴");
		IConsumer<Article> c = t -> artMapper.insertArticle(param); 
		c.accept(param);
		ISupplier<String> s = ()->artMapper.countArticle();
		map.accept(Arrays.asList("msg","count"), Arrays.asList("SUCCESS", s.get()));
		
		/*Articlemap.clear();
		Articlemap.put("msg","SUCCESS");
		printer.accept("글쓰기 나감"+Articlemap.get("msg"));*/
		
		return map.get();
	}
	
	@GetMapping("/page/{pageNo}/size/{pageSize}")
	public Map<?,?> listArt(@PathVariable String pageNo, @PathVariable String pageSize){
		pxy.setPageNum(pxy.parseInt(pageNo));
		pxy.setPageSize(pxy.parseInt(pageSize));
		pxy.paging();
		list.clear();
		ISupplier<List<Article>> s = () -> artMapper.selectAll(pxy);
		
		map.accept(Arrays.asList("articles", "pages"),Arrays.asList(s.get(), Arrays.asList(1,2,3,4,5))) ;
		
		/*Articlemap.clear();
		Articlemap.put("articles", s.get());
		Articlemap.put("pages", Arrays.asList(1,2,3,4,5));*/
		
		return map.get();
	}
	
	@PutMapping("/")
	public Map<?,?> updateArticle(@RequestBody Article param){
		printer.accept("글 수정 요청 : "+param.getArtseq()+", "+param.getTitle()+", "+param.getContent());
		IConsumer<Article> c = t -> artMapper.updateByArtseq(param);
		c.accept(param);
		map.accept(Arrays.asList("msg"), Arrays.asList("SUCCESS"));
		
		/*Articlemap.clear();
		Articlemap.put("msg", "SUCCESS");*/
		
		return map.get();
	}
	
	@DeleteMapping("/")
	public Map<?,?> deleteArticle(@RequestBody Article param){
		printer.accept("글 삭제 요청"+param.getArtseq());
		IConsumer<Article> c = t -> artMapper.deleteById(param);
		c.accept(param);
		map.accept(Arrays.asList("msg"), Arrays.asList("SUCCESS"));
		
		/*Articlemap.clear();
		Articlemap.put("msg", "SUCCESS");*/
		
		return map.get();
	}
	
	@GetMapping("/countArt")
	public Map<?,?> countArt() {
		ISupplier<String> s = () -> artMapper.countArticle();
		
		/*Articlemap.clear();
		Articlemap.put("count", s.get());*/
		
		map.accept(Arrays.asList("count"), Arrays.asList(s.get()));
		return map.get();
	}
	

	
	
}
