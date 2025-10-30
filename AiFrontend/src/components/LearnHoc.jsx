const Parent = ({ children }) => {
    return (
        <div>
            <h1 className="text-3xl">Parent Start</h1>
            {children}
            <h1 className="text-3xl">Parent End</h1>

        </div>
    )
}

export default Parent;