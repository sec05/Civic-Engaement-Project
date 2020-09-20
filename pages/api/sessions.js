import {withIronSession} from "next-iron-session"

export default withIronSession(
    async(req,res) =>
    {
        if(req.method === "POST")
        {
            const {user} = req.body.username
            if(user != undefinded)
            {
                req.session.save("username", {user});
                req.session.save();
                return res.status(201).end();
            }
            else
            {
                res.status(406).end();
            }
        }
    },
    {
        cookiename: "user info",
        cookieOptions:{
            secure: process.env.NODE_ENV === "production" ? true : false,
        },
        password: process.env.APPLICATION_SECRET
    }
)