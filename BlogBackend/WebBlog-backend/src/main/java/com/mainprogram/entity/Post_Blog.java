package com.mainprogram.entity;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//Mapping với database
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Post")
public class Post_Blog {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;
 
 @Column(name="name_Blog")
 private String name_Blog;
 
 @Column(name="name_Title")
 private String name_Title;
 
 @Column(name="content_")
 private String content_;

 @Column(name="main_Image")
 private String main_Image;
 
 @Column(name="category_Menu")
 private String category_Menu;
 
 @Column(name="user_id_")
 private int user_id_;
 
 @Column(name = "created_at",nullable = false)
 @Temporal(TemporalType.TIMESTAMP)
 @CreationTimestamp
 private Date created_at;
 
 
}
