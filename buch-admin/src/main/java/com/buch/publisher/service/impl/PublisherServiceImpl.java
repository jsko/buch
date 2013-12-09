package com.buch.publisher.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.buch.publisher.dao.PublisherDao;
import com.buch.publisher.model.PublisherVo;
import com.buch.publisher.service.PublisherService;

@Service(value="publisherService")
public class PublisherServiceImpl  implements PublisherService{

	
	@Autowired
	private PublisherDao dao;
	@Override
	public int insert(PublisherVo m) {
		return dao.insert(m);
	}

	@Override
	public int count(PublisherVo m) {
		return dao.count(m);
	}

	@Override
	public List<PublisherVo> listPublisher(int page, int rows) {
		return dao.listPublisher(page, rows);
	}

	@Override
	public int goodsUpdate(PublisherVo m) {
		return dao.goodsUpdate(m);
	}

}
