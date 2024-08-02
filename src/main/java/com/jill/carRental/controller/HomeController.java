package com.jill.carRental.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class HomeController {

    @GetMapping("/test")
    public String test(){
        return "This is test";
    }
    
}
