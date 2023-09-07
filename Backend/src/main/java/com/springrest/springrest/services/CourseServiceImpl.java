package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	//List<Course> list;
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(1, "Java Core", "This course contains of basics of Java"));
//		list.add(new Course(2, "Spring boot", "Creating REST API using Spring boot"));
	}

	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
		//return list;
	}

	@Override
	public Course getCourse(long courseId) {
		return courseDao.findById(courseId).get();
//		Course c = null;
//		for(Course course: list) {
//			if(course.getId()==courseId) {
//				c = course;
//				break;
//			}
//		}
//		return c;
	}

	@Override
	public Course addCourse(Course course) {
//		list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
//		for(Course c: list) {
//			if(c.getId() == course.getId()) {
//				c.setTitle(course.getTitle());
//				c.setDescription(course.getDescription());
//			}
//		}
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		Course entity = courseDao.findById(courseId).get();
		courseDao.delete(entity);
//		list = this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
	}
}
