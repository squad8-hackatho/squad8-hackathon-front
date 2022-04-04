package com.fcamara.technicalshare.user;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {

    public List<User> getUsers() {
        String name = "test";
        String email = "test@test.com";
        String bio = "Oi sou um usuário de teste!";
        return List.of(
                new User(name, email, bio)
        );
    }
}
