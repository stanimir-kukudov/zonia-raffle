import { EnvName } from '@enums/environment.enum';
import packageInfo from '../../package.json';

const scheme = 'http://';
const host = 'localhost';
const port = ':8080';
const path = '/api/';

const baseUrl = scheme + host + port + path;

export const environment = {
  production: false,
  version: packageInfo.version,
  appName: 'Zonia',
  envName: EnvName.LOCAL,
  apiBaseUrl: baseUrl,
};