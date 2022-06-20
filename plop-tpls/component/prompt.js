/*
 * @Author: Vinton
 * @Date: 2022-06-15 13:52:07
 * @Description: file content
 */
const path = require("path");
const fs = require("fs");

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
  return components;
}

module.exports = {
  description: "创建页面",
  prompts: [
    {
      type: "list",
      name: "path",
      message: "请选择页面创建目录",
      choices: getFolder("src/components")
    },
    {
      type: "input",
      name: "component",
      message: "请输入vue中组件名称",
      validate: (v) => {
        if (!v || v.trim === "") {
          return "组件名称不能为空";
        } else {
          return true;
        }
      }
    }
  ],
  actions: (data) => {
    let relativePath = path.relative("src/components", data.path);
    const actions = [
      {
        type: "add",
        path: `${data.path}/index.vue`,
        templateFile: "plop-tpls/component/index.hbs",
        data: {
          componentName: `${relativePath}${data.component}`
        }
      }
    ];
    return actions;
  }
};
