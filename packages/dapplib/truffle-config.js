require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain unfold imitate prize flip spy'; 
let testAccounts = [
"0xc6999fba64393a97daad76773aebf580e2ce6366ce2c7d1dc19a7b8d3ce5bc67",
"0x5688aa0ac3a1f6c33b38104916bc4321f191a9d5389e92a4dbf06226f23fb93f",
"0x9167eebac052a2fedab57c10edc3cf3448a0d741c28adf36a51a7ec93f83aa49",
"0x407635b3572fa528b50bb80325dd0247244fc3fdad1e38ad744fd1c302afbacf",
"0x4d7572a94f40604513d780d23d699ef6e1c6c7af259d6c82a9dca5c4d95b3d30",
"0x27018f1816ec0bfe912acca8414a1e62985fa1d77c015707d53df536dc25484c",
"0xf6daf164cee97866e7864161067091d30002c44ed649ae47edd393e976f29c06",
"0x8ace6edcdc79228f735fe4148461d2cf016ad7301b76f6e1a827057f87db628b",
"0x5df5a510f62f47b5e647ffac1ea71082939af98c78d45baeed40fa85c9e5b9f6",
"0xb95dc82f3e0919a72ddf4e290a12c9144471d5ace6cb9f981b4e4524b2603435"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

