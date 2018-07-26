import web3 from './web3';

const ADDRESS = '0xb5Bd0a97c3190f96203624e8781f3b553fFdAa67';
const ABI = [{
  constant: false,
  inputs: [],
  name: 'pickWinner',
  outputs: [],
  payable: true,
  stateMutability: 'payable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'getPlayers',
  outputs: [{
    name: '',
    type: 'address[]'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'getPlayersCount',
  outputs: [{
    name: '',
    type: 'uint256'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: false,
  inputs: [],
  name: 'enterLottery',
  outputs: [],
  payable: true,
  stateMutability: 'payable',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'getManager',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [{
    name: 'index',
    type: 'uint256'
  }],
  name: 'getPlayer',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  constant: true,
  inputs: [],
  name: 'getLastWinner',
  outputs: [{
    name: '',
    type: 'address'
  }],
  payable: false,
  stateMutability: 'view',
  type: 'function'
}, {
  inputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'constructor'
}];

export default new web3.eth.Contract(ABI, ADDRESS);