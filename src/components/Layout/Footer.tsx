/*
 * @Description:
 * @Author: LeoSunQi
 * @Date: 2023-09-28 11:09:04
 * @LastEditTime: 2023-09-28 17:53:42
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import React, { forwardRef } from 'react'
import settings from 'src/settings'

interface MainProps {
  title?: string
  copyright?: string
  copyrightHref?: string
  children?: React.ReactNode
}

const Footer = forwardRef<HTMLDivElement, MainProps>((props, ref) => {
  const {
    title = document.title,
    copyright = settings.copyright,
    copyrightHref
  } = props

  const TagName = copyrightHref ? 'a' : 'span'

  return (
    <div
      ref={ref}
      className="fixed w-full bottom-0 z-30 h-16 bg-surface/25 px-2 shadow backdrop-blur"
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className='mx-4'>{title}</span>
        <TagName>{copyright}</TagName> 
      </div>
    </div>
  )
})

Footer.displayName = 'Leo.Footer'

export { Footer }
