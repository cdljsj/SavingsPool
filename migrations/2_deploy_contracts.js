const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const SavingsPool = artifacts.require('SavingsPool');

module.exports = async function (deployer) {
    const fToken = "0xB16Df14C53C4bcfF220F4314ebCe70183dD804c0";
    const governance = "0x9dAEA1121601Bd21047d7aE2aFC7CdF6Ec76DC57";
    const instance = await deployProxy(SavingsPool, [fToken, governance]);
    // const instance = await deployProxy(Box, [fToken, 42], {deployer})
    console.log('Deployed', instance.address);
};