import { useState } from "react"
import repoQR from "../assets/repoQR.png";

const LearnMore = () => {
    const [showQR, setShowQR] = useState<boolean>(false)
    return (
        <>
            {!showQR ?
                <>
                    <div
                        className="animate-fade cursor-pointer hover:underline hover:text-blue-700 hover:opacity-100 transition-all duration-300 text-neutral-500"
                        onClick={() => setShowQR(true)}
                    >Learn More</div>
                </>
                :
                <>
                    <div
                        className="animate-fade cursor-pointer"
                        onClick={() => setShowQR(false)}
                    >
                        <img src={repoQR} width="192px" height="192px" alt="Repository QR" />
                    </div>
                </>
            }
        </>
    )
}

export default LearnMore