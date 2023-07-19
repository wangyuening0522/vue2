import { defineStore } from "pinia";
export const useAsideStore = defineStore("aside", {
  state: () => {
    return {
      isShow: false,
    };
  },
  getters: {},
  actions: {
    changeState() {
        this.isShow = !this.isShow;
    },
  },
});
