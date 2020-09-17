package com.statistics.core.config;

import com.statistics.core.logging.GetRequestHandlerInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

  private GetRequestHandlerInterceptor getRequestHandlerInterceptor;

  @Autowired
  public WebMvcConfig(GetRequestHandlerInterceptor getRequestHandlerInterceptor) {
    this.getRequestHandlerInterceptor = getRequestHandlerInterceptor;
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(getRequestHandlerInterceptor);
  }
}