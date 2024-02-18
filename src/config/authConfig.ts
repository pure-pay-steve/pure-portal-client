import { LogLevel, PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: '4c0fef3c-24bd-483a-a864-cce5ec8fd79e',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: window.location.href.includes('localhost') ? 
      'http://localhost:5173/auth.html' : 
      'https://portal.purepay.cloud/auth.html',
    postLogoutRedirectUri: '/'
  },
  cache: {
    cacheLocation: 'localStorage'
  },
  system: {
      loggerOptions: {
          loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
              if (containsPii) {
                  return;
              }
              switch (level) {
                  case LogLevel.Error:
                      console.error(message);
                      return;
                  case LogLevel.Info:
                      console.info(message);
                      return;
                  case LogLevel.Verbose:
                      console.debug(message);
                      return;
                  case LogLevel.Warning:
                      console.warn(message);
                      return;
                  default:
                      return;
              }
          },
          logLevel: LogLevel.Verbose
      }
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: [ 'api://4c0fef3c-24bd-483a-a864-cce5ec8fd79e/MyToDo.Read' ]
}