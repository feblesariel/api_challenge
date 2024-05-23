// Requires

const jwt = require('jsonwebtoken');

// Controllers

const apiTokenController = {

    getToken: function (req, res) {

        // Extract query parameters
        const { username , password } = req.body;

        // Check if the NAME and PASS match the values ​​in the .env file
        if (username === process.env.NAME && password === process.env.PASS) {

            // Generate a JWT token
            const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1m' });

            res.json({ token });

        } else {
            // Return an error if credentials are incorrect
            res.status(401).json({ message: 'Incorrect credentials' });
        }
    }

};

module.exports = apiTokenController;
