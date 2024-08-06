package com.jill.carRental.entity;

import io.micrometer.common.lang.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
// insert into car (car_model, car_name, car_number, price, type, is_available, is_insured, insurance_type) values ('Anniversary Edition', 'Ertiga', 'MH 04 9641', 1500000.0, 'SUV'), ('Basic', 'Ritz', 'MH 03 9641', 500000.0, 'COMPACT', );


@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int carID;
    private String carNumber;
    private String carName;
    private String carModel;
    private String type;
    private double price;
    private boolean isAvailable;
    private boolean isInsured;
    @Nullable
    private String insuranceType;

}
