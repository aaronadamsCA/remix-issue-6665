/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerBroadcastDelay: 1000,
  server: "./server.ts",
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["worker"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverNodeBuiltinsPolyfill: {
    modules: {
      fs: "empty",
      path: true,
      process: true,
      tty: true,
      url: true,
    },
  },
  serverPlatform: "neutral",
  future: {
    v2_dev: {
      command: "wrangler pages dev public/ --compatibility-date=2023-07-10",
    },
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
