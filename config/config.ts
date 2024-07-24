/**
 * This file contains things that are used app-wide, so a single config makes
 * for easy updates.
 * To see where any given value is used, ⌘Cmd + ⇧Shift + F it.
 */

import { getBaseUrl } from './routePaths';

type AppConfig = {
  displayName: string; // Your product/startup's name
  authRedirectUrl: string; // Where to send users after successful login
};
export const appConfig: AppConfig = {
  displayName: 'FounderBento',
  authRedirectUrl: getBaseUrl(),
};
