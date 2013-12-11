package com.example.jqgrid.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.example.jqgrid.domain.Employee;

@Repository
public class EmployeeDaoImpl implements EmployeeDao {

	@Resource
	private SqlSessionTemplate sqlSessionTemplate;
	
	@Override
	public int getTotalRecord(Map<String, String> map) {
		// TODO Auto-generated method stub
		return sqlSessionTemplate.selectOne("com.example.jqgrid.mybatis.EmployeesMapper.getTotalRecord", map);
	}

	@Override
	public List<Employee> selectEmployees(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return sqlSessionTemplate.selectList("com.example.jqgrid.mybatis.EmployeesMapper.selectEmployees", map);
	}

}
