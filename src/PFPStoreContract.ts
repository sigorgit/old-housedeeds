import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";

interface Sale {
    seller: string,
    price: BigNumber,
}

class PFPStoreContract extends Contract {

    constructor() {
        super("0xeF50df13f88070662459863D05cCD9581dfB1085", require("./PFPStoreContractABI.json"));
    }

    public async ownerOf(mateId: BigNumberish): Promise<string> {
        return await await this.contract.methods.ownerOf(mateId).call();
    }

    public async sales(addr: string, id: BigNumberish): Promise<Sale> {
        const results = await this.contract.methods.sales(addr, id).call();
        return {
            seller: results[0],
            price: BigNumber.from(results[1]),
        };
    }
}

export default new PFPStoreContract();
