import msalInstance from "../auth/config";

/** Function that silently logs users in.
 * If there are active accounts, login with acquireTokenSilent function.
 * If there are no active accounts, try sso silent login once.
 * */
const silentLogin = (
  setJwtPayload: React.Dispatch<React.SetStateAction<string>>,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const accounts = msalInstance.getAllAccounts();
  console.log("accounts", accounts);
  if (accounts.length >= 1) {
    let activeAcc = msalInstance.getActiveAccount();

    if (!activeAcc) {
      msalInstance.setActiveAccount(accounts[0]);
      activeAcc = accounts[0];
    }

    if (activeAcc) {
      msalInstance
        .acquireTokenSilent({
          account: activeAcc,
          scopes: [],
        })
        .then((authRes) => {
          console.log("AcquireTokenSilent Success");
          setJwtPayload(authRes.accessToken);
          setIsAuthenticated(true);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  } else if (accounts.length === 0) {
    msalInstance
      .ssoSilent({ scopes: [] })
      .then((authRes) => {
        console.log("SsoSilent Success");
        setJwtPayload(authRes.accessToken);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log("sso silent failed. No user detected");
        setLoading(false);
      });
  }
};

export default silentLogin;
