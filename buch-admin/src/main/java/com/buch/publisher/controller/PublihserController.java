package com.buch.publisher.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.buch.common.JsonObjectVO;
import com.buch.publisher.model.PublisherVo;
import com.buch.publisher.service.PublisherService;

@Controller(value="publisherController")
public class PublihserController {
	
	private static final Logger logger =LoggerFactory.getLogger(PublihserController.class);
	@Autowired
	private PublisherService publisherservice;
	
	@RequestMapping(value="/pub/main" )
	public  String publisherList(Model model, HttpServletRequest request,PublisherVo m ,HttpSession session) throws Exception {
		System.out.println("/pub/main");    
		return "pub.pubmain";
	}
	@RequestMapping(value="/publisher/publisher.buch" )
	public  void publisherList1(Model model, HttpServletRequest request,PublisherVo m ,HttpSession session) throws Exception {
		System.out.println("/publisher/publisher.buch");    
		
	}
	@RequestMapping("/publisher/publisherListData.buch")
	public @ResponseBody Object publisherListData(
			@RequestParam(value = "page", required=false) String page,
		    @RequestParam(value = "rows", required=false) String rows,
		    @RequestParam(value = "sidx", required=false) String sidx,
		    @RequestParam(value = "sord", required=false) String sord,
		    Model model, HttpServletRequest request,PublisherVo m ,HttpSession session) {
		System.out.println("/publisher/publisherListData.buch ");
		int _page = Integer.parseInt(page);
		int _rows = Integer.parseInt(rows);
		
		System.out.println("publisherListData : " + page + " " + rows + " " + sidx + " " + sord + " ");
		int count  = publisherservice.count(m);
		int totalPage = 0;
		if(count > 0 ){
			totalPage = (int) Math.ceil(count/_rows) + 1;
		}
		
		if (_page > totalPage) 
			_page = totalPage;
		
		if(_rows < 0)
			_rows = 0;
		
		int start = _page * _rows - _rows;
		if(start < 0)
			start = 0;
		
		List<PublisherVo> list = publisherservice.listPublisher(start, _rows);
		

		JsonObjectVO vo = new JsonObjectVO();
		vo.setTotal(totalPage);
		vo.setPage(_page);
		vo.setRecords(count);
		vo.setRows(list);
		return vo;
	}
}
