import { Request } from 'express';

declare module 'express' {
    interface Request {
        user?: any; // You can replace `any` with a more specific type if known
    }
}