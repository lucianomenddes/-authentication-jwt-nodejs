import prisma from "../services/prisma.js";

export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            password: false,
            createdAt: true,
            updatedAt: true
        }
    });
    return user;
};

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            password: false,
            createdAt: true,
            updatedAt: true
        }
    });
    return users;
};

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            password: false,
            createdAt: true,
            updatedAt: true
        }
    });
    return user;
};


export const updateUser = async (id, data) => {
    const user = await prisma.user.update({
        where: {
            id: Number(id),
        },
        data,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            password: false,
            createdAt: true,
            updatedAt: true
        }
    });
    return user;
};

export const deleteUser = async (id) => {
    await prisma.user.delete({
        where:{
            id: Number(id),
        },
    });
    return;
}