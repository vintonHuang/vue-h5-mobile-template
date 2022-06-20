/*
 * @Author: Vinton
 * @Date: 2022-06-14 21:59:21
 * @Description: file content
 */
module.exports = {
  printWidth: 140, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  semi: true, // 句尾添加分号
  vueIndentScriptAndStyle: true, // 是否给vue中的 <script> and <style>标签加缩进
  singleQuote: false, // 使用单引号代替双引号
  trailingComma: "none", // 选项：none|es5|all， 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict", // 是否显示HTML文件中的空格。 有效选项： 'css' - 尊重CSS display属性的设置。 'strict' - 空格被认为是敏感的。 'ignore' - 空格被认为是不敏感的
  endOfLine: "auto",
  bracketSpacing: true, // 是否在对象的{}内部两侧加空格 true - { foo: bar } false - {foo: bar}.
  quoteProps: "as-needed" // 对象的key是否用引号括起来,有三种选项 "as-needed"|"consistent"|"preserve"
};
