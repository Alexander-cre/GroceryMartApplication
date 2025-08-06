package com.example.GroceryMart.service;

import com.example.GroceryMart.model.Grocery;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GroceryService {
    private List<Grocery> groceryList = new ArrayList<>();

    public List<Grocery> getAll() {
        return groceryList;
    }

    public Grocery addGrocery(Grocery grocery) {
        groceryList.add(grocery);
        return grocery;
    }
}
