/*
 * @Description: 
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 08:46:46
 * @LastEditTime: 2023-09-27 00:03:13
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { withMaterialColors } from 'tailwind-material-colors'
import typography from '@tailwindcss/typography'

export default withMaterialColors({
  darkMode: 'class',
  content: [
    './packages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,md,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: { ...colors }
    },
  },
  plugins: [typography],
}, { primary: '#006a6a' }) satisfies Config