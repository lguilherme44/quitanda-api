import { Pool } from 'pg';

export const pool = new Pool({
  user: 'seuUsuario',
  host: 'seuHost',
  database: 'seuBancoDeDados',
  password: 'suaSenha',
  port: 5432,
});
