import Transfer from "./Transfer/Transfer";

const components = {
  Transfer,
};

export default {
  install(app) {
    for (const comp in components) {
      app.component(comp, components[comp]);
    }
  },
};
