package com.example.GroceryMart.controller;

import com.example.GroceryMart.model.Grocery;
import com.example.GroceryMart.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/groceries")
public class GroceryController {

    @Autowired
    private GroceryService service;

    @GetMapping
    public List<Grocery> getAllGroceries() {
        return service.getAll();
    }

    @PostMapping
    public Grocery addGrocery(@RequestBody Grocery grocery) {
        return service.addGrocery(grocery);
    }
}
