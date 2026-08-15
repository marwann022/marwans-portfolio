import { defineConfig } from "vite";

// The portfolio uses Vue's in-file template option, so Vite must bundle
// Vue's compiler-enabled build for production as well as development.
export default defineConfig({
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
});
