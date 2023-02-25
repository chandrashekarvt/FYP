import web3 from './web3';
import Malware from './build/MalwareDetection.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Malware.interface), address);
};
