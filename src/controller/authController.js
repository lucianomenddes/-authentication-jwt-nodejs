import prisma from '../services/prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authenticate = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send({ message: "email and password required" });
        }

        const foundUser = await prisma.user.findUnique({
            where: {
                email,
            }
        });
        if (!foundUser) {
            return res.status(401).send({ message: "E-mail already registered" });
        }

        const match = await bcrypt.compare(password, foundUser.password);

        if (!match) {
            return res.status(401).json({ message: 'Unauthorized' });
        }


        const accessToken = jwt.sign({"id": foundUser.id}, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1M" }
        );

        return res.status(200).send({accessToken});

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};