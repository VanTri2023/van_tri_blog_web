package com.mainprogram.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mainprogram.entity.Post_Blog;

@Repository
public interface PostRepository extends JpaRepository<Post_Blog, Integer> {
	
}
