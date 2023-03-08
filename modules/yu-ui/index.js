import Transfer from "./components/Transfer/index.js";
import Magnifier from "./components/Magnifier/index.js";

const components = {
  Transfer,
  Magnifier,
};

const install = function (Vue) {
  for (const comp in components) {
    Vue.component(comp, components[comp]);
  }
};

export default {
  install,
};
