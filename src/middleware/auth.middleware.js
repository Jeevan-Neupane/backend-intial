import jwt from 'jsonwebtoken'






const authToken = async (req, res, next) => {

    const token = req.header('x-auth-token');


    if (!token) {
        res.status(401).json({
            message: 'No token,authorization denied'
        })
    }

    try {
        const personId = jwt.verify(token, process.env.JWT_SECRET_KEY)


        const { id } = personId;

        req.id = id;


        next();



    } catch (error) {

        console.log("error in middleware", error);
        res.status(401).json({
            message: "Invalid Token"
        })

    }

}




export default authToken;

