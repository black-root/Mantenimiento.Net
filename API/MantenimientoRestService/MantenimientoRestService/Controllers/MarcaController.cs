﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MantenimientoRestService.Models;

namespace MantenimientoRestService.Controllers
{
    public class MarcaController : ApiController
    {
        // GET: api/Marca
        public IEnumerable<string> Get()
        {
            return new string[] { "idMarca", "Nombre" };
        }

        // GET: api/Marca/5
        public Marca Get(int id)
        {
            Marca marca = new Marca();
            marca.idMarca = id;
            marca.nombreMarca = "Dell"; 
            return marca;
        }

        // POST: api/Marca
        public void Post([FromBody]Marca value)
        {
            MarketPersistence mp = new MarketPersistence();
            long id;
            id = mp.saveMarca(value);
        }

        // PUT: api/Marca/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Marca/5
        public void Delete(int id)
        {
        }
    }
}
