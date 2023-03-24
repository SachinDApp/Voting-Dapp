import{useEffect,useState} from "react";

function CandidateDisplay({state}) {
  const [candidates, setCandidates]=useState([]); 
   useEffect(()=>{
    const {contract}=state;
    async function candidateDisplay(){
      const candidates=await contract.methods.candidateList().call();
      console.log(candidates);
      setCandidates(candidates);

    }
    contract && candidateDisplay();
  },[state])
  return <>
  <table>
    <tbody>
    <tr>
        <th>name</th>
        <th>party</th>
        <th>candidateId</th>
        <th>votes</th>
      </tr>
      {candidates.map((candidate)=>{
        return (
          <tr>
            <td>{candidate.name}</td>
            <td>{candidate.party}</td>
            <td>{candidate.candidateId}</td>
            <td>{candidate.votes}</td>
            <td>{candidate.candidateAddress}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  </>;
}
export default CandidateDisplay;
