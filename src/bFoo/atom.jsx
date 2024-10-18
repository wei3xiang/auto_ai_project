import { atom } from 'recoil';

export const bFooStateAtom = atom({
key: `bFooStateAtom`,
default: {
    list: [],
    createModel: null,
    updateModel: null,
    disableModel: null,
    removeModel: null,
},
});
