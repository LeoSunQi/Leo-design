/*
 * @Description: 
 * @Author: yusuqni
 * @Date: 2023-09-22 19:06:27
 * @LastEditTime: 2023-10-06 15:31:12
 * Copyright (c) 2023 by yusuqni, All Rights Reserved.
 */
import { lazy } from "react"
import { Layout } from "src/views/Layout"
import { Navigate } from 'react-router-dom'

export interface RouteProvid {
  path?: string
  name?: string
  component?: React.ComponentType | null | any
  children?: RouteProvid[]
  meta?: Record<string, string>
}

const routes: RouteProvid[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => <Navigate to='/welconme' />
      },
      {
        path: '/welconme',
        name: 'Welconme',
        component: lazy(() => import('src/views/Welconme')),
        meta: { title: '欢迎来到 Leo Qi Design' }
      },
      {
        path: '/home',
        name: 'Home',
        component: lazy(() => import('src/views/home')),
        meta: { title: '开始' }
      },
      {
        path: '/overview',
        name: 'Overview',
        component: lazy(() => import('src/views/overview')),
        meta: { title: '组件总览' }
      }
    ]
  }
]

export default routes
