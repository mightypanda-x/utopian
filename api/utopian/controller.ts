import { NextFunction, Request, Response } from 'express';
import * as fromUtopianService from './service';

export function retrievePending(req: Request, res: Response, next: NextFunction): void {
  fromUtopianService.retrievePendingPosts()
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch(error => next(error));
}
