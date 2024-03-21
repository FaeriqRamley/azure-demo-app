function Loading() {
    return (
        <div className="flex-grow w-full flex justify-center items-center">
            <div className="flex gap-1 text-3xl font-semibold ">
                <span className="animate-pulse">L</span>
                <span style={{ animationDelay: "75ms" }} className="animate-pulse ">o</span>
                <span style={{ animationDelay: "150ms" }} className="animate-pulse ">a</span>
                <span style={{ animationDelay: "225ms" }} className="animate-pulse ">d</span>
                <span style={{ animationDelay: "300ms" }} className="animate-pulse ">i</span>
                <span style={{ animationDelay: "375ms" }} className="animate-pulse ">n</span>
                <span style={{ animationDelay: "450ms" }} className="animate-pulse ">g</span>
            </div>
        </div>
    )
}

export default Loading