/*
 * @Author: Vinton
 * @Date: 2022-06-15 13:52:07
 * @Description: file content
 */
module.exports = function (plop) {
  plop.setWelcomeMessage("请选择需要创建的模式：");
  plop.setGenerator("page", require("./plop-tpls/page/prompt"));
  plop.setGenerator("component", require("./plop-tpls/component/prompt"));
  plop.setGenerator("store", require("./plop-tpls/store/prompt"));
};
