/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-09-28 11:18:39
 * @LastEditTime: 2023-09-28 20:08:48
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */

import { Outlet } from 'react-router-dom'
import { Header, Main, Footer } from 'src/components'
import type { IRouterProps } from 'src/router'

const Layout = (props: IRouterProps) => {
  return (
    <div id="leo" className="md:w-full">
      <Header {...props} />
      <Main>
        <div><Outlet /></div>
      </Main>
      <Footer />
    </div>
  )
}

Layout.displayName = 'Leo.Layout'

export { Layout }