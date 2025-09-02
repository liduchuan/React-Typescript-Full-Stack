import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig, defineConfig } = await import("vite");
    const tailwindcss = (await import("@tailwindcss/vite")).default;
    return mergeConfig(
      config,
      defineConfig({
        plugins: [tailwindcss()],
      })
    );
  },
};
export default config;
