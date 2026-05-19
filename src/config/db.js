const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

// Crear adapter para conectar Prisma con PostgreSQL
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Instanciar PrismaClient con el adapter
const prisma = new PrismaClient({ adapter });

// Verificacion de la conexion de Prisma a la base de datos
prisma.$connect()
    .then(() => {
        console.log('Conexion exitosa a la base de datos con Prisma');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos con Prisma:', err.stack);
    });

module.exports = prisma;