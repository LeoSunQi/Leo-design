/*
 * @Description: 
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 23:58:23
 * @LastEditTime: 2023-09-27 15:52:27
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */

import { Button } from 'leo'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4 m-6'>
        <Button type='primary'>primary</Button>
        <Button type='primary' round>primary</Button>
        <Button type='primary' round disabled>primary</Button>
        <Button type='primary' plain>primary</Button>
        <Button type='primary' plain round>primary</Button>
        <Button type='primary' plain round disabled>primary</Button>
      </div>
      <div className='grid grid-cols-4 gap-4 m-6'>
        <Button type='success'>success</Button>
        <Button type='success' round>success</Button>
        <Button type='success' disabled>success</Button>
        <Button type='success' plain>success</Button>
        <Button type='success' plain round>success</Button>
        <Button type='success' plain round disabled>success</Button>
      </div>
      <div className='grid grid-cols-4 gap-4 m-6'>
        <Button type='warning'>warning</Button>
        <Button type='warning' round>warning</Button>
        <Button type='warning' round disabled>warning</Button>
        <Button type='warning' plain>warning</Button>
        <Button type='warning' plain round>warning</Button>
        <Button type='warning' plain round disabled>warning</Button>
      </div>
      <div className='grid grid-cols-4 gap-4 m-6'>
        <Button type='danger'>danger</Button>
        <Button type='danger' round>danger</Button>
        <Button type='danger' round disabled>danger</Button>
        <Button type='danger' plain>danger</Button>
        <Button type='danger' plain round>danger</Button>
        <Button type='danger' plain round disabled>danger</Button>
      </div>
      <div className='grid grid-cols-4 gap-4 m-6'>
        <Button type='info'>info</Button>
        <Button type='info' round>info</Button>
        <Button type='info' round disabled>info</Button>
        <Button type='info' plain>info</Button>
        <Button type='info' plain round>info</Button>
        <Button type='info' plain round disabled>info</Button>
      </div>
      <div className='grid grid-cols-4 gap-4 m-6'>
        <Button>default</Button>
        <Button text>text</Button>
        <Button link>link</Button>
      </div>
    </div>
  )
}

export default Home