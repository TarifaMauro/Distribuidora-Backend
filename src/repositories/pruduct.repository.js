const prisma = require('../config/db');

const findAll = async () => {
    return await prisma.products.findMany({
        include: {
            categories: true,
        },
        orderBy: {
            id: 'desc',
        }
    });
}

const create = async (productData) => {
    return await prisma.products.create({
        data: productData
    })
}

module.exports = { findAll, create };