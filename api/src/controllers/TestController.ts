import { Request, Response } from 'express';
import { get, post, controller } from './decorators';

@controller('')
class TestController {
  @get('/')
  testi(req: Request, res: Response): void {
    console.log('huhuuuu');
    res.send('huhu');
  }

  @post('/')
  testi2(req: Request, res: Response): void {
    console.log('peeee');
    res.send('jh');
  }
}
