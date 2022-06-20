/*
 * @Author: Vinton
 * @Date: 2022-06-15 13:52:07
 * @Description: file content
 */
const fs = require("fs");
function getFolder(path) {
  let components = [];
  const files = fs.readdirSync(path);
  files.forEach(function (item) {
    let stat = fs.lstatSync(path + "/" + item);
    if (stat.isDirectory() === true && item != "components") {
      components.push(path + "/" + item);
      components.push.apply(components, getFolder(path + "/" + item));
    }
  });
  return components;
}
module.exports = {
  description: "创建自定义模块api",
  prompts: [
    {
      type: "list",
      name: "path",
      message: "请选择页面创建文件",
      choices: getFolder("src/service")
    },
    {
      type: "input",
      name: "name",
      message: "请输入api模块名称",
      validate: (v) => {
        if (!v || v.trim === "") {
          return "api模块名称不能为空";
        } else {
          return true;
        }
      }
    }
  ],
  actions: (data) => {
    const actions = [
      {
        type: "add",
        path: `${data.path}/index.ts`,
        templateFile: "plop-tpls/api/index.hbs"
      },
      {
        type: "add",
        path: `${data.path}/types.ts`
      }
    ];
    return actions;
  }
};
