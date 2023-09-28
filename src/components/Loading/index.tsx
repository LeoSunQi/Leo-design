/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-09-28 11:29:37
 * @LastEditTime: 2023-09-28 18:56:49
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */

import { LeoLogo } from 'src/components/Logo'

const Loading = () => {
  return <div className='w-full h-full'>
    <div className='flex justify-center'>
      <LeoLogo width={200} repeatType={true} />
    </div>
    <div className='my-5 text-blue-500 text-lg text-center'>正在疯狂为您加载中...</div>
  </div>
}

Loading.displayName = 'Leo.Loading'

export { Loading }