package com.fcamara.technicalshare.user;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {

    public List<User> getUsers() {
        String name = "test";
        String email = "test@test.com";
        return List.of(
                new User(name, email)
        );
    }
}
