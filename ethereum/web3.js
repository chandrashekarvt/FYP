import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  // const provider = new Web3.providers.HttpProvider(
  //   'https://goerli.infura.io/v3/41394bd8d0254526be13defed288327a'
  // );
  web3 = new Web3('https://goerli.infura.io/v3/41394bd8d0254526be13defed288327a')
}

export default web3;
