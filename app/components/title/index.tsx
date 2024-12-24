
const Title = ({ children }: { children: string }) => {
    return (
        <h1 className="text-3xl font-semibold md:text-4xl">
            {children}
        </h1>
    )
}

export default Title;
