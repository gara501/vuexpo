/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    welcome: 'Vuex, state management finally!',
    postFontSize: 1,
    color: 'rgb(233, 23, 22)',
    counter: 0,
  },
  mutations: {
    INCREASE_FONT(state, payload) {
      state.postFontSize += payload;
    },
    CHANGE_COLOR(state, payload) {
      state.color = payload;
    },
    CHANGE_COUNTER(state, payload) {
      state.counter += payload;
    },
  },
  actions: {
    increment(state, payload) {
      console.log(payload);
      state.commit('CHANGE_COUNTER', payload);
    },
    increaseFont(state, payload) {
      state.commit('INCREASE_FONT', payload);
    },
    changeColor(state) {
      const rgbn = [];
      for (let i = 0; i <= 2; i++) {
        rgbn.push(Math.floor(Math.random() * (255 - 0)) + 0);
      }
      const rgb = rgbn.join(',');
      const formatted = `rgb(${rgb.split(',')})`;
      state.commit('CHANGE_COLOR', formatted);
    },
  },
  getters: {
    message(state) {
      return state.message;
    },
    count(state) {
      return state.counter;
    },
    color(state) {
      return state.color;
    },
    postFontSize(state) {
      return state.postFontSize;
    },
  },
});
