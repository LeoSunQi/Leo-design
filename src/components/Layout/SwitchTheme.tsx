/*
 * @Description: 
 * @Author: LeoSunQi
 * @Date: 2023-10-05 19:24:30
 * @LastEditTime: 2023-10-05 20:18:37
 * Copyright (c) 2023 by LeoSunQi, All Rights Reserved.
 */
import { Button } from "leo"
import { useState, useEffect } from "react"

const SwitchTheme = () => {
  const [mode, setMode] = useState('')

  const initTheme = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark')
      document.documentElement.classList.add('dark')
    } else {
      setMode('light')
      document.documentElement.classList.remove('dark')
    }
  }
  
  const toggleMode = () => {
    const classList = document.querySelector('html')!!.classList
    classList.toggle('dark')
    if (mode == 'dark') {
      setMode('light')
      localStorage.setItem('theme', 'light')
    } else {
      setMode('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  
  const toggleTheme = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const isAppearanceTransition =
      (document as any).startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      toggleMode()
      return
    }

    const x = e.clientX
    const y = e.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )
    const transition = (document as any).startViewTransition(() => {
      toggleMode()
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      document.documentElement.animate(
        {
          clipPath: mode == 'dark' ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-out',
          pseudoElement:
            mode == 'dark'
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)'
        }
      )
    })
  }

  useEffect(() => {
    initTheme()
  }, [mode])

  return <Button text onClick={(e) => toggleTheme(e)}>{ mode === 'dark' ? '☀️' : '🌛' }</Button>
}

SwitchTheme.displayName = 'Leo.SwitchTheme'

export { SwitchTheme }