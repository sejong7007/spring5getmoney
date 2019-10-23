package com.getmoney5.web.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/*import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;*/

@Configuration
@MapperScan(basePackages = { "com.getmoney5.web" })
@ComponentScan(basePackages = { "com.getmoney5.web" })
public class RootConfig {

	public DataSource dataSource() {
		
/*		HikariConfig hikariConfig = new HikariConfig();
		hikariConfig.setDriverClassName("com.mysql.jdbc.Driver");
		hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/getmoney?serverTimezone=UTC");
		hikariConfig.setUsername("getmoney");
		hikariConfig.setPassword("getmoney");
		
		HikariDataSource dataSource = new HikariDataSource(hikariConfig);
		
		return dataSource;
	}*/
	
		  DriverManagerDataSource dataSource = new DriverManagerDataSource();

		    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		    dataSource.setUrl("jdbc:mysql://localhost:3306/getmoney?serverTimezone=UTC");
		    dataSource.setUsername("getmoney");
		    dataSource.setPassword("getmoney");

		    return dataSource;
	}
	
	@Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
      SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
      factoryBean.setDataSource(dataSource());
      return factoryBean.getObject();
    }
    
    @Bean
    public SqlSessionTemplate sqlSession() throws Exception {
      return new SqlSessionTemplate(sqlSessionFactory());
    }
	
	
	
	
}
