package com.jill.carRental.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.jill.carRental.entity.Car;
import com.jill.carRental.service.CarService;


@RestController("cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/")
    public List<Car> getAllCars(){
        return carService.getAllCars();
    }

    @GetMapping("/{carID}")
    public Car getCarById(@PathVariable int carID){
        return carService.getCarById(carID);
    }

    @PostMapping("/add/")
    public String addCar(@RequestBody Car car){
        return carService.addCar(car);
    }
    
}
