import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.REACT_APP_FIREBASE_API_KEY': JSON.stringify(env.REACT_APP_FIREBASE_API_KEY),
//       'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.REACT_APP_FIREBASE_AUTH_DOMAIN),
//       'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(env.REACT_APP_FIREBASE_PROJECT_ID),
//       'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(env.REACT_APP_FIREBASE_STORAGE_BUCKET),
//       'process.env.REACT_APP_MESSAGING_SENDER': JSON.stringify(env.REACT_APP_MESSAGING_SENDER),
//       'process.env.REACT_APP_APP_ID': JSON.stringify(env.REACT_APP_APP_ID),
//       'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(env.REACT_APP_FIREBASE_MEASUREMENT_ID),
//     },
//     plugins: [react()],
//   }
// })



// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
  }
})