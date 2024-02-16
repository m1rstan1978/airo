import { createStore } from 'vuex';
import price from './modules/price';

export default createStore({
  state() {
    return {
      price: 0,
      priceEn: 0,
      link: '',
      games: '',
      strim: '',
      pc: '',
      overclock: false,
    };
  },
  modules: {
    price,
  },
});
