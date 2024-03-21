import { Configuration, PublicClientApplication } from "@azure/msal-browser";

const msalConfig: Configuration = {
  auth: {
    clientId: `${import.meta.env["VITE_CLIENT_ID"]}`,
    authority: `https://login.microsoftonline.com/${
      import.meta.env["VITE_TENANT_ID"]
    }`,
    redirectUri: `${import.meta.env["VITE_REDIRECT_URI"]}`,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

const msalInstance =
  await PublicClientApplication.createPublicClientApplication(msalConfig);

export default msalInstance;
