package com.mainprogram.controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mainprogram.dto.PostBlog_dtoForTest;
import com.mainprogram.dto.Post_Blog_dto;
import com.mainprogram.entity.Post_Blog;
import com.mainprogram.service.PostService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;


@RestController
@RequiredArgsConstructor
public class PostController {
	@Autowired
	private PostService postService;
	@GetMapping("/")
	
	public String helloString () {
		return "hello";
	}
	//-----------------------------POST---------------------------------------------------------------------		
	//create new blog
	@PostMapping(path = "/PostCreateEdit",
			consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> createOrEditBlog(@ModelAttribute Post_Blog_dto postblog_dto) {
		postService.SavePostsContentToDB(postblog_dto);
		return ResponseEntity.ok("OK");
		
	}
	
	//Update Post Content by ID
	// Update Post Content by ID
	@PutMapping(path = "/UpdatePostContent/{id}",
	        consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> updatePostContent(@PathVariable int id, @ModelAttribute PostBlog_dtoForTest postblog_dto_forTest) throws Exception {
	    postService.updatePostContent(id, postblog_dto_forTest);
	    return ResponseEntity.ok("Post updated successfully");
	}
	
	
//-----------------------------GET---------------------------------------------------------------------	
	//Get all post 
	@GetMapping ("/GetPostList_All")
	public ResponseEntity<?> getAllPosts(){
		List<Post_Blog> posts_datafromDB = postService.getAllPostFromDB();
		
		List<PostBlog_dtoForTest> postdto_test = new ArrayList<>();
		for (Post_Blog postBlog : posts_datafromDB) {
			PostBlog_dtoForTest posts = new PostBlog_dtoForTest(postBlog.getId(),postBlog.getName_Blog(),postBlog.getName_Title(),
					postBlog.getMain_Image(), postBlog.getCategory_Menu(), postBlog.getContent_());
			postdto_test.add(posts);
		}
		return new ResponseEntity<>(postdto_test,HttpStatus.OK);
	}
	
	@GetMapping ("/GetPostByID/{id}")
	public ResponseEntity<PostBlog_dtoForTest> getPostByID(@PathVariable int id) {
		Post_Blog post_Blog = postService.getPostbyId(id);
		
		PostBlog_dtoForTest postBlog_dtoForTest = new PostBlog_dtoForTest();
		postBlog_dtoForTest.setId(post_Blog.getId());
		postBlog_dtoForTest.setNameBlog(post_Blog.getName_Blog());
		postBlog_dtoForTest.setNameTitle(post_Blog.getName_Title());
		postBlog_dtoForTest.setMainImage(post_Blog.getMain_Image());
		postBlog_dtoForTest.setCategoryMenu(post_Blog.getCategory_Menu());
		postBlog_dtoForTest.setNewBlogContent(post_Blog.getContent_());
		
		return ResponseEntity.ok().body(postBlog_dtoForTest);
	}
	
//-----------------------------DELETE---------------------------------------------------------------------	
	@DeleteMapping("/deletePost/{id}")
	public ResponseEntity<String> deletePost(@PathVariable("id") int id) throws Exception{
		postService.deletePost(id);
		return ResponseEntity.ok("Delete successfully!!");
	}
	
}
