import { BigNumberish } from "ethers";
import Contract from "./Contract";

class MateContract extends Contract {

    constructor() {
        super("0x29d05593116c443da54dabfb4e5322dea2fff8cd", require("./MateContractABI.json"));
    }

    public async ownerOf(mateId: BigNumberish): Promise<string> {
        return await await this.contract.methods.ownerOf(mateId).call();
    }
}

export default new MateContract();
