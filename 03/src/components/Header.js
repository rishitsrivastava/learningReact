
export const Title = () => {
    return (
        <div>
            <a href="/">
            <img 
                className="logo"
                alt="logo"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/204px-Swiggy_logo.svg.png?20220725160748"
            />
            </a>
        </div>
    )
}

export const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contack</li>
                    <li>support</li>
                </ul>
            </div>
        </div>
    )
}