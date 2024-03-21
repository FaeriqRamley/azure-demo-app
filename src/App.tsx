import { useEffect, useState } from 'react'
import msalInstance from './auth/config'
import { AuthenticationResult } from '@azure/msal-browser'
import Loading from './components/Loading.js'
import Login from './components/Login.jsx'
import AppContent from './components/AppContent.js'
import AppTitle from './components/AppTitle'
import silentLogin from './functions/silentLogin'

function App() {

  // = These are global states shared between components in this demo =
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [jwtPayload, setJwtPayload] = useState<string>("");
  // ==================================================================

  // In React, useEffects are functions that run once on mount.
  // However if variables are added to the array in the second argument, it runs whenever the variables updates.
  useEffect(() => {
    setLoading(true);

    // MSAL: handleRedirectPromise() helps the application handle the state after a redirection or popup.
    // In this code block, on page render, the code checks and handles any redirects.
    // If not a redirect, it tries to silently log the user in.
    msalInstance
      .handleRedirectPromise()
      .then((authRes: AuthenticationResult | null) => {
        // user is logged in from redirect
        if (authRes) {
          setJwtPayload(authRes.accessToken)
          setIsAuthenticated(true)
          setLoading(false)
        }

        // user is not coming back from a redirect. Try to silently login
        if (!authRes) {
          silentLogin(setJwtPayload, setIsAuthenticated, setLoading)
        }
      })
      .catch((err: any) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  // In React, this is where rendered content is placed for every component. Written in JSX.
  return (
    <>
      <title>Azure AD Demo</title>
      <div className="bg-gradient-to-bl from-blue-100 to-neutral-50 w-full min-h-screen flex flex-col justify-start items-center px-16 py-20">
        <AppTitle />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {isAuthenticated ? (
              <AppContent
                jwtPayload={jwtPayload}
              />
            ) : (
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setLoading={setLoading}
                setJwtPayload={setJwtPayload}
              />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default App
