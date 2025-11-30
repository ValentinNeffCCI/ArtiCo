//! remove when finished
const users = require("../datas/users.js");
const prisma = require("../constants/client.js");

const responseSchema = (login = false) => {
    return {
        id: true,
        name: true,
        email: true,
        role: true,
        active: true,
        entreprises: true,
        password: login
    }
}

module.exports = {
    findAll: (req, res) => {
        return prisma.user.findMany({ select: responseSchema() });
    },
    findById: (id) => {
        return prisma.user.findUnique({ where: { id: id }, select: responseSchema() });
    },
    create: (email, password, name) => {
        return prisma.user.create({ data: { email, password, name }, select: responseSchema() });
    },
    findByEmail: (email, login = false) => {
        return prisma.user.findUnique({ where: { email: email }, select: responseSchema(login) });
    },
    findByName: (name) => {
        return prisma.user.findUnique({ where: { name: name }, select: responseSchema() });
    },
    update: (id, data) => {
        return prisma.user.update({ where: { id: id }, data: data, select: responseSchema() });
    }
}