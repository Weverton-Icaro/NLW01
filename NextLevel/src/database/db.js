//importar a dependencia da sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//utilizar objeto de banco de dados para operações
/*db.serialize(() => {
  //Criar uma tabela com comandos SQL
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
    );
  `)

  //Inserir dados na tabela
  const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "Papersider",
    "Qi 06, Taguatinga Norte",
    "Nº 36/37/38",
    "Distrito Federal",
    "Taguatinga",
    "Papéis e Papelão"
  ]

  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
  }

  //COMENTADO APENAS PARA NÃO ADICIONAR SEMPRE
  //db.run(query, values, afterInsertData)

  //Deletar dados da tabela
  db.run(`DELETE FROM places WHERE id = ?`, [9], function(err) {
    if(err) {
      return console.log(err)
    }

    console.log("Resgistro deletado com sucesso!")
  })

  //Consultar dados da tabela
  db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }

    console.log("Aqui estão seus registros:")
    console.log(rows)
  })
})*/