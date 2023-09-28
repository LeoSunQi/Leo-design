/*
 * @Description:
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 23:58:23
 * @LastEditTime: 2023-09-28 20:59:55
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */

import { Button, type ButtonProps } from 'leo'

const Home = () => {
  const btns = [
    {
      color: 'primary',
      className: 'mx-[6px]',
    },
    {
      color: 'success',
      className: 'mx-[5px]',
    },
    {
      color: 'warning',
      className: 'mx-[4px]',
    },
    {
      color: 'danger',
      className: 'mx-[3px]',
    },
    {
      color: 'info',
      className: 'mx-[2px]',
    },
  ]

  return (
    <div className="container text-center">
      {
        btns.map(item => {
          const { color, className } = item as ButtonProps
          return <div className="m-6 mx-">
          <Button color={color} className={className}>
            primary
          </Button>
          <Button color={color} size="large" round className={className}>
            large
          </Button>
          <Button color={color} size="small" round disabled className={className}>
            small
          </Button>
          <Button color={color} size="small" plain round disabled className={className}>
            disabled
          </Button>
          <Button color={color} size="large" plain round className={className}>
            round
          </Button>
          <Button color={color} plain className={className}>
            plain
          </Button>
        </div>
        })
      }

      <div className="m-6">
        <Button className='mx-1'>default</Button>
        <Button text className='mx-1'>text</Button>
        <Button link className='mx-1'>link</Button>
      </div>
    </div>
  )
}

export default Home
