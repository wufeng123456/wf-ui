import Button from "./button";
import Badge from "./badge";

let components = {
  Button,
  Badge
}

function install (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export default {
  install
}