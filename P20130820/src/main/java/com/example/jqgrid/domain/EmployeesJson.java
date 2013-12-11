package com.example.jqgrid.domain;

import java.util.List;

public class EmployeesJson {

	private int total;		// 전체 페이지 수
	private int page;		// 표시할 페이지 수
	private int records;	// 전체 레코드 갯수
	private List<Employee> rows;
	
	public EmployeesJson() {}

	public EmployeesJson(int total, int page, int records,
			List<Employee> employees) {
		this.total = total;
		this.page = page;
		this.records = records;
		this.rows = employees;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getRecords() {
		return records;
	}

	public void setRecords(int records) {
		this.records = records;
	}

	public List<Employee> getRows() {
		return rows;
	}

	public void setRows(List<Employee> employees) {
		this.rows = employees;
	};

}
