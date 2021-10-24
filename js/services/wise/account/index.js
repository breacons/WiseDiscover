import axios from "axios";
import { WISE_TOKEN, WISE_URL } from "../../../../config";

const config = {
  headers: { Authorization: `Bearer ${WISE_TOKEN}` },
};

export const getAccount = async (profileId) => {
  const { data } = await axios.get(
    `${WISE_URL}/borderless-accounts?profileId=${profileId}`,
    config
  );
  return data;
};

export const getBalance = async (profileId, borderlessAccountId) => {
  const { data } = await axios.get(
    `${WISE_URL}/profiles/${profileId}/borderless-accounts/${borderlessAccountId}/statement.json`,
    config
  );
  return data;
};
