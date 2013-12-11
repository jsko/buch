package com.example.jqgrid.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.jqgrid.dao.EmployeeDao;
import com.example.jqgrid.domain.Employee;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;
	
	@Override
	@Transactional(readOnly = true)
	public int getTotalRecord(boolean _search, String searchField, String searchString, String searchOper) {
		// TODO Auto-generated method stub
		Map<String, String> map = new HashMap<String, String>();
		if(_search) {
			String condition = getCondition(searchField, searchString, searchOper);
			map.put("condition", condition);
		}
		return employeeDao.getTotalRecord(map);
	}

	@Override
	public List<Employee> selectEmployees(boolean _search, int page, int rows,
			String sidx, String sord, String searchField, String searchString,
			String searchOper) {
		// TODO Auto-generated method stub
		Map<String, Object> map = new HashMap<String, Object>();
		
		int start = rows * page - rows;
		map.put("start", start);
		
		int stop = rows * page;
		map.put("stop", stop);
		
		map.put("sidx", sidx);
		map.put("sord", sord);
		
		if(_search) {
			String condition = getCondition(searchField, searchString, searchOper);
			map.put("condition", condition);
		}
		
		return employeeDao.selectEmployees(map);
	}
	
	private String getCondition(String searchField, String searchString, String searchOper) {
		// TODO Auto-generated method stub
		
		// like 연산자에서는 조건의 상수 값이 문자열이든 숫자든 홑따옴표로 감싸야 한다.
		if(searchOper.equals("bw")) {
			return searchField + " like '" + searchString + "%'";
		} else if(searchOper.equals("bn")) {
			return searchField + " not like '" + searchString + "%'";
		} else if(searchOper.equals("ew")) {
			return searchField + " like '%" + searchString + "'";
		} else if(searchOper.equals("en")) {
			return searchField + " not like '%" + searchString + "'";
		} else if(searchOper.equals("cn")) {
			return searchField + " like '%" + searchString + "%'";
		} else if(searchOper.equals("nc")) {
			return searchField + " not like '%" + searchString + "%'";
		}

		try {
			Double.parseDouble(searchString); 	// 조건절의 상수값이 숫자인지 문자열인지 구분해야 한다.
		} catch(NumberFormatException e) {
			searchString = "'" + searchString + "'";
		}
		
		if(searchOper.equals("eq")) {
			return searchField + " = " + searchString;
		} else if(searchOper.equals("ne")) {
			return searchField + " <> " + searchString;
		} else if(searchOper.equals("lt")) {
			return searchField + " < " + searchString;
		} else if(searchOper.equals("le")) {
			return searchField + " <= " + searchString;
		} else if(searchOper.equals("gt")) {
			return searchField + " > " + searchString;
		} else if(searchOper.equals("ge")) {
			return searchField + " >= " + searchString;
		} else if(searchOper.equals("in")) {
			return searchField + " in (" + searchString + ")";
		} else if(searchOper.equals("ni")) {
			return searchField + " not in (" + searchString + ")";
		}
		
		return null;
	}

}
