package com.management.StudentManagement.service;

import com.management.StudentManagement.model.StaffLogin;
import com.management.StudentManagement.repository.LoginRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffLoginService {

    @Autowired
    private LoginRepo loginRepo;

    public String getFormattedDob(Long id) {
        System.out.println("Service Called");
        return loginRepo.findFormattedDobById(id);
        }

    public StaffLogin findbyId(int id) {
        return loginRepo.findById(id);
    }

}
