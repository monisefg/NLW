
const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(()=>{
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items
  //   ) VALUES (?,?,?,?,?,?,?);
  //   `

  // const values = [
  //   "https://www.google.com/",
  //   "Paperside",
  //   "endereço bla bla",
  //   "complemento, numero tal",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Resíduos Eletrônicos, Lâmpadas"
  // ] 

  // function afterInsertData(err){
  //   if(err){
  //     return console.log(err)
  //   }

  //   console.log("Cadastrado com sucesso")
  //   console.log(this)
  // }

  
  //db.run(query, values, afterInsertData)

  // db.all(`SELECT * FROM places`, function(err, rows){
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log("Seus registros: ")
  //   console.log(rows)
  // })

  // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log("Deletado com sucesso")
  // })

//})