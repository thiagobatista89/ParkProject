package com.parking.demoparkapi.service;

import com.parking.demoparkapi.entity.Usuario;
import com.parking.demoparkapi.exception.EntityNotFoundException;
import com.parking.demoparkapi.exception.PasswordInvalidException;
import com.parking.demoparkapi.exception.UsernameUniqueViolationException;
import com.parking.demoparkapi.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public Usuario salvar(Usuario usuario) {
        try {
            usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
            return usuarioRepository.save(usuario);
        } catch (org.springframework.dao.DataIntegrityViolationException ex) {
            throw new UsernameUniqueViolationException(String.format("Username {%s} já cadastrado", usuario.getUsername()));
        }

    }
    @Transactional(readOnly = true)
    public Usuario buscarPorId(Long id) {
    return usuarioRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException(String.format("Usuário id=%s não encontrado", id)));
    }
    @Transactional
    public Usuario editarSenha(Long id, String senhaAtual, String novaSenha, String confirmaSenha) {
        if (!novaSenha.equals(confirmaSenha)) {
            throw new PasswordInvalidException("As senhas do username não são iguais.");
        }

    Usuario user = buscarPorId(id);
        if(!passwordEncoder.matches(senhaAtual, user.getPassword())){
            throw new PasswordInvalidException("As senhas do username não conferem.");
        }
    user.setPassword(passwordEncoder.encode(novaSenha));
    return user;
    }

    @Transactional(readOnly = true)
    public List<Usuario> buscarTodos() {
        return usuarioRepository.findAll();
    }


    @Transactional(readOnly = true)
    public Usuario buscarPorUsername(String username) {
        return usuarioRepository.findByUsername(username).orElseThrow(
                () -> new EntityNotFoundException(String.format("Usuário com '%s' não encontrado", username)));
    }

    @Transactional(readOnly = true)
    public Usuario.Role buscarRolePorUsername(String username) {
        return usuarioRepository.findRoleByUsername(username);
    }
}

