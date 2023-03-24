function Vote({state, account}) {

  const {contract}=state;
  
  async function vote(){
    const Vot_id=document.querySelector("#voterId").value;
    const can_id=document.querySelector("#candidateId").value;
    try{
      await contract.methods.vote(Vot_id,can_id).send({
      from:account,
      gas:"1000000"
    })
  alert("voted succesfuly");
  }catch(error){
    alert(error);
  }
  
  }
  return (
    <div>
      <form className="form" onSubmit={vote}>
        <p className="status">Voting Status:</p>
        <label className="label2" htmlFor="voterId">
          VoterId:
        </label>
        <input className="innerBoxVote" type="text" id="voterId"></input>

        <label className="label2" htmlFor="candidateId">
          Candidate Id:
        </label>
        <input className="innerBoxVote" type="text" id="candidateId"></input>
        <button className="regBtn" type="submit">
          Vote
        </button>
      </form>
    </div>
  );
}
export default Vote;
