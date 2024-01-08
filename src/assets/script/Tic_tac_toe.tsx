import React, {useState,useEffect} from "react"

 function Tic_tac_toe()
 {
    type VictoryType = 
    {
        playerVictory : String;
    }
    
    const emptyBox = Array(9).fill('');
    // const emptyBox =[
    //     "X","X","O",
    //     "X","X","O",
    //     "X","X","O"
    // ];

    const [board, setBoard] = useState(emptyBox);
    const [player, setPlayer] = useState("X");
    const [victory, setVictory] = useState<String | null>();
    const [score,setScore] = useState({X:0,O:0});

    useEffect(checkVictory,[board])

    function cellClick(index:number) 
    {
        if (board[index] === "" && !victory){
            setBoard(board.map( (item,itemIndex) => itemIndex === index ? player : item ));
            setPlayer( (player === "O") ? "X" : "O" )
        }
    }
    function checkVictory()
    {
        const possibleVitory = [
            [ board[0],board[1],board[2] ],
            [ board[3],board[4],board[5] ],
            [ board[6],board[7],board[8] ],

            [ board[0],board[3],board[6] ],
            [ board[1],board[4],board[7] ],
            [ board[2],board[5],board[8] ],

            [ board[0],board[4],board[8] ],
            [ board[2],board[4],board[6] ]
        ]
        let count = 0 ; 
        board.map((item) => item !== "" ? count += 1 : null);
        possibleVitory.forEach( (cells) => {
            if(cells.every(item => item === "X")) {
                setVictory("Jogador X");
                setScore({X:score.X+=1 ,O:score.O})
                count = 0;
            }
            if(cells.every(item => item === "O")) {
                setVictory("Jogador O");
                setScore({X:score.X ,O:score.O+=1})
                count = 0;
            }
            if(count === 9){
                setVictory("Não Houve Ganhador")
            } 

        });
    }
    function VictoryPlayer(props : VictoryType){
        return (
            <div className="victory">
                <main className="body-notified">
                    <strong>Vencedor: </strong>
                    <span className= {`${props.playerVictory}`}>
                        {props.playerVictory}
                    </span><br />
                    <button className="bt-reset" onClick={()=>refreshGame()}>Jogar Novamente</button>
                </main>
            </div>
        )
    }
    function refreshGame()
    {
        setVictory(null);
        setBoard(emptyBox)
        setPlayer("X")
        
    }
    return(
        <div className="game-layout">
            <div className="score">
                <span className="text-score">Score:</span>
                <div className="score-grid">
                    <span className="player ">Jogador X:</span> 
                    <span className="player X">{score.X}</span>
                    <span className="player ">Jogador O: </span>
                    <span className="player O">{score.O}</span>
                </div>
            </div>
            {victory ? <VictoryPlayer playerVictory={victory}/> : null}
            <div className="game">
                {board.map((item, index) => (
                    <div 
                        className={`xy ${item}`}
                        key={`celula ${index}`}
                        onClick={() => cellClick(index)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Tic_tac_toe;
