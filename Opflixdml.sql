create DATABASE Opflix;

use Opflix;

create table Usuarios(
	IdUsuario int primary key identity,
	Email varchar(200) unique not null,
	NomeUsuario varchar(200) not null,
	Senha varchar(200) not null,
	Permissao varchar(100) unique not null,

);

create table Categorias(
	IdCategoria int primary key identity,
	NomeCategoria varchar(200) not null

);

create table Lancamentos(
	IdLancamento int primary key identity ,
	NomeLancamento varchar(200) not null,
	Categoria int foreign key references Categorias(IdCategoria),
	Sinopse varchar(200) not null,
	tipo  varchar(200) not null,
	Duracao varchar(200) not null,
	Lancamento DateTime not null,
	Imagem varchar(200) not null,
);

select * from Usuarios;

select * from Categorias;

select * from Lancamentos;

insert into Usuarios values ('Admin@admin.com','admin','123456','ADMINISTRADOR'),('Usuario@user.com','lucas','123456','COMUM')

insert into Categorias values ('ação'),
							('Aventura'),
							('Drama'),
							('Romance'),
							('Ficção Cientifica'),
							('Animação'),
							('suspense')


insert into Lancamentos values ('Velozes e furiosos 52',1,'um filme muito repetitivo','Filme','1 h 30 min','2019-10-11','https://http2.mlstatic.com/poster-banner-grande-velozes-e-furiosos-frete-gratis-745-D_NQ_NP_992452-MLB27348772242_052018-Q.jpg');