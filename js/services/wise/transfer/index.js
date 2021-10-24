import axios from "axios";
import { WISE_TOKEN, WISE_URL } from "../../../../config";

const config = {
  headers: { Authorization: `Bearer ${WISE_TOKEN}` },
};

export const createQuote = async (params) => {
  const { data } = await axios.post(`${WISE_URL}/quotes`, params, config);
  return data;
};

export const createAccount = async (params) => {
  const { data } = await axios.post(`${WISE_URL}/accounts`, params, config);
  return data;
};

export const createTransfer = async (params) => {
  const { data } = await axios.post(`${WISE_URL}/transfers`, params, config);
  return data;
};

export const fundTransfer = async (params, profileId, transferId) => {
  const { data } = await axios.post(`${WISE_URL}/profiles/${profileId}/transfers/${transferId}/payments`, params, config);
  return data;
};

