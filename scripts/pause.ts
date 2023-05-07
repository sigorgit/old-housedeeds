import { ethers } from "hardhat";

async function main() {
    const NFT = await ethers.getContractFactory("TteokmillSparrows");
    const nft = NFT.attach("0x29d05593116C443da54DaBFB4e5322DEA2fff8Cd");
    await nft.deployed();
    console.log(`NFT address: ${nft.address}`)

    //await nft.pause();
    console.log(`Paused: ${await nft.paused()}`)
}

main()