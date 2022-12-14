import { createStore } from "./store";
export const AppStore = createStore({
  material: {
    typeChemical: "",
    groupName: "",
    chemical: "",
    typeSpectrum: "",
  },
  document: { url: "" },
  contentUrl: "",
});

export const useAppStore = AppStore.useStore;
