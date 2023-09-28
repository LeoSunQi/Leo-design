/*
 * @Description:
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 00:51:50
 * @LastEditTime: 2023-09-28 19:44:47
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { colors } from 'tailwindcss/colors';

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type'
>

type ButtonHTMLType = 'button' | 'submit' | 'reset'
type ButtonColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
type ButtonSize = 'large' | 'default' | 'small'

interface BasicButtonProps {
  /**
   * @description 是否禁用
   */
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  [key: `data-${string}`]: string
}

export interface ButtonProps extends BasicButtonProps, MergedHTMLAttributes {
  href?: string
  htmlType?: ButtonHTMLType
  /**
   * @description 类型
   * @example | 'default'| 'primary' | 'success' | 'warning' | 'danger' | 'info'
   */
  color?: ButtonColor
  /**
   * @description 大小
   * @example 'large' | 'default' | 'small'
   */
  size?: ButtonSize
  /**
   * @description 是否为朴素按钮
   */
  plain?: boolean
  /**
   * @description 是否为文字按钮
   */
  text?: boolean
  /**
   * @description 是否为圆角
   */
  round?: boolean
  /**
   * @description 是否为链接
   */
  link?: boolean
}

const restColor = (color?: string, custom?: string) => {
  return `bg-${color}-500 shadow-lg shadow-${color}-500/50 hover:bg-${color}-500/90 active:bg-${color}-700 ${custom}`
}

const restClassNmae = (color?: string, custom?: string) => {
  return `text-${color}-500 shadow-lg shadow-${color}-200/50 border-${color}-300 hover:bg-${color}-100/90 ${custom}`
}

const BtnVariants = tv({
  base: 'relative inline-flex items-center justify-center select-none min-h-10 text-sm text-white font-semibold px-6 active:animate-pulse',
  variants: {
    color: {
      default: 'text-slate-500 border border-slate-500 shadow-lg shadow-slate-200/50 hover:bg-slate-100/90 active:bg-slate-300/90',
      primary: restColor('blue'),
      success: restColor('emerald'),
      warning: restColor('orange'),
      danger: restColor('rose'),
      info: restColor('slate')
    },
    size: {
      large: 'text-lg py-2 px-4',
      default: 'text-base py-2 px-4',
      small: 'text-sm py-1 px-2'
    },
    round: {
      true: 'rounded-full',
      false: 'rounded-md'
    },
    plain: {
      true: 'bg-inherit hover:bg-inverse-surface border'
    },
    disabled: {
      true: 'opacity-[.3] cursor-not-allowed'
    },
    text: {
      true: 'shadow-none transition duration-150 ease-in-out bg-inverse border-0 text-current hover:bg-inverse hover:scale-110 active:bg-inverse'
    },
    link: {
      true: 'shadow-none underline decoration-solid bg-inverse border-0 text-sky-500 hover:text-sky-500/90 hover:bg-inverse hover:scale-110 active:bg-inverse'
    }
  },
  compoundVariants: [
    {
      plain: true,
      text: false,
      link: false,
      color: 'primary',
      className: restClassNmae('blue')
    },
    {
      plain: true,
      text: false,
      link: false,
      color: 'success',
      className: restClassNmae('emerald')
    },
    {
      plain: true,
      text: false,
      link: false,
      color: 'warning',
      className: restClassNmae('orange')
    },
    {
      plain: true,
      text: false,
      link: false,
      color: 'danger',
      className: restClassNmae('rose')
    },
    {
      plain: true,
      text: false,
      link: false,
      color: 'info',
      className: restClassNmae('slate')
    }
  ],
  defaultVariants: {
    color: 'default',
    size: 'default',
    round: false,
    text: false,
    link: false
  }
})

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    color,
    size,
    round,
    plain,
    text,
    link,
    htmlType = 'button',
    disabled = false,
    className,
    style,
    children,
    ...rest
  } = props

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props
    if (onClick) {
      onClick(e)
    }
  }

  const TabName = rest.href ? 'a' : 'button'
  return (
    <TabName
      {...rest}
      ref={ref as any}
      className={BtnVariants({
        color,
        size,
        round,
        disabled,
        plain,
        text,
        link,
        className
      })}
      style={style}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </TabName>
  )
})

Button.displayName = 'Leo.Button'

export { Button } 
