package com.management.StudentManagement.repository;

import com.management.StudentManagement.model.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepo extends JpaRepository<Staff, Integer> {


    @Query(value = "SELECT password FROM staff WHERE id = :id", nativeQuery = true)
    String password(@Param("id") Long id);

}
