package com.example.ormlearn;

import com.example.ormlearn.model.Country;
import com.example.ormlearn.service.CountryService;
import com.example.ormlearn.service.exception.CountryNotFoundException;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class OrmLearnApplication {

    private static CountryService countryService;
    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
        testSearchCountry();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        countries.forEach(c -> LOGGER.debug("Country: {}", c));
        LOGGER.info("End");
    }

    private static void testSearchCountry() {
        LOGGER.info("Start");
        List<Country> matches = countryService.searchCountry("ou");
        matches.forEach(c -> LOGGER.debug("Match: {}", c));
        LOGGER.info("End");
    }
}
