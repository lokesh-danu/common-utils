// src/encryption/index.ts
import crypto from 'crypto';

const encrypt = null
// (data: string, key: string) => {
//     const cipher = crypto.createCipher('aes-256-cbc', key);
//     let encrypted = cipher.update(data, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     return encrypted;
// };

const decrypt = null
// (encrypted: string, key: string) => {
//     const decipher = crypto.createDecipher('aes-256-cbc', key);
//     let decrypted = decipher.update(encrypted, 'hex', 'utf8');
//     decrypted += decipher.final('utf8');
//     return decrypted;
// };

export { encrypt, decrypt };