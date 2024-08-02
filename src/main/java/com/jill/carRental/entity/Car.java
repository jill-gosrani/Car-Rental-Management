package com.jill.carRental.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Car {

    @Id
    private int carID;
    private String carNumber;
    private String carName;
    private String carModel;
    private String type;
    private double price;
}