package com.parking.demoparkapi.service;

import com.parking.demoparkapi.entity.Vaga;
import com.parking.demoparkapi.exception.CodigoUniqueViolationException;
import com.parking.demoparkapi.exception.EntityNotFoundException;
import com.parking.demoparkapi.repository.VagaRpository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.parking.demoparkapi.entity.Vaga.StatusVaga.LIVRE;

@RequiredArgsConstructor
@Service

public class VagaService {

    private final VagaRpository vagaRpository;

    @Transactional
    public Vaga salvar(Vaga vaga) {
        try {
            return vagaRpository.save(vaga);
        } catch (DataIntegrityViolationException ex) {
            throw new CodigoUniqueViolationException(
                    String.format("Vaga com código '%s' já cadastrada", vaga.getCodigo()));
        }
    }

    @Transactional(readOnly = true)
    public Vaga buscarPorCodigo(String codigo) {
        return vagaRpository.findByCodigo(codigo).orElseThrow(
                () -> new EntityNotFoundException(String.format("Vaga com código '%s' não foi encontrada.", codigo))
        );
    }

    @Transactional(readOnly = true)
    public Vaga buscarPorVagaLivre() {
        return vagaRpository.findFirstByStatus(LIVRE).orElseThrow(
                () -> new EntityNotFoundException("nenhuma vaga livre foi encontrada")
        );
    }

}
