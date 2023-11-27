import { Horizon } from "stellar-sdk";

const NETWORK_URL = "https://horizon.stellar.org";
const STELLAR_ADDRESS =
  "GC4IZLJT3FEYA43JSSVELAMT2QUQMC3XARWDGFDB7FWBWW6MOD3LNPLV";

const server = new Horizon.Server(NETWORK_URL);

export const getStellarAccountInfo = async () => {
  try {
    const account = await server.loadAccount(STELLAR_ADDRESS);
    console.log("account: ", account);
    return account.id;
  } catch (e) {
    return "no data";
  }
};
