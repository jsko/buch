package com.buch.common;

import java.util.List;
import java.util.Map;

public class JsonObjectVO {
	private int total;
	private int page;
	private int records;
//	private List<Map<Object, Object>> rows = null;
	private List rows = null;
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
	public List getRows() {
		return rows;
	}
	public void setRows(List rows) {
		this.rows = rows;
	}
}
