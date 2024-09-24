package com.management.StudentManagement.service;

import com.management.StudentManagement.repository.StaffRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffService {

    @Autowired
    private StaffRepo staffRepo;

    public String getFormattedDob(Long id) {
        return staffRepo.password(id);
        }


}
