// // import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

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
//       input:  "./frontend/src/main.jsx", // Adjust the path to your entry file
//     },
//   },
// });

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: "./frontend/src/main.jsx", // Specify the path relative to vite.config.js
    },
  },
});