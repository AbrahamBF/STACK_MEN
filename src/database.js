import {createPool} from "mysql2/promise"

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '987654',
    database: 'STACK1'
});

export default pool;