package com.getmoney5.web.brd;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class Article {

	private String artseq, title, content, mid, artType ;
	
}
