import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    file: "dist/bundle+m1.js",
    format: "esm"
  },
  plugins: [
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    resolve({
      // 检查要 resolve 的模块必须是 ES2015 modules
      modulesOnly: true,
      // 只 resolve 指定的模块，其余的保留为 external 依赖
      resolveOnly: ["m1"]
    })
  ]
  //external: ["m1"] // <-- suppresses the warning
};
