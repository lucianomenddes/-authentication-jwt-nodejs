import bcrypt from 'bcrypt';
import { createUser, getAll, getById, updateUser, deleteUser } from '../repositorys/userRepository.js';


export const createNewUser = async (req, res) => {

    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;
        const result = await createUser(req.body);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).send(error)
    }

};

export const getUser = async (req, res) => {
    try {
        const users = await getAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const getId = async (req, res) => {
    try {
        const user = await getById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error)
    }
};

export const update = async (req, res) => {
    try {

        const user = await updateUser(req.params.id, req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error)
    }
};

export const remove = async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.status(200).send();
    } catch (error) {
        res.status(400).send(error)
    }
}