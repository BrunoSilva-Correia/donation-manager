import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';

export const SESSION_ID_HEADER = 'X-Session-Id';

@Injectable()
export class SessionIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const id = randomUUID();
    req[SESSION_ID_HEADER] = id;
    res.set(SESSION_ID_HEADER, id);
    next();
  }
}
