import { defineConfig } from "@pubm/core";

export default defineConfig({
  packages: [{ path: ".", registries: ["jsr"] }],
  branch: "main",
});
