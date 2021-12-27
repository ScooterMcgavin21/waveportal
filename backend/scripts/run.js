const main = async () => {
  // random wallet address named randomPerson
  // const [owner, randomPerson] = await hre.ethers.getSigners();
  // compiles contract and generates files under artifacts 
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
  // local eth network created by hardhat 
  const waveContract = await waveContractFactory.deploy();
  // wait till contracts deployed
  await waveContract.deployed();
  // waveContract.address gives address of the deployed contract
  console.log('Contract deployed to:', waveContract.address);
  // console.log('Contract deployed by:', owner.address);

  // call fnx to grab number of total waves, then wave, grab waveCount one more time to see changes
  let waveCount;
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());
  /**
   * Send waves
   */
  let waveTxn = await waveContract.wave('A message');
  await waveTxn.wait(); // wait forr transaction to be mined. 

  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await waveContract.connect(randomPerson).wave('Another message!');
  await waveTxn.wait();

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);

  // let waveTxn = await waveContract.wave();
  // await waveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();

  // // simulate other people hitting functions 
  // waveTxn = await waveContract.connect(randomPerson).wave();
  // await waveTxn.wait();
  // // rupdate total waves
  // waveCount = await waveContract.getTotalWaves();

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
