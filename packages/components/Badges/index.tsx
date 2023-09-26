/*
 * @Description: 
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 10:14:02
 * @LastEditTime: 2023-09-26 12:52:00
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import React from "react"

interface BadgeProps {
  title?: string
  children?: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const { title, children } = props
  return <div ref={ref} {...props}>
    Badge: {title}
    {children}
  </div>
})

Badge.displayName = 'Leo.Badge'

export default Badge