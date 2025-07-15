import { Request, Response } from 'express';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const getProfile = (req: AuthenticatedRequest, res: Response) => {
  res.json({ user: req.user });
};
