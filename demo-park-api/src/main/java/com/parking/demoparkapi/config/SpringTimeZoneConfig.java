package com.parking.demoparkapi.config;

import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

import java.util.TimeZone;

@Configuration
public class SpringTimeZoneConfig {
@PostConstruct
    public void TimezoneConfig() {
        TimeZone.setDefault(TimeZone.getTimeZone("Europe/Lisbon"));
    }

}
