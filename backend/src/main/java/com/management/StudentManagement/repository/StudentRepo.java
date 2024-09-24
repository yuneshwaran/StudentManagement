package com.management.StudentManagement.repository;

import com.management.StudentManagement.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {

    @Query(value = "select FORMAT(dob,'dd-MM-yyyy') as dob from student where id = :id", nativeQuery = true)
    String findFormattedDobById(@Param("id") int id);

}
