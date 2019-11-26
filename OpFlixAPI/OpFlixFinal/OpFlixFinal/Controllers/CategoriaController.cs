using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpFlixFinal.Domains;
using OpFlixFinal.Interfaces;
using OpFlixFinal.Repositories;

namespace OpFlixFinal.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private ICategoriaRepository categoriaRepository { get; set; }

        public CategoriaController()
        {
            categoriaRepository = new CategoriaRepository();
        }


        
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(categoriaRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Categorias categorias)
        {
            categoriaRepository.Cadastrar(categorias);
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult BuscarId(int id)
        {
            return Ok(categoriaRepository.BuscarId(id));
        }

        [HttpDelete("{id}")]
      
        public IActionResult Deletar(int id)
        {
            categoriaRepository.Deletar(id);
            return Ok();
        }
    }
}