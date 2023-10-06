/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-09-27 20:41:59
 * @LastEditTime: 2023-10-06 15:23:20
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { motion } from 'framer-motion'
import { LeoLogo } from 'src/components'
import { Button, Card } from 'leo'
import settings from 'src/settings'
import type { IRouterProps } from 'src/router'

const Welconme = (props: IRouterProps) => {
  const { navigate } = props

  const BgStyle = {
    backgroundImage: 'url("src/assets/default-leo.svg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  const cards = [
    {
      id: 0,
      title: '指南',
      text: '了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。'
    },
    {
      id: 1,
      title: '组件',
      text: '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。'
    },
    {
      id: 2,
      title: '资源',
      text: '下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。'
    }
  ]

  return (
    <div className="container flex flex-col">
      <div className="md:flex items-center">
        <div className="mx-auto md:w-80">
          <LeoLogo />
        </div>
        <div className="text-4xl font-extrabold md:mx-auto px-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: {
                duration: 2,
                ease: [1, 0, 0.8, 1]
              }
            }}
          >
            <p className="text-4xl dark:text-white font-extrabold my-10 leading-tight">
              欢迎来到 <span className="text-blue-500">Leo Qi </span>
              世界，在这里有关于 Leo 的一切！
              <br />
              <span className="text-2xl text-gray-300">
                Welcome to the world of Leo Qi, where there is all about Leo!
              </span>
            </p>
            <div className="flex items-center sm:gap-4">
              <Button color="primary" onClick={() => navigate!('/home')}>
                开始旅行 &nbsp; 👉
              </Button>
              <Button color="success" onClick={() => navigate!('/overview')}>组件库 &nbsp; 👍</Button>
              <Button color="info" target="_blank" href={settings.github}>
                👁 &nbsp; Github
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="grid md:grid-cols-3 gap-3 my-10 px-5"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: 'easeInOut' },
          fill: {
            duration: 2,
            ease: [1, 0, 0.8, 1]
          }
        }}
      >
        {cards.map((item) => {
          return (
            <Card
              key={item.id}
              border
              shadow="hover"
              className="my-3"
              style={BgStyle}
            >
              <div className="min-h-[170px]"></div>
              <div className="container mx-auto text-center m-full box-border p-5">
                <p className="text-2xl mb-5">{item.title}</p>
                <p>{item.text}</p>
              </div>
            </Card>
          )
        })}
      </motion.div>
    </div>
  )
}

Welconme.displayName = 'Leo.Welconme'
export default Welconme
