import { useState } from "react";
function ElectionCommision({state, account}){
  const {contract}=state;
  
  const [winner,setWinner] = useState("not declared yet");
  async function startVoting(event){
    
    event.preventDefault();
    const start=document.querySelector("#start").value;
    const end=document.querySelector("#end").value;
    try{
      await contract.methods.voteTime(start,end).send({
        from:account,
        gas:"1000000"
      })
      alert("voting has started");
      window.location.reload();
    }catch(error){
      alert(error);
    }
  }

  async function emergency(){
    try{
      await contract.methods.emergency().send({
        from:account,
        gas:"1000000"
      })
      console.log("successfuly halted");
     }catch(error){
      alert(error);
    }
  }

  async function result(){
    try{
      await contract.methods.result().send({
        from:account,
        gas:"1000000"
      });
      
    }catch(error){
      alert(error);
    }
  }
  async function freeEmer(){
    try{
      await contract.methods.freeEmergency().send({
        from:account,
        gas:"1000000"
      });
    }catch(error){
      alert(error);
    }
  }
  async function win(){
    const {contract}=state;
    const win=await contract.methods.winner().call();
    if(win!==0x0000000000000000000000000000000000000000)
    setWinner(win);
  }
  return (
    <>
      <div>
        <form className="form" onSubmit={startVoting}>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick={emergency}>
          Emergency
        </button>
        <button className="resBtn" onClick={result}>
          Result
        </button>
        <button className="freeemerBtn" onClick={freeEmer}>
          Free Emergency
        </button>
      </div>
      <div>
        <button className="resBtn"onClick={win}>Winner</button>
        <h2>winner is: {winner}</h2>
      </div>

    </>
  );
}
export default ElectionCommision;
