require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rice magic huge grace brand equal ghost'; 
let testAccounts = [
"0x68e2e094f7dfa4e82cbd6afb969bfcdfb916c77582981558c1c0807fd481531b",
"0xad290c3fad42ba60498f9ae730e47ad7eb02cd94cf4ba6d98b2d5470a10e00d1",
"0x50573d0020fbb57de08098cb4f1103bf907f6ef23241944cd28e8f946166ccfc",
"0x43ba593ac5e4b455ac3dbd22c9540bf19fd1919df3c8483133661a9c898c780d",
"0x38d35762a8d908ac015e3066f6590388f7b220d14be2b53cdb4be886c150c487",
"0xc79035e0d5fb9645699b9fbf74515b994e91b67cce47482a1a5eb55f0abcbff5",
"0x6a0093f536851ded396e226eb217a0f404dd6d254fe654801f778d8814941758",
"0x862e63577adcf1a6cadad144742f392ac4efa062a1c9f6f4482363e1ac21042f",
"0x1c90a05b11703b9fc5f06d5f4a33d4ffac07f6ff9847fb77ba8fef5be568d631",
"0x762d9f63e7a126d7764f3f987f85738bf0ae7df9c3346b0e10a685b1e29a03d6"
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
            version: '^0.5.11'
        }
    }
};
