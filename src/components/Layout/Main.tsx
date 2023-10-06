/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-09-28 11:03:00
 * @LastEditTime: 2023-10-05 18:59:41
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import React, { forwardRef } from 'react'

interface MainProps {
  children?: React.ReactNode
}

const Main = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  return (
    <div ref={ref} className="container mx-auto overscroll-contain py-10">
      {props.children}
    </div>
  )
})

Main.displayName = 'Leo.Main'

export { Main }
