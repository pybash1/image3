const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("Image");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalImages();

  let waveTxn = await waveContract.uploadImage("test", "example.com/test.jpg");
  await waveTxn.wait();

  waveCount = await waveContract.getTotalImages();
  console.log(waveCount);

  // waveTxn = await waveContract.connect(randomPerson).wave();
  // await waveTxn.wait();
  
  // waveTxn = await waveContract.connect(randomPerson).wave();
  // await waveTxn.wait();

  // waveCount = await waveContract.getTotalWaves();
  // await waveContract.getWavesOfSender(randomPerson.address);
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