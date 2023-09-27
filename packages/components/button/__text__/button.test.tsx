/*
 * @Description:
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-27 10:27:14
 * @LastEditTime: 2023-09-27 15:29:11
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import { describe, test, expect, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import Button from '..'
import type { ButtonProps } from '..'

describe('Button test', () => {
  test('默认 button', () => {
    const defaultValue = {
      type: 'default',
      size: 'default',
      round: false,
      plain: false,
      text: false,
      link: false,
      disabled: false
    } as ButtonProps
    const handleCallback = vi.fn(() => 0)
    render(
      <Button {...defaultValue} onClick={handleCallback}>
        defaultButton
      </Button>
    )

    const element = screen.getByText('defaultButton')
    handleCallback()
    expect(element.tagName).toBe('BUTTON')
    // 是否点击了，并返回了 0
    expect(handleCallback).toHaveBeenCalled()
    expect(handleCallback).toHaveReturnedWith(0)
  })

  test('a 标签 button', () => {
    render(
      <Button herf="#" link>
        Link
      </Button>
    )
    const element = screen.getByText('Link')
    expect(element.tagName).toEqual('A')
  })

  test('禁用了，不能点击！', () => {
    const handleCallback = vi.fn()
    render(<Button disabled onClick={handleCallback}></Button>)
    const element = screen.getByRole('button')
    expect(element.hasAttribute('disabled')).toBeTruthy()
    fireEvent.click(element)
    expect(handleCallback).not.toHaveBeenCalled()
  })
})
