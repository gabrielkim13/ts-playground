import { defineConfig } from "vitest/config";

import swc from "unplugin-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [swc.vite(), tsconfigPaths()],
});
