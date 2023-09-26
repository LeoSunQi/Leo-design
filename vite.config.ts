/*
 * @Description: 
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 00:07:21
 * @LastEditTime: 2023-09-26 12:57:54
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { peerDependencies } from './package.json'

const resolve = {
  // resolve alias
  alias: {
    '@': path.resolve(__dirname, '.'),
    leo: path.resolve(__dirname, 'packages/components')
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      resolve,
      publicDir: false,
      build: {
        outDir: 'lib',
        lib: {
          entry: path.resolve(__dirname, 'packages/components/index.ts'),
          name: 'leo',
          fileName: (format) => `leo.${format}.js`
        },
        rollupOptions: {
          external: [...Object.keys(peerDependencies)],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        }
      }
    }
  }
  return {
    resolve,
    plugins: [react()],
  }
})
