require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
       hardhat: {
          chainid: 31337,
    },

   // polygon_mumbai: {
      // chainId: 80001,
    //  url: "Your URL",
      // url: process.env.POLYGON_MUMBAI,
     // accounts: [
      //  `0x${" Account"}`,
    //  ],
  //  },

    // fuji: {
    //   url: `Your URL`,
    //   accounts: [
    //     `0x${" Account"}`,
    //   ],
    // },
  },
};
