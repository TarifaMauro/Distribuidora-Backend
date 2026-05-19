const prisma = require('../config/db');

const findAll = async () => {
    return await prisma.categories.findMany({
        orderBy: {
            id: 'asc',
        }
    });
}

const create = async (name, description) => {
    return await prisma.categories.create({
        data: { name, description }
    })
}

module.exports = { findAll, create };