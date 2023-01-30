const jwt = require('jsonwebtoken');
async function verifyToken(req, res, next) {
    try {
        const token = req.get( 'Authorization' ) ? req.get( 'Authorization' ).split(' ') : '';
        if (!token  || token[0] !== 'Bearer') return res.status(403).json({error: "Invalid session token"});
        const verify = await jwt.verify(token[1], process.env.TOKEN_SEED, { complete: true });
        if (!verify) return res.status(403).json({
            error: "Invalid session"
        });

        req._user = verify.payload._user;
        next()
    } catch (error) {
        console.log('Invalid session: ', error);
        return res.status(403).json({
            error: 'Invalid session'
        });
    }
}
module.exports = {
    verifyToken
}