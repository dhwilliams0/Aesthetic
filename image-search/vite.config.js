// import { defineConfig } from 'vite';
// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: "./frontend/src/main.jsx",
//     },
//   },
// }); 
// // // import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// import { defineConfig } from "vite";

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })

// //vite.config.js
// import { defineConfig } from 'vite';
// // import Main from "./frontend/src/main";
// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input:  "./frontend/src/main.jsx", 
//     },
//   },
// });

// export default {
//   build: {
//     chunkSizeWarningLimit: 1000, 
//   },
// };

// export default {
//   build: {
//     chunkSizeWarningLimit: 1000, // set your desired size limit in kilobytes
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom'],
//         },
//       },
//     },
//   },
// };
// import {defineConfig} from "vite"
// import vue from "@vitejs/plugin-react"
// export default defineConfig({
//   base: "/test-deploy/",
//   plugins:[()]
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});
