package com.jill.carRental.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jill.carRental.entity.Car;
import com.jill.carRental.repository.CarRepo;


@Service
public class CarService {

    @Autowired
    private CarRepo carRepo;

    public List<Car> getAllCars(){
        return carRepo.findAll();
    }

    public Car getCarById(int carID){
        return carRepo.findById(carID).orElse(null);
    }

    public String addCar(Car car) {
        carRepo.save(car);
        return "OK";
    }

    
}