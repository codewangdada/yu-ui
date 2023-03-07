// import Transfer from "./Transfer";

// export default {
//   install(app) {
//     app.component("Transfer", Transfer);
//   },
// };


import Transfer from './Transfer';

Transfer.install = function(Vue) {
  Vue.component('Transfer', Transfer);
};

export default Transfer;