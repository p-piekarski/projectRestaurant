import auth from "basic-auth";


export const authenticate = (req, res, next) => {
    var user = auth(req);
    if (!user || !user.name || !user.pass) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      res.sendStatus(401);
      return;
    }
    if (user.name === 'worker' && user.pass === 'worker') {
      next();
    } else {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
      res.sendStatus(401);
      return;
    }
  }

  