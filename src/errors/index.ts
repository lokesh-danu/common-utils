// src/errors/index.ts
class AppError extends Error {
    constructor(public message: string, public statusCode: number = 500) {
        super(message);
    }
}

export { AppError };