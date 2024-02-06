INSERT INTO USUARIOS (id, name, password, role) values (100, 'ana@email.com', '$2a$12$U7vEkuPxbPdXW7Vj3my/hOiqIzSPXZ4i7hBihcdP4W6.C/x1r1zGu', 'ROLE_ADMIN');
INSERT INTO USUARIOS (id, name, password, role) values (101, 'bia@email.com', '$2a$12$U7vEkuPxbPdXW7Vj3my/hOiqIzSPXZ4i7hBihcdP4W6.C/x1r1zGu', 'ROLE_CLIENTE');
INSERT INTO USUARIOS (id, name, password, role) values (102, 'bob@email.com', '$2a$12$U7vEkuPxbPdXW7Vj3my/hOiqIzSPXZ4i7hBihcdP4W6.C/x1r1zGu', 'ROLE_CLIENTE');
INSERT INTO USUARIOS (id, name, password, role) values (103, 'toby@email.com', '$2a$12$U7vEkuPxbPdXW7Vj3my/hOiqIzSPXZ4i7hBihcdP4W6.C/x1r1zGu', 'ROLE_CLIENTE');

INSERT INTO CLIENTES (id, nome, cpf, id_usuario) values (10, 'Bianca Silva', '79074426050', 101);
INSERT INTO CLIENTES (id, nome, cpf, id_usuario) values (20, 'Roberto Gomes', '55352517047', 102);