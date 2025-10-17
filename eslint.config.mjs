const eslintConfig = [
    ...compat.extends("next/core-web-vitals"),
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
        ],
    },
    // ✅ Hapus rules TypeScript yang tidak berlaku
];
export default eslintConfig;