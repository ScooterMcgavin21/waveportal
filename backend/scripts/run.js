const main = async () => {
  /** Deploy contract and fund it with 0.1 eth */
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log('Contract Address:', waveContract.address);

  /** Contract Balance -> hre.ethers.utils.formatEther(contractBalance) tests to see contract has balance */
  let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log('Contract Balance:', hre.ethers.utils.formatEther(contractBalance));

  /** sends wave */
  let waveTxn = await waveContract.wave('A message');
  await waveTxn.wait(); // wait forr transaction to be mined. 

  /** get contract balance  */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log('Contract Balance:', hre.ethers.utils.formatEther(contractBalance));

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
  // local eth network created by hardhat 
  // const waveContract = await waveContractFactory.deploy();
  // let waveCount;
  // waveCount = await waveContract.getTotalWaves();
  // console.log(waveCount.toNumber());
  // const [_, randomPerson] = await hre.ethers.getSigners();
  // waveTxn = await waveContract.connect(randomPerson).wave('Another message!');
  // await waveTxn.wait();
  // let allWaves = await waveContract.getAllWaves();
  // console.log(allWaves);
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
