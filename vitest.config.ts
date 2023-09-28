/*
 * @Description: 
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 12:58:28
 * @LastEditTime: 2023-09-28 09:42:45
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['packages/**/*.__test__', 'packages/**/dist', 'src/**/dist']
  }
})