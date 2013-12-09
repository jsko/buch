package com.buch.common;

public class CommonVo {
	private int pageNo;
	private int page;
	private int row;
	private String sord;
	private String bizSection;

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	public String getSord() {
		return sord;
	}

	public void setSord(String sord) {
		this.sord = sord;
	}

	public int getPageNo() {
		return pageNo;
	}

	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	@Override
	public String toString() {
		return "CommonVo [pageNo=" + pageNo + ", page=" + page + ", row=" + row
				+  ", sord=" + sord + "]";
	}

	public String getBizSection() {
		return bizSection;
	}

	public void setBizSection(String bizSection) {
		this.bizSection = bizSection;
	}
}