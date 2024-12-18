
package com.mainprogram.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import java.util.Arrays;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
@Configuration
@EnableWebSecurity
public class WebsecurityConfig {
	
	public class SecurityConfiguration {
		@Bean
		public	CorsConfigurationSource corsConfigurationSource(){
			
		    CorsConfiguration config= new CorsConfiguration();
		    config.setAllowCredentials(true);
		  //  config.addAllowedOrigin("http://e-commerceweb.s3-website-ap-northeast-1.amazonaws.com/");
		    config.addAllowedOrigin("http://localhost:3000/");
		    config.setAllowedHeaders(Arrays.asList(
					org.springframework.http.HttpHeaders.AUTHORIZATION,
					org.springframework.http.HttpHeaders.CONTENT_TYPE,
					org.springframework.http.HttpHeaders.ACCEPT
					));
			config.setAllowedMethods(Arrays.asList(
					HttpMethod.POST.name(),
					HttpMethod.GET.name(),
					HttpMethod.PUT.name(),
					HttpMethod.DELETE.name()		
					));
			config.setMaxAge(3600L);

		    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		    source.registerCorsConfiguration("/**", config);
		    return source;
		}
	    @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	    	
	    	http.cors(c -> c.configurationSource(corsConfigurationSource()))
					.csrf(AbstractHttpConfigurer::disable)
					.sessionManagement(c -> c.sessionCreationPolicy(
					SessionCreationPolicy.STATELESS))
	    			.authorizeHttpRequests(req -> req
	    			
					.requestMatchers(HttpMethod.POST, "/PostCreateEdit").permitAll()
					
					//.requestMatchers(HttpMethod.GET,"/product/{producName}/{nameImage}","/product/allProductData").permitAll()
					//.requestMatchers(HttpMethod.DELETE,"/product/deleteProduct/{id}").permitAll()
					//.anyRequest().authenticated());
					.anyRequest().permitAll());
	    			return http.build();
	    }

	}
}



