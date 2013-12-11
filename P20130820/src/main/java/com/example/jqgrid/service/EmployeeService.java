package com.example.jqgrid.service;

import java.util.List;

import com.example.jqgrid.domain.Employee;

public interface EmployeeService {
	public int getTotalRecord(boolean _search, String searchField, String searchString, String searchOper);
	public List<Employee> selectEmployees(boolean _search, int page, int rows,
			String sidx, String sord, String searchField, String searchString, String searchOper);
}
