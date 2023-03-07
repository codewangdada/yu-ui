// import Magnifier from "./Magnifier";

// export default {
//   install(app) {
//     app.component("Magnifier", Magnifier);
//   },
// };

import Magnifier from './Magnifier';


Magnifier.install = function(Vue) {
  Vue.component('Magnifier', Magnifier);
};

export default Magnifier;