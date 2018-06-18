using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MantenimientoRestService.Models;
using MySql.Data;
using System.Collections;

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
    
        //Metodo para el rest GET by ID
        //si no posee id, poner como nulo el ID
        public Marca getMarca(Object ID)
        {

            Marca m = new Marca();
            MySql.Data.MySqlClient.MySqlDataReader mySqlDataReader = null;
            String sqlString =sqlString = "SELECT * FROM marca";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(sqlString, conn);

            mySqlDataReader = cmd.ExecuteReader();

            if (mySqlDataReader.Read())
            {
                m.idMarca = mySqlDataReader.GetInt32(0);
                m.nombreMarca = mySqlDataReader.GetString(1);
                if (!mySqlDataReader.IsDBNull(2))
                {
                    m.descripcion = mySqlDataReader.GetString(2);
                }
                if (!mySqlDataReader.IsDBNull(3))
                {
                    m.email = mySqlDataReader.GetString(3);
                }
                if (!mySqlDataReader.IsDBNull(4))
                {
                    m.telefono = mySqlDataReader.GetString(4);

                }
                if (!mySqlDataReader.IsDBNull(5))
                {
                    m.website = mySqlDataReader.GetString(5);

                }
                if (!mySqlDataReader.IsDBNull(0))
                {
                    m.direccion = mySqlDataReader.GetString(6);
                }
                return m;
            }
            else
            {
                return null;
            }


        }

        //Metodo para el rest POST
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

       
        public ArrayList findAll()
        {       
            ArrayList marcaArray = new ArrayList();

         
            MySql.Data.MySqlClient.MySqlDataReader mySqlDataReader = null;
            String sqlString = sqlString = "SELECT * FROM marca";
      
            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(sqlString, conn);

            mySqlDataReader = cmd.ExecuteReader();

            while (mySqlDataReader.Read())
            {
                Marca m = new Marca();
                m.idMarca = mySqlDataReader.GetInt32(0);
                m.nombreMarca = mySqlDataReader.GetString(1);

                if (!mySqlDataReader.IsDBNull(2))
                {
                    m.descripcion = mySqlDataReader.GetString(2);
                }
                if (!mySqlDataReader.IsDBNull(3))
                {
                    m.email = mySqlDataReader.GetString(3);
                }
                if (!mySqlDataReader.IsDBNull(4))
                {
                    m.telefono = mySqlDataReader.GetString(4);

                }
                if (!mySqlDataReader.IsDBNull(5))
                {
                    m.website = mySqlDataReader.GetString(5);

                }
                if (!mySqlDataReader.IsDBNull(0))
                {
                    m.direccion = mySqlDataReader.GetString(6);
                }

                marcaArray.Add(m);
            }//fin while
            return marcaArray;
        }
    }

}