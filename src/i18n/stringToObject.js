const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname);

/**
 * 递归读取脚本所在目录下的文件并执行StringToObject操作
 * @param srcPath
 * @returns {{}}
 */
function readSrcFiles(srcPath) {
  const result = {};
  // 同目录下的文件列表
  const files = fs.readdirSync(srcPath);
  for (const file of files) {
    const filePath = path.join(srcPath, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      result[file] = readSrcFiles(filePath);
    } else if (file !== "index.ts" && file.endsWith(".ts")) {
      // 读取文件
      fs.readFile(filePath, "utf8", (err, data) => {
        // 提取JSON部分
        const jsonStartIndex = data.indexOf("{");
        const jsonEndIndex = data.lastIndexOf("}");
        const jsonString = data.substring(jsonStartIndex, jsonEndIndex + 1);
        // key出现没有单引号或双引号包裹+value被引号包裹 的情况表明已经被解析
        const regex =
          /(?<=\b)[a-zA-Z0-9_$]+(?=\b\s*:)\s*:\s*("[^"]*"|'[^']*')/g;
        let match = regex.exec(jsonString);
        if (Array.isArray(match)) return undefined;
        // 删除多余的文本和注释
        data = jsonString
          // .replace(/"/g, '\"') // 将双引号转义 不生效
          .replace(/\/\/.*$/gm, "") // 删除注释部分
          .replace(/['"]\s*\+\s*['"]/g, "") // 删除拼接字符
          .replace(/'/g, '"') // 将单引号替换为双引号
          .replace(/,\s*}/, "}"); // 删除末尾的逗号
        // 尝试解析为JSON
        let parsedData;
        try {
          parsedData = JSON.parse(data);
          console.log(parsedData);
        } catch (error) {
          console.error("Invalid JSON:", error);
        }
        // 拆分键并组装成新对象
        const newObj = splitKeys(parsedData);
        // 将对象格式化后转字符串
        const exp = `export default ${JSON.stringify(newObj, null, 2)};`;
        // 重写文件
        fs.writeFileSync(filePath, exp);
      });
    }
  }

  return result;
}

/**
 * key按指定规则拆分成对象
 * @param obj
 * @returns {{}|*}
 */
function splitKeys(obj) {
  const result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const parts = key.split(".");
      //  根节点带有字符串，说明这个object无法转换
      if (typeof obj[key] === "string" && parts.length <= 1) return obj;
      let currentObj = result;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!currentObj[part]) {
          if (i === parts.length - 1) {
            currentObj[part] = value;
          } else {
            currentObj[part] = {};
          }
        } else if (typeof currentObj[part] === "string") {
          const temp = currentObj[part];
          currentObj[part] = {};
          // 取出上一个层级的字符串
          result[parts.slice(0, i + 1).join(".")] = temp;
        }
        currentObj = currentObj[part];
      }
    }
  }

  return result;
}

const testObj = {
  "menu.system": "系统设置",
  "menu.system.user-management": "用户管理",
  "menu.system.user-creator": "新增用户",
  "menu.system.create-game-currency": "新增游戏币",
  "menu.system.retail-goods": "零售商品",
  "menu.system.role-management": "角色管理",
  "menu.system.create-role": "新增角色",
  "menu.system.coupon": "优惠卷",
  "menu.system.create-seckill": "新增秒杀活动",
  "menu.system.package-ticket-setting": "套票设置",

  "menu.favorite": "收藏",
};
// const newObj = splitKeys(testObj);
// console.log("newObj", newObj);
readSrcFiles(srcPath);
