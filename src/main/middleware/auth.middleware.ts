
// checks if client has correct authorization for the next middleware
export function authmiddleware(req, res, next, roleid) {
  const user = req.session.user;
if (roleid === 1) {
  next();
}
if (roleid === 2) {
  if (user && user.role.roleid) {
    next();
  } else {
    res.status(401).json({message: 'The incoming token has expired!'});
  }
  if (roleid === 3) {
    if (user && user.role.roleid === 3) {
      next();
    } else {
      res.status(401).json( { message: 'The incoming token has expired'} );
    }
  }
  else {
    res.status(401).json( { message: 'The incoming token has expired'} );
  }

}
  }
