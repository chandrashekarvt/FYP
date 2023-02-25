import web3 from './web3';
import Malware from './build/TestingNode.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Malware.interface), address);
};