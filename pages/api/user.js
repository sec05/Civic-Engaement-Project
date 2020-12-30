import withSession from "../../utils/sessions";

export default withSession(async (req, res) => {
  const user = await req.session.get("user");
  const firstname = await req.session.get("firstname");
  const lastname = await req.session.get("lastname");
  const AIDemail = await req.session.get("AIDemail");
  if (user) {
   
    res.json({
      isLoggedIn: true,
      username: user,
      firstname: firstname,
      lastname: lastname,
      AIDemail: AIDemail,
    });
  } else {
    
    res.json({
      isLoggedIn: false,
    });
  }
});