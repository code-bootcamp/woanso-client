import { atom, selector } from "recoil";
import { getAccessToken } from "../getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const deleteModal = atom({
  key: "deleteModal",
  default: false,
});

export const PopupModal = atom({
  key: "PopupModal",
  default: false,
});
