package com.management.StudentManagement.repository;

import com.management.StudentManagement.model.StaffLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface LoginRepo extends JpaRepository<StaffLogin, Integer> {


    @Query(value = "SELECT password FROM staff_login WHERE id = :id", nativeQuery = true)
    String password(@Param("id") Long id);

}
