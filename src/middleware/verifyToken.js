import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {

    let token = req.headers["x-access-token"]

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })
            req.id = decoded.id
            next()
        }
    )
};

export default verifyToken;