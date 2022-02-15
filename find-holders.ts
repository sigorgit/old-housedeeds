import fs from "fs";
import MateContract from "./src/MateContract";
import PFPStoreContract from "./src/PFPStoreContract";

(async () => {
    const results: { id: number, address: string }[] = [];
    for (let id = 0; id < 8001; id += 1) {
        const owner = await MateContract.ownerOf(id);
        if (owner === "0xeF50df13f88070662459863D05cCD9581dfB1085") {
            console.log(id, "KLUBS!");
            results.push({ id, address: (await PFPStoreContract.sales(MateContract.address, id)).seller });
        } else {
            console.log(id);
            results.push({ id, address: owner });
        }
    }
    fs.writeFileSync("./snapshot.json", JSON.stringify(results));
})();