import web3 from './web3';
import MalwareDetection from './build/MalwareDetection.json';

const instance = new web3.eth.Contract(
  JSON.parse(MalwareDetection.interface),
  '0xefCFCc404B71eB723100D02f9c9dfC71C197e265'
);

export default instance;
