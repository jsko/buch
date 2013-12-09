package com.buch.publisher.dao.impl;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.buch.publisher.dao.PublisherDao;
import com.buch.publisher.model.PublisherVo;

@Repository(value="publisherDao")
public class PublishDaoImpl implements PublisherDao{

	@Autowired
	private SqlSession session;
	
	@Override
	public int insert(PublisherVo vo) {
		return session.insert("SqlPublisherMapper.publisherInsert", vo);
	}

	@Override
	public int count(PublisherVo vo) {
		return session.selectOne("SqlPublisherMapper.publisherCount");
	}

	@Override
	public List<PublisherVo> listPublisher(int page, int rows) {
		HashMap<String , Integer> map = new HashMap<String , Integer>();
		map.put("param1", new Integer(rows));
		map.put("param2", new Integer(page));
		
		return session.selectList("SqlPublisherMapper.publisherList", map);
	}

	@Override
	public int goodsUpdate(PublisherVo vo) {
		return session.update("SqlPublisherMapper.publisherUpdate", vo);
	}

}
