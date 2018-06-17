using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MantenimientoRestService.Models
{
    public class Marca
    {
        public long idMarca { get; set; }

        public String nombreMarca { get; set; }

        public String descripcion { get; set; }

        public String email { get; set; }

        public String telefono { get; set; }

        public String website { get; set; }

        public String direccion { get; set; }

    }
}