import withSession from "../../helpers/sessions";

export default withSession(async (req, res) => {
  const user = await req.session.get("user");
  
  if (user) {
   
    res.json({
      isLoggedIn: true,
      username: user,
    });
  } else {
    
    res.json({
      isLoggedIn: false,
    });
  }
});