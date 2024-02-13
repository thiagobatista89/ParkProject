package com.parking.demoparkapi.repository;

import com.parking.demoparkapi.entity.Vaga;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VagaRpository extends JpaRepository<Vaga, Long> {


    Optional<Vaga>findByCodigo(String codigo);

    Optional<Vaga> findFirstByStatus(Vaga.StatusVaga statusVaga);
}
