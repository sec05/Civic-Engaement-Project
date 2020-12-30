import withSession from "../../utils/sessions"
export default withSession(async(req,res)=>{
    await req.session.destroy();
    await res.json({isLoggedIn: false});
})