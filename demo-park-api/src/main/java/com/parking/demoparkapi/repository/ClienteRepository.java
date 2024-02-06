package com.parking.demoparkapi.repository;

import com.parking.demoparkapi.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
