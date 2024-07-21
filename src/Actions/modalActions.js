import { OPEN_MODAL } from "../Types/modalTypes";
export const openModal = (openClose, content) => {
  return {
    type: OPEN_MODAL,
    payload: {
      openClose,
      content,
    },
  };
};