/*
 * @Description:
 * @Author: yusuqni
 * @Date: 2023-09-22 19:05:57
 * @LastEditTime: 2023-09-28 16:33:47
 * Copyright (c) 2023 by yusuqni, All Rights Reserved.
 */
import { Suspense } from 'react'
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'

import type { NavigateFunction, Location, Params, SetURLSearchParams } from 'react-router-dom'
import routes from './routes'
import settings from 'src/settings'
import type { RouteProvid } from './routes'
import { Loading } from 'src/components'
import { JSX } from 'react/jsx-runtime'

export interface IRouterProps extends RouteProvid {
  navigate?: NavigateFunction
  location?: Location
  params?: Params
  usp?: SetURLSearchParams
}

const ComponentEl = (props: RouteProvid) => {
  const { component: Component, meta } = props

  const { title = settings.title } = meta || {}
  document.title = title

  const [usp] = useSearchParams()
  const options = {
    navigate: useNavigate(),
    location: useLocation(),
    params: useParams(),
    usp,
  }

  return <><Component {...options} {...props} /></>
}

const createRouter = (routes: RouteProvid[]) => {
  return (
    <>
      {routes.map((item, index) => {
        const { path, children } = item
        return (
          <Route path={path} key={index} element={<ComponentEl {...item} />}>
            {Array.isArray(children) ? createRouter(children) : null}
          </Route>
        )
      })}
    </>
  )
}

const RouterView = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>{createRouter(routes)}</Routes>
    </Suspense>
  )
}

export const WithRouter = (Component: any) => {
  return function HOC(props: JSX.IntrinsicAttributes) {
    const [usp] = useSearchParams()
    const options = {
      navigate: useNavigate(),
      location: useLocation(),
      params: useParams(),
      usp,
    }
    
    return <Component {...options} {...props} />
  }
}

export default RouterView
