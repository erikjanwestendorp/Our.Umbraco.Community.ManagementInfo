import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/management-info.ts",
            formats: ["es"],
        },
        outDir: "../wwwroot/App_Plugins/ManagementInfo", 
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            external: [/^@umbraco/],
            onwarn: () => { },
        },
    },
});