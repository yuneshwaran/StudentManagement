package com.management.StudentManagement.repository;

import com.management.StudentManagement.model.StaffLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface LoginRepo extends JpaRepository<StaffLogin, Integer> {


    @Query(value = "SELECT FORMAT(dob, 'dd-MM-yyyy') AS dob FROM staff_login WHERE id = :id", nativeQuery = true)
    String findFormattedDobById(@Param("id") Long id);


    StaffLogin findById(@Param("id") int id);


}
