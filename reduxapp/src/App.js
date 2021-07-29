import React,{useState, useEffect} from 'react';
import {abi,address} from './abi/abi';
import Web3 from 'web3';
import ipfs from './ipfs';

function App() {

  const [contract, setContract] = useState('');
  const [accounts, setAccounts] = useState('');
  const [img, setImg] = useState([]);
  const [text, setText] = useState([]);
  const [obj, setObj] = useState([]);

  useEffect(() => {
    const loadBlockchain = async () => {
      try {
            if (Web3.givenProvider) {
                const web3 = new Web3(Web3.givenProvider);
                await Web3.givenProvider.enable();
                const account = await web3.eth.getAccounts();
                setAccounts(account[0]);
                const contract = new web3.eth.Contract(abi, address);
                setContract(contract);
                console.log(" contract ", contract);
                const count = await contract.methods.count().call();
                console.log("count ", count);
                let arr = [];
                for(let i=1; i<=Number(count); i++) {
                  const {img, text, owner} = await contract.methods.getHash(i).call(); 
                  let obj = {
                    img,
                    text
                  }
                  arr.push(obj);
                }
                setObj(arr);
              }
            else {
                console.log("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
            }
        }
        catch (error) {
            console.log("Error in loading Web3 = ", error);
        }
    }
    loadBlockchain();
}, []);

let imageBuffer;
const captureFile = async(e)=> {
  e.preventDefault();

  const reader = new FileReader();
  reader.readAsArrayBuffer(e.target.files[0]);
  reader.onload = async()=> {
    imageBuffer = Buffer(reader.result);
    console.log("Image Buffer => ", imageBuffer);
  }
}

const handleSubmit = async(e)=> {
  e.preventDefault();
  try {
    const {path} = await ipfs.add(imageBuffer);
    await contract.methods.sendHash(path, "hhjunbghyhhh").send({from: accounts});
    console.log("path ", path);
  } catch(e) {
    console.log("error ", e);
  }
}

  return (
    <>
    <div className="App">
      {
        obj.map((i, ind)=> {
          return(
           <div key={ind}>
            <img src={`https://ipfs.io/ipfs/${i.img}`} height="200" width="200"/>
            <p>{i.text} || | </p>
           </div>
          )
        })
      }
      
    </div>
    <form>
      <input type="file" onChange={captureFile} />
      <button type="Submit" onClick={handleSubmit}>Submit</button>
    </form>
    </>
    );
}

export default App;
