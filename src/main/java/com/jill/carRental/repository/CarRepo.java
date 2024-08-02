package com.jill.carRental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jill.carRental.entity.Car;

@Repository
public interface CarRepo extends JpaRepository<Car, Integer>{

    
} 