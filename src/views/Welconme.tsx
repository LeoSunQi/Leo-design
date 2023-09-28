/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-09-27 20:41:59
 * @LastEditTime: 2023-09-29 00:34:03
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { motion } from 'framer-motion'
import { LeoLogo } from 'src/components'
import { Button, Card } from 'leo'
import settings from 'src/settings'
import type { IRouterProps } from 'src/router'

const header = () => {
  return <div>customHeader</div>
}

const Welconme = (props: IRouterProps) => {
  const { navigate } = props
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
            <p className="text-4xl font-extrabold my-10 leading-tight">
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
              <Button color="success">组件库 &nbsp; 👍</Button>
              <Button color="info" target="_blank" href={settings.github}>
                👁 &nbsp; Github
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-rows-1 md:grid-flow-col md:gap-3 my-10 px-5">
        <Card
          shadow="always"
          header="title"
          active='button'
          className='my-3'
          onButtonClick={(e) => console.log('button', e)}
        >
          <div>
            <img src="src/assets/leo.svg" height={200} width={200}></img>
          </div>
        </Card>
        <Card shadow="never" className='my-3'>
          <div>
            <img src="src/assets/leo.svg" height={200} width={200}></img>
          </div>
        </Card>
        <Card shadow="hover" className='my-3'>
          <div>
            <img src="src/assets/leo.svg" height={200} width={200}></img>
          </div>
        </Card>
      </div>
    </div>
  )
}

Welconme.displayName = 'Leo.Welconme'
export default Welconme
