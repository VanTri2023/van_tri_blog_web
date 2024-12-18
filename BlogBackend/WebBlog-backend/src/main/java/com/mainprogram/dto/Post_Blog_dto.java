package com.mainprogram.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Post_Blog_dto {
	private int id;
	private String nameBlog;
	private String nameTitle;
	private MultipartFile mainImage;
	private String categoryMenu;
	private String newBlogContent;
	
}
