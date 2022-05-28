/** @format */

import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user: any;

      try {
        const data: any = jwt.verify(token, process.env.JWT_SECRET);

        user = await prisma.user.findUnique({
          where: { id: data.id },
        });

        if (!user) {
          throw new Error('Invalid Token');
        }
      } catch (error) {
        res.status(401);
        res.json({ error: 'Not Authorized' });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401);
    res.json({ error: 'Not Authorized' });
  };
};
