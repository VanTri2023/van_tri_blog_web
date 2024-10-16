package com.mainprogram.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mainprogram.dto.PostBlog_dtoForTest;
import com.mainprogram.dto.Post_Blog_dto;
import com.mainprogram.entity.Post_Blog;
import com.mainprogram.repository.PostRepository;

@Service
public class PostService {
	private final PostRepository postRepository ;
	
	@Autowired
	public PostService(PostRepository postRepository) {
		super();
		this.postRepository = postRepository;
	}

	// save new post from UI to DB
	public void SavePostsContentToDB(Post_Blog_dto postblog_dto) {
			
		Post_Blog post_Blog = new Post_Blog();
		post_Blog.setName_Blog(postblog_dto.getNameBlog());
		post_Blog.setName_Title(postblog_dto.getNameTitle());
		post_Blog.setMain_Image(postblog_dto.getMainImage().getOriginalFilename());
		post_Blog.setCategory_Menu(postblog_dto.getCategoryMenu());
		post_Blog.setContent_(postblog_dto.getNewBlogContent());
		
		postRepository.save(post_Blog);
	}

	//get all post from db 
	public List<Post_Blog> getAllPostFromDB() {
		List<Post_Blog> postBlogList = postRepository.findAll();
		
		return postBlogList;
	}

	public void deletePost(int id) throws Exception {
		
		postRepository.findById(id).orElseThrow(() -> new Exception("Not found Post: " + id)); 
		postRepository.deleteById(id);
		
	}

	public Post_Blog getPostbyId(int id)  {
		//Optional<Post_Blog> postBlogOptional = postRepository.findById(id);
		//Post_Blog post_Blog = postBlogOptional.get();
		Optional<Post_Blog> postBlogOptional = postRepository.findById(id);
	    if (postBlogOptional.isPresent()) {
	        return postBlogOptional.get();
	    } else {
	        throw new NoSuchElementException("No Post_Blog found with ID: " + id);
	    }
	
	}

	public void updatePostContent(int id, PostBlog_dtoForTest postblog_dto_forTest) throws Exception {
		Post_Blog existingPost = postRepository.findById(id).orElseThrow(() -> new Exception("Post not found for this id :: " + id));

	    // Cập nhật các trường mới
	    existingPost.setName_Blog(postblog_dto_forTest.getNameBlog());
	    existingPost.setName_Title(postblog_dto_forTest.getNameTitle());
	    existingPost.setMain_Image(postblog_dto_forTest.getMainImage());
	    existingPost.setCategory_Menu(postblog_dto_forTest.getCategoryMenu());
	    existingPost.setContent_(postblog_dto_forTest.getNewBlogContent());

	    // Lưu vào database
	    postRepository.save(existingPost);
		
	}

}
