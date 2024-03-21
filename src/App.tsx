import { useEffect, useState } from 'react'
import './App.css'
import msalInstance from './auth/config'
import { AuthenticationResult } from '@azure/msal-browser'
import Loading from './components/Loading.js'
import Login from './components/Login.jsx'
import { jwtDecode } from 'jwt-decode'
import AppContent from './components/AppContent.js'
import AppTitle from './components/AppTitle'
import silentLogin from './functions/silentLogin'

function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [jwtPayload, setJwtPayload] = useState<string>("");

  useEffect(() => {
    setLoading(true);
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
