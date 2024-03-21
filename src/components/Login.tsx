import msalInstance from "../auth/config"
import LearnMore from "./LearnMore"

interface ILogin {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setJwtPayload: React.Dispatch<React.SetStateAction<string>>
}

const Login: React.FC<ILogin> = ({ setIsAuthenticated, setLoading, setJwtPayload }) => {

    return (
        <div className="flex-grow w-full flex flex-col justify-center items-center gap-8">
            <div className="opacity-0">placeholder</div>
            <div className="flex flex-col justify-center items-center gap-8" >
                <div className="text-5xl font-bold cursor-default"><span className="inline-block animate-fade">Login to </span> <span className="text-blue-400 inline-block animate-fadeleft">Azure</span></div>
                <div className="flex flex-row justify-around gap-4">
                    <button
                        className="animate-fade text-xl border w-60 px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition-colors duration-150"
                        onClick={() => {
                            msalInstance.loginRedirect()
                        }}
                    >
                        Login via Redirect
                    </button>
                    <button
                        className="animate-fade text-xl border w-60 px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition-colors duration-150"
                        onClick={() => {
                            msalInstance.loginPopup().then((res) => {
                                setJwtPayload(res.accessToken)
                                setIsAuthenticated(true)
                                setLoading(false)
                            })
                        }}
                    >
                        Login via Popup
                    </button>
                </div>
            </div>
            <LearnMore />
        </div>

    )
}

export default Login