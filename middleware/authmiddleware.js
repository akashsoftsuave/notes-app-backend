const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        res.status(401).send('Authorization header missing');
        return;
    }

    jwt.verify(authHeader, JWT_SECRET, (err, user) => {
        if (err) {
            res.status(401).send('Invalid token');
            return;
        }
        req.user = user;
        next();
    });
}

module.exports = authMiddleware;