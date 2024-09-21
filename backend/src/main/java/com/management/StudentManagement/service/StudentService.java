package com.management.StudentManagement.service;

import com.management.StudentManagement.model.Student;
import com.management.StudentManagement.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentService {


    @Autowired
    StudentRepo repo;

    public List<Student> findAllStudent() {
        return repo.findAll();
    }

    public Student findbyId(int id) {
        return repo.findById(id).orElse(new Student());
    }

    public void add(Student student) {
        repo.save(student);
    }


    public void delete(int id) {
        repo.deleteById(id);
    }

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student getStudentById(int id) {
        return repo.findById(id).orElse(null);
    }

    public void addStudent(Student student) {
        repo.save(student);
    }

    public void updateStudent(Student student) {
        repo.save(student);
    }

    public void deleteStudent(int id) {
        repo.deleteById(id);
    }
}
