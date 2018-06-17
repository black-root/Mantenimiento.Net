using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MantenimientoRestService.Models;
using MySql.Data;

namespace MantenimientoRestService
{
    public class MarketPersistence
    {
        private MySql.Data.MySqlClient.MySqlConnection conn;

        public MarketPersistence()
        {
            string myConnectionString;
            myConnectionString = "server=127.0.0.1;uid=root;pwd=root;database=mantenimiento";

            try
            {
                conn = new MySql.Data.MySqlClient.MySqlConnection();
                conn.ConnectionString = myConnectionString;
                conn.Open();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {

            }
        }
        public long saveMarca(Marca marcaToSave)
        {
            String sqlString = "INSERT INTO mantenimiento.marca (idMarca, nombreMarca," +
                " descripcion, email, telefono, website, direccion) VALUES ('"+ marcaToSave.idMarca+"','"
                + marcaToSave.nombreMarca + "','" + marcaToSave.descripcion + "','" + marcaToSave.email
                + "','" + marcaToSave.telefono + "','" + marcaToSave.website + "','" + marcaToSave.direccion + "');";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(sqlString, conn);
            cmd.ExecuteNonQuery();
            long id = cmd.LastInsertedId;
            return id;
        }
    }
}