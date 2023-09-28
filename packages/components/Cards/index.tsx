/*
 * @Description:
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 10:10:10
 * @LastEditTime: 2023-09-28 23:57:38
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import React, { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { JSX } from 'react/jsx-runtime'
import { Button } from '../Button'

const variants = tv({
  base: 'relative inline-flex flex-col rounded-xl border',
  variants: {
    shadow: {
      hover: 'hover:shadow-lg',
      always: 'shadow-xl',
      never: 'shadow-none'
    }
  },
  defaultVariants: {
    shadow: 'always'
  }
})

interface BasicCardProps {
  header?: string
  active?: string
  customHeader?: () => JSX.Element
  shadow?: 'always' | 'never' | 'hover'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => void
}

const CardHeader = (props: BasicCardProps) => {
  const { header, active, onButtonClick } = props
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-1 px-3 py-4">
        <span className="text-xl">{header}</span>
        <div className="text-end">
          <Button text size="small" onClick={onButtonClick?.bind(this)}>
            {active}
          </Button>
        </div>
      </div>
      <div className="w-full border-slate-200 border-b"></div>
    </>
  )
}

const Card = forwardRef<HTMLDivElement, BasicCardProps>((props, ref) => {
  const {
    header,
    customHeader,
    active,
    shadow,
    children,
    className,
    style,
    onButtonClick,
    ...rest
  } = props
  if (customHeader && typeof customHeader !== 'function') {
    throw new Error(
      'Card customHeader must be a function and return must be a JSX.Element'
    )
  }
  return (
    <div
      {...rest}
      ref={ref}
      className={variants({ shadow, className })}
      style={style}
    >
      {customHeader ? (
        customHeader()
      ) : header ? (
        <CardHeader
          header={header}
          active={active}
          onButtonClick={onButtonClick}
        />
      ) : null}
      <div className="relative overflow-hidden rounded-t-xl my-5">
        {children}
      </div>
    </div>
  )
})

Card.displayName = 'Leo.Card'

export { Card }
