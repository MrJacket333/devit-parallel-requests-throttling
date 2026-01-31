import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import process from 'node:process';

const __dirname = import.meta.dirname;

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@atoms': path.resolve(__dirname, './src/atoms'),
        '@molecules': path.resolve(__dirname, './src/molecules'),
        '@organisms': path.resolve(__dirname, './src/organisms'),
        '@api': path.resolve(__dirname, './src/api')
      }
    },
    server: {
      host: true,
      port: env.PORT ?? 3001
    }
  })
}
