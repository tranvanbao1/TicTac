import "./App.css";
import { useEffect, useState } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Pattern";
function App() {
  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState("O");
  const [win,setWin] = useState({winer:"none",state:"none"})

  useEffect(()=> {
    isWin();
    checkIfTie();
    if(player ==="X"){
      setPlayer("O")
    }else{
      setPlayer("X")
    }
  },[board])

  useEffect(()=> {
    if(win.state !="none") {
      console.log(win);
      alert(`Winning Player: ${win.winner}`);
      resetGame();
    }
  },[win])
  const resetGame= ()=> {
    setBoard(["","","","","","","","",""]);
  }
  const choose = (square) => {
    setBoard(board.map((val,index)=> {
      if(index ==square && val=="") {
        return player;
      }
      return val;
    }));
    
  }

  const isWin= ()=> {
    Patterns.forEach((current)=> {
      const firstPlayer = board[current[0]];
      if(firstPlayer=="") return;
      let winning = true;
      current.forEach((index)=> {
        if(board[index] != firstPlayer) {
          winning = false
        }
      })
      if(winning) {
        setWin({winner:player,state:"Won"})
      } 
    })
  }

  const checkIfTie= ()=> {
    let filled = true;
    board.forEach((square)=> {
      if(square =="") {
        filled = false;
      }
    })
    if(filled) {
      setWin({winner: "Tie!!!!!!!!!!!!!", state: "Tie"})
    }
  }
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square value={board[0]} choose={()=>choose(0)}/>
          <Square value={board[1]} choose={()=>choose(1)}/>
          <Square value={board[2]} choose={()=>choose(2)}/>
        </div>
        <div className="row">
          <Square value={board[3]} choose={()=>choose(3)}/>
          <Square value={board[4]} choose={()=>choose(4)}/>
          <Square value={board[5]} choose={()=>choose(5)}/>
        </div>
        <div className="row">
          <Square value={board[6]} choose={()=>choose(6)}/>
          <Square value={board[7]} choose={()=>choose(7)}/>
          <Square value={board[8]} choose={()=>choose(8)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
