package com.buch.publisher.dao;

import java.util.List;

import com.buch.publisher.model.PublisherVo;

public interface PublisherDao {
	
	public int insert(PublisherVo vo ) ;
	public int count(PublisherVo vo);
	public List<PublisherVo> listPublisher(int page, int rows);
	public int goodsUpdate(PublisherVo vo);

}
