const authService = require('./auth.services');

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const response = await authService.login(email, password);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const response = await authService.register(name, email, password);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}