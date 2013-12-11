package com.example.jqgrid.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.jqgrid.domain.Employee;
import com.example.jqgrid.domain.EmployeesJson;
import com.example.jqgrid.service.EmployeeService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
		
	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(value = {"/", "/index"}, method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		return "index";
	}
	
	@RequestMapping(value = "read", method = RequestMethod.GET)
	public void read(@RequestParam(value = "_search")Boolean _search, 
			@RequestParam(value = "page")Integer page, 
			@RequestParam(value = "rows")Integer rows, 
			@RequestParam(value = "sidx")String sidx, 
			@RequestParam(value = "sord")String sord,
			@RequestParam(value = "searchField", required = false)String searchField,
			@RequestParam(value = "searchString", required = false)String searchString,
			@RequestParam(value = "searchOper", required = false)String searchOper,
			HttpServletResponse response) throws IOException {

		// 테이블에 저장된 전체 레코드의 갯수를 계산한다.
		int records = employeeService.getTotalRecord(_search, searchField, searchString, searchOper);
		
		// 전체 페이지 수를 계산한다.
		int total = 0;
		if(records > 0) {
			total = (int)Math.ceil(records / (double)rows.intValue());
		} 
		
		// 표시 할 페이지가 마지막 페이지를 초과하면, 마지막 페이지를 표시한다.
		if(page.intValue() > total) page = total;
		
		List<Employee> employees = employeeService.selectEmployees(_search, page, rows, 
				sidx, sord, searchField, searchString, searchOper);

		EmployeesJson employeesJson = new EmployeesJson();
		employeesJson.setTotal(total);
		employeesJson.setPage(page);
		employeesJson.setRecords(records);
		employeesJson.setRows(employees);
		
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		PrintWriter writer = response.getWriter();
		Gson gson = new GsonBuilder().setDateFormat("yyyy/MM/dd").create();
		String json = gson.toJson(employeesJson);
		writer.write(json);
		writer.flush();
		writer.close();
		
	}
}
