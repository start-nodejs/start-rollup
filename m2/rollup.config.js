import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: [
    {
      format: "esm",
      file: "dist/bundle+m1.js"
    },
    {
      format: "cjs",
      file: "dist/bundle+m1.cjs.js"
    },
    {
      format: "iife",
      file: "dist/bundle+m1.iife.js",
      // 【可选配置】If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.
      name: "m2"
    },
    {
      format: "amd",
      file: "dist/bundle+m1.amd.js"
    },
    {
      format: "umd",
      file: "dist/bundle+m1.umd.js",
      // umd 格式必须指定 name，否则报错
      name: "m2"
    }
  ],
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
