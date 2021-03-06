import { Request, Response, NextFunction } from 'express';
import { controller, get, post, use, bodyValidator } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
export class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
        <form method="POST">
          <div>
            <label>Email</label>
            <input name="email"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password"/>
          </div>
          <button>Submit</button>
        </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email == 'test@example.com' &&
      password === 'password'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
