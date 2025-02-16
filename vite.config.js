// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    async () => {
      const tailwindcss = await import("@tailwindcss/vite").then(
        (m) => m.default
      );
      return tailwindcss();
    },
  ],
});