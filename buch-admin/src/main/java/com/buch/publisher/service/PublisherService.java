package com.buch.publisher.service;

import java.util.List;

import com.buch.publisher.model.PublisherVo;

public interface PublisherService {
	public int insert(PublisherVo m ) ;
	public int count(PublisherVo m) ;
	public List<PublisherVo> listPublisher(int page, int rows) ;
	public int goodsUpdate(PublisherVo m);
}
