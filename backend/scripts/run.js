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

  /** sends 2 waves */
  const waveTxn = await waveContract.wave("This is wave #1");
  await waveTxn.wait();

  const waveTxn2 = await waveContract.wave("This is wave #2");
  await waveTxn2.wait();
  // let waveTxn = await waveContract.wave('A message');
  // await waveTxn.wait(); // wait forr transaction to be mined. 
  /** get contract balance  */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log('Contract Balance:', hre.ethers.utils.formatEther(contractBalance));

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
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
