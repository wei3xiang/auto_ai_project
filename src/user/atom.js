// src/userAtom.js
import { atom } from 'recoil';

export const userStateAtom = atom({
  key: 'userStateAtom', // 唯一的 ID
  default: {
    list: [], // 默认的用户列表
    createModel: null,
    updateModel: null,
    detailModel: null,
    removeModel: null,
  },
});
