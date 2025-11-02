import "./header.css"

function Header({ score, highScore }){
    const isMax = highScore === 16;

    return(
        <header>
            <div>
                <h1>Memory Game</h1>
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