using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpFlixFinal.Domains;
using OpFlixFinal.Repositories;

namespace OpFlixFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        UsuarioRepository usuarioRepository = new UsuarioRepository();

        
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(usuarioRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Usuarios usuario)
        {
            usuarioRepository.Cadastrar(usuario);
            return Ok();
        }
        
        [HttpGet("{id}")]
        public IActionResult BuscarId(int id)
        {
            return Ok(usuarioRepository.BuscarId(id));
        }
        
        [HttpDelete("{id}")]
        
        public IActionResult Deletar(int id)
        {
            usuarioRepository.Deletar(id);
            return Ok();
        }
        [HttpPut]
        public IActionResult Atualizar(Usuarios usuarios)
        {
            usuarioRepository.Atualizar(usuarios);
            return Ok();
        }
    }
}