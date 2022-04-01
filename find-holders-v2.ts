import fs from "fs";
import MateContract from "./src/MateContract";
import PFPStoreContract from "./src/PFPStoreContract";

(async () => {
    const addresses: string[] = [];
    for (let id = 0; id < 8001; id += 1) {
        const owner = await MateContract.ownerOf(id);
        if (owner === "0xeF50df13f88070662459863D05cCD9581dfB1085") {
            console.log(id, "KLUBS!");
            const addr = (await PFPStoreContract.sales(MateContract.address, id)).seller;
            if (addresses.includes(addr) !== true) {
                addresses.push(addr);
            }
        } else {
            console.log(id);
            if (addresses.includes(owner) !== true) {
                addresses.push(owner);
            }
        }
    }
    fs.writeFileSync("./addresses-20220309.json", JSON.stringify(addresses));
})();