/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-09-28 10:44:45
 * @LastEditTime: 2023-09-28 20:07:54
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */

import { motion } from 'framer-motion'
import type { IRouterProps } from 'src/router'

const Header = (props: IRouterProps) => {
  const { navigate } = props

  return (
    <div className="sticky top-0 z-30 h-16 bg-surface/25 px-2 shadow backdrop-blur overflow-hidden">
      <div className="flex flex-row h-full items-center">
        <div
          className="flex flex-row h-full items-center flex-2 mx-8"
          onClick={() => navigate!('/')}
        >
          <motion.div
            animate={{
              scale: [0.5, 0.8, 1, 0.8, 0.5],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%']
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <img src="src/assets/leo.svg" alt="" width="48" height="48" />
          </motion.div>
          <div>
            <img
              src="src/assets/leotext.svg"
              alt="leoqi"
              className="mx-2 m-auto"
            />
          </div>
        </div>
        <div className="flex-1 h-full"></div>
      </div>
    </div>
  )
}

Header.displayName = 'Leo.Header'

export { Header }
