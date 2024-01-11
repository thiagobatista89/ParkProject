package com.parking.demoparkapi.service;

import com.parking.demoparkapi.entity.Usuario;
import com.parking.demoparkapi.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    @Transactional
    public Usuario salvar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
    @Transactional(readOnly = true)
    public Usuario buscarPorId(Long id) {
    return usuarioRepository.findById(id).orElseThrow(
            () -> new RuntimeException("Id não encontrado")
    );
    }
    @Transactional
    public Usuario editarSenha(Long id, String senhaAtual, String novaSenha, String confirmaSenha) {
        if(!novaSenha.equals(confirmaSenha)){
            throw new RuntimeException("As senhas não são iguais.");
        }
    Usuario user = buscarPorId(id);
        if(!user.getPassword().equals(senhaAtual)){
            throw new RuntimeException("As senhas não conferem.");
        }
    user.setPassword(novaSenha);
    return user;
    }

    @Transactional(readOnly = true)
    public List<Usuario> buscarTodos() {
        return usuarioRepository.findAll();
    }
}
