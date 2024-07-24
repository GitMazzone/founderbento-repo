/**
 * This provides routes everywhere you need them without hard coding them.
 * This is especially useful if you deploy to multiple environments or locales
 * so you can always get the current, correct URL.
 */

export const isLocal = () => process.env.NODE_ENV === 'development';
export const isDev = () => process.env.VERCEL_ENV === 'preview';
export const isProd = () => process.env.VERCEL_ENV === 'production';

export const getBaseUrl = () =>
  isProd() ? 'https://founderbento.com' : 'https://dev.founderbento.com';
