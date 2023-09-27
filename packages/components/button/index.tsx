/*
 * @Description:
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 00:51:50
 * @LastEditTime: 2023-09-27 15:55:22
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import React from 'react'
import { tv } from 'tailwind-variants'

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type'
>

type ButtonHTMLType = 'button' | 'submit' | 'reset'
type ButtonType =
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
  herf?: string
  htmlType?: ButtonHTMLType
  /**
   * @description 类型
   * @example | 'default'| 'primary' | 'success' | 'warning' | 'danger' | 'info'
   */
  type?: ButtonType
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

const BtnVariants = tv({
  base: 'relative inline-flex items-center justify-center select-none min-h-10 text-sm px-6',
  variants: {
    type: {
      default: 'border text-slate-500 border-slate-500 hover:bg-slate-100/90',
      primary: 'bg-sky-500 hover:bg-sky-500/90 text-white',
      success: 'bg-emerald-500 hover:bg-emerald-500/90 text-white',
      warning: 'bg-orange-500 hover:bg-orange-500/90 text-white',
      danger: 'bg-rose-500 hover:bg-rose-500/90 text-white',
      info: 'bg-slate-500 hover:bg-slate-500/90 text-white'
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
      true: 'bg-transparent hover:bg-inverse-surface border'
    },
    disabled: {
      true: 'opacity-[.3] cursor-not-allowed'
    },
    text: {
      true: 'transition duration-150 ease-in-out bg-transparent border-0 text-current hover:bg-transparent hover:scale-110'
    },
    link: {
      true: 'underline decoration-solid bg-transparent border-0 text-sky-500 hover:text-sky-500/90 hover:bg-transparent hover:scale-110'
    }
  },
  compoundVariants: [
    {
      plain: true,
      text: false,
      link: false,
      type: 'primary',
      className: 'text-sky-500 border-sky-300 hover:bg-sky-100/90'
    },
    {
      plain: true,
      text: false,
      link: false,
      type: 'success',
      className: 'text-emerald-500 border-emerald-300 hover:bg-emerald-100/90'
    },
    {
      plain: true,
      text: false,
      link: false,
      type: 'warning',
      className: 'text-orange-500 border-orange-300 hover:bg-orange-100/90'
    },
    {
      plain: true,
      text: false,
      link: false,
      type: 'danger',
      className: 'text-rose-500 border-rose-300 hover:bg-rose-100/90'
    },
    {
      plain: true,
      text: false,
      link: false,
      type: 'info',
      className: 'text-slate-500 border-slate-300 hover:bg-slate-100/90'
    }
  ],
  defaultVariants: {
    type: 'default',
    size: 'default',
    round: false,
    text: false,
    link: false
  }
})

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    type,
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
    disabled && onClick && onClick(e)
  }

  const TabName = rest.herf ? 'a' : 'button'
  return (
    <TabName
      {...rest}
      ref={ref as any}
      className={BtnVariants({
        type,
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

export default Button
