import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import components from "unplugin-vue-components/vite";
import autoImport from "unplugin-auto-import/vite";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      vue(),
      components({
        resolvers: [VarletUIResolver()],
      }),
      autoImport({
        resolvers: [VarletUIResolver({ autoImport: true })],
      }),
    ],
    server: {
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.split("/api")[1],
        },
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
