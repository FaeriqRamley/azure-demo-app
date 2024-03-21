import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
// import styles from "./appContent.module.css";
import 'react18-json-view/src/style.css'
import JsonView from "react18-json-view";
import msalInstance from "../auth/config";

interface IAppContent {
    jwtPayload: string;
}

const AppContent: React.FC<IAppContent> = ({ jwtPayload }) => {

    const [decodedPayload, setDecodedPayload] = useState<any>();

    useEffect(() => {
        if (jwtPayload.length > 0) {
            const decoded = jwtDecode(jwtPayload)
            setDecodedPayload(decoded);
        }
    }, [jwtPayload])
    return (
        <div className="flex-grow w-full flex justify-between items-center flex-col">
            <div></div>
            {decodedPayload && (
                <div className="flex w-full gap-10">
                    <div className="flex flex-col justify-center gap-4 font-light">
                        <h1 className="animate-fadeleft text-4xl font-bold">Hey, {decodedPayload?.family_name}!</h1>
                        <div className="animate-fade">Nice work getting your azure authentication up 👍🏼</div>
                        <div className="animate-fade">Here's a run-down of your jwt content on the right!</div>
                    </div>
                    <div className="border animate-fadeup rounded-lg shadow-md h-72 flex-grow text-sm font-light overflow-scroll bg-neutral-900">
                        <JsonView className="bg-neutral-900 p-4" src={decodedPayload} />
                    </div>
                </div>
            )}
            <div className="flex w-full justify-end">
                <button
                    className="animate-fade text-xl border w-60 px-4 py-2 rounded-lg bg-red-400 text-white hover:bg-red-500 transition-colors duration-150"
                    onClick={() => {
                        msalInstance.logoutPopup()
                            .then(() => {
                                window.location.reload()
                            })
                            .catch(reason => {
                                console.error(reason)
                            })
                    }}
                >
                    Log out and try again!
                </button>
            </div>
        </div>
    )
}

export default AppContent;
