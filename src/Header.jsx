import "./header.css"

function Header({ score, highScore }){
    const isMax = highScore === 16;

    return(
        <header>
            <div>
                <h2>Unown's memory cards</h2>
            </div>
            <div className="score">
                <p>Score: {score}</p>
                <div className={isMax ? "highscore highscore--gold" : "highscore"}>
                    High score: {highScore}
                </div>
            </div>
        </header>
    );
}

export default Header;