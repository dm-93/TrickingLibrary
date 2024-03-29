﻿import $axios from "core-js/internals/internal-state";

const initState = () => ({
  tricks: []
});

export const state = initState;

export const mutations = {
  setTricks(state, {tricks}) {
    state.tricks = tricks;
  },
  reset(state) {
    Object.assign(state, initState())
  }
}

export const actions = {
  async fetchTricks({commit}) {
    const tricks = (await this.$axios.get("/api/tricks")).data;
    console.log("tricks: ", tricks);
    commit("setTricks", {tricks});
  }
}
