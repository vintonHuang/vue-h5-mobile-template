/*
 * @Author: Vinton
 * @Date: 2022-06-15 13:52:07
 * @Description: file content
 */
const path = require("path");
const fs = require("fs");
const map = ['src/components/BaseComponents','src/components/BusinessComponents']
function getFolder(path) {
  let components = [];
  const files = fs.readdirSync(path);
  files.forEach(function (item) {
    let stat = fs.lstatSync(path + "/" + item);
    if (stat.isDirectory() === true) {
      components.push(path + "/" + item);
      components.push.apply(components, getFolder(path + "/" + item));
    }
  });
  return components.filter(items => {
    if(!map.includes(items))return items
  });
}

module.exports = {
  description: "创建公共组件",
  prompts: [
    {
      type: "list",
      name: "path",
      message: "请选择公共组件创建目录",
      choices: getFolder("src/components")
    }
  ],
  actions: (data) => {
    let relativePath = path.relative("src/components", data.path);
    let list = relativePath.split('/')
    const actions = [
      {
        type: "add",
        path: `${data.path}/index.vue`,
        templateFile: "plop-tpls/component/index.hbs",
        data: {
          componentName: `${list[list.length - 1]}`
        }
      }
    ];
    return actions;
  }
};
