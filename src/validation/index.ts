// src/validation/index.ts
import { z } from 'zod';

const validateSchema = (schema: z.ZodSchema, data: any) => {
    return schema.parse(data);
};

export { validateSchema };