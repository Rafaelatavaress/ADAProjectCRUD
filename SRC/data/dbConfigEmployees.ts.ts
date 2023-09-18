    import * as sqlite3 from "sqlite3";
    import { Database } from "sqlite3";

    
    const filePath = "./data/employes.db";
    let db: Database | null = null;

    const createDbConnection = () => {
        db = new sqlite3.Database(filePath, (error) => {
            if (error) {
                return console.error("Erro ao conectar-se ao SQLite:", error.message);
            } else {
                console.log("Conexão com o SQLite estabelecida com sucesso.");
                createTable();
            }
        });

        return db;
    };

    
    const createTable = () => {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS employees (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                position TEXT,
                department TEXT
            )`;

        db?.run(createTableQuery, (error) => {
            if (error) {
                console.error("Erro ao criar a tabela 'employees':", error.message);
            } else {
                console.log("Tabela 'employees' criada com sucesso.");
            }
        });
    };
    export { createDbConnection };