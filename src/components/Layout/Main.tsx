/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-09-28 11:03:00
 * @LastEditTime: 2023-09-28 18:01:45
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import React, { forwardRef } from 'react'

interface MainProps {
  children?: React.ReactNode
}

const Main = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  return (
    <div ref={ref} className="container mx-auto overscroll-contain my-5 pb-16">
      {props.children}
    </div>
  )
})

Main.displayName = 'Leo.Main'

export { Main }
