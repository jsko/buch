package com.example.jqgrid.dao;

import java.util.List;
import java.util.Map;

import com.example.jqgrid.domain.Employee;

public interface EmployeeDao {
	public int getTotalRecord(Map<String, String> map);
	public List<Employee> selectEmployees(Map<String, Object> map);
}
