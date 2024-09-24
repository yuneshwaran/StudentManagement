package com.management.StudentManagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.Date;

@Entity
@Component
@Scope("prototype")
public class StaffLogin {

    @Id
    private int id;
    private Date dob;
    private String password;

    public void setId(int id) {
        this.id = id;
    }


    public int getId() {
        return id;
    }

    public Date getDob() {
        return dob;
    }
}
