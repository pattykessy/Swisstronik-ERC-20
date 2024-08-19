require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "1daa86eccf11ec3c0743e9e0bed061047fad970da0b77e51814bb869015dafb6";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
