import { useState,useEffect } from "react";
function VoterList({state}) {
  const [voters,setVoters]=useState([]);
  useEffect(()=>{
    const {contract}= state;
    async function voterINfo(){
      const voter=await contract.methods.voterList().call();
      console.log(voter);
      setVoters(voter);

    }
    contract && voterINfo();
  },[state])
  return <>
  <table>
    <tbody>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>voterId</th>
        <th>address</th>
      </tr>
      {voters.map((voter)=>{
        return (
          <tr>
            <td>{voter.name}</td>
            <td>{voter.age}</td>
            <td>{voter.voterId}</td>
            <td>{voter.voterAddress}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
  </>;
}
export default VoterList;
