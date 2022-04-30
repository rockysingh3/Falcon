
// method to deploy the contract
const main = async() => {
    const contractFactory = await ethers.getContractFactory("FalconContract");
    const contract = await contractFactory.deploy();
    await contract.deployed();

    console.log("Contract deployed to: ", contract.address);
}


// method to find the address of the contract on the chain 
const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();