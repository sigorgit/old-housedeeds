import SkyUtil from "skyutil";
import results from "./result.json";

const addresses: string[] = [];
for (const result of results) {
    addresses.push(result.address);
}

let count = 10;
// 메이트, 이메이트 당첨자 중복 제거
const winners: string[] = [
    "0x37b3314119e64bf02f5a5cab0780bbd548c4ef2a",
    "0xa92b463afd2ff7e7fcfe55c7d1e2b1aaeb4c1793",
    "0x37c5d6a8462d371874fa9ddce533b1849c7e2370",
    "0x78447a8d534bf1e68030d4c25aa4339e73a09792",
    "0xc5b4aff98d404d90a07a9d52e20d037936d1fafb",
    "0x6e3b011d3365b15a2c9f363deacc70a5a3ab3d91",
    "0x97a5ca9fdbdaa15eb6f4f31ed9bedc22668c743c",
    "0xaf4079059cd62deefeef1c87c791daab549f4b54",
    "0x2e2422fb2de77b3f931ad89ae75736a1ebd7208a",
    "0x41d08342ee7d55d5845b5ce51f1f5bdcfe63295b",
    "0x6B0c99e3c27EBd288d7fD26460aD977Cc214c305",
    "0xcbEe12CBa1c2e4E5af182a55B941731ca8DaF128",
    "0x7A1936a2E21597C1c53de92b05cdc17e7706b312",
    "0xab05A238C32B5026caD63Fe80b7D6021F141710B",
    "0x3ccAEe40d71a998e0D7dE3F739f35D97733eef25",
    "0x43579f941beaF949F047224abef95e6e7aE3DEF7",
    "0xfd536B5A15BDB87F46D22137953fBF20fabA5820",
    "0x869A83C3D912318fb8FcAC6ADadDaA50c2F373f6",
    "0xE91BA0356f9CAC4EFe520bd50454BF8750780E36",
    "0xf0F88C0bd14d7ef5DcB14A581Fd585c6d327286C",
];
const findWinner = () => {
    const address = addresses[SkyUtil.random(0, addresses.length - 1)];
    if (winners.includes(address) === true) {
        findWinner();
    } else {
        winners.push(address);
        console.log(`${11 - count}번째 당첨자: ${address}`);
        count -= 1;
        if (count > 0) {
            setTimeout(() => {
                findWinner();
            }, 2000);
        }
    }
};
setTimeout(() => {
    findWinner();
}, 2000);