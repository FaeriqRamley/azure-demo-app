import azureSVG from "../assets/Microsoft_Azure.svg"

const AppTitle = () => {
    return (
        <div className="w-full text-left flex flex-row gap-2 cursor-default">
            <img src={`${azureSVG}`} width={48} height={48} />
            <h1 className="text-5xl font-semibold">SE CoP Azure Demo</h1>
        </div>
    )
}

export default AppTitle