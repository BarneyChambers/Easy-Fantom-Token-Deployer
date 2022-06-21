const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = '';

module.exports = {
  networks: {
    fantom: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc.ftm.tools/`),
      network_id: 250,
      chainId: 250,
      from: "",
    }, 
  },
  compilers: {
    solc: {
      version: "0.8.12",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 9999
        },
        evmVersion: "byzantium"
      }
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    ftmscan: ''
  }
};