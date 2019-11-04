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
		
	@PostMapping("/")
	public Map<?,?> writeArticle(@RequestBody Article param){
		printer.accept("글쓰기 들어옴");
		IConsumer<Article> c = t -> artMapper.insertArticle(param); 
		c.accept(param);
		Articlemap.clear();
		Articlemap.put("msg","SUCCESS");
		printer.accept("글쓰기 나감"+Articlemap.get("msg"));
		return Articlemap;
	}
	
	@GetMapping("/{pageNo}")
	public Map<?,?> listArt(@PathVariable String pageNo){
		list.clear();
		ISupplier<List<Article>> s = () -> artMapper.selectAll();
		Articlemap.clear();
		Articlemap.put("articles", s.get());
		Articlemap.put("pages", Arrays.asList(1,2,3,4,5));
		return Articlemap;
	}
	
	@PutMapping("/")
	public Map<?,?> updateArticle(@RequestBody Article param){
		printer.accept("글 수정 요청 : "+param.getArtseq()+", "+param.getTitle()+", "+param.getContent());
		IConsumer<Article> c = t -> artMapper.updateByArtseq(param);
		c.accept(param);
		Articlemap.clear();
		Articlemap.put("msg", "SUCCESS");
		return Articlemap;
	}
	
	@DeleteMapping("/")
	public Map<?,?> deleteArticle(@RequestBody Article param){
		printer.accept("글 삭제 요청"+param.getArtseq());
		IConsumer<Article> c = t -> artMapper.deleteById(param);
		c.accept(param);
		Articlemap.clear();
		Articlemap.put("msg", "SUCCESS");
		return Articlemap;
	}
	
	@GetMapping("/countArt")
	public Map<?,?> countArt() {
		ISupplier<String> s = () -> artMapper.countArticle();
		Articlemap.clear();
		Articlemap.put("count", s.get());
		return Articlemap;
	}
	

	
	
}
