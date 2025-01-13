// // src/auth/index.ts
// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import { config } from '../config';
// import '../types/express'; // Ensure this import is present


// const generateToken = (payload: object, expiresIn: string) => {
//     return jwt.sign(payload, config.jwt.secret!, { expiresIn });
// };

// const validateToken = (token: string) => {
//     return jwt.verify(token, config.jwt.secret!);
// };

// const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.headers.authorization?.split(' ')[1];
//         if (!token) throw new Error('Unauthorized');
//         req.user = validateToken(token);
//         next();
//     } catch (error) {
//         res.status(401).send('Unauthorized');
//     }
// };

// export { generateToken, validateToken, authMiddleware };