# How to run the application
## First time setup
For the first time after cloning/downloading the repository, install the application using
```bash
npm install
```

Add a file named and name it `.env` and copy these 3 variables
```bash
VITE_CLIENT_ID="<your-azure-client-id>"
VITE_TENANT_ID="<your-azure-tenant-id>"
VITE_REDIRECT_URI="<your-redirect-url>"
```
replace the variables with your actual ids and stuff.
redirect url refers to your app url, in this context it should be `http://localhost:5173`
As for the azure IDs, these are obtained from your app registration Overview Tab

## Running the application
To run the application
```bash
npm run dev
```

Congratulations! The app is running :D


# Useful materials
[Azure Main Page where you can sign up](https://azure.microsoft.com/en-us/)

[Azure's Entra ID, formerly AD, tutorials regarding MSAL libraries](https://learn.microsoft.com/en-us/entra/msal/)

# Contact the team!
If have any questions regarding this repository feel free to contact [me](mailto:Faeriq_Ramley@lta.gov.sg)

If you have other questions or requests you may contact our Team lead, [Xujing](mailto:SHEN_Xujing@lta.gov.sg), or any of our frontend developers:
[Faeriq](mailto:FAERIQ_RAMLEY@lta.gov.sg)
[Ernest](mailto:LOW_Ernest@lta.gov.sg)
[JunRong](mailto:NG_Jun_Rong@lta.gov.sg)
[LekPeng](mailto:Peng_lek@lta.gov.sg)
<!-- 
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
