package com.example.demo.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name",defaultValue = "world") String name) {
        return String.format("Hello, %s!", name);
    }

}
