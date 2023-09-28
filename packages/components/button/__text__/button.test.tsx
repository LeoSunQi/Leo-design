/*
 * @Description:
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-27 10:27:14
 * @LastEditTime: 2023-09-28 16:53:36
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import { describe, test, expect, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import {Button} from '..'
import type { ButtonProps } from '..'

describe('Button test', () => {
  test('Button test', async () => {
    const props: ButtonProps = {
      children: 'button',
      onClick: vi.fn(),
    }
    render(<Button {...props} />)
    const button = screen.getByText('button')
    fireEvent.click(button)
    expect(props.onClick).toHaveBeenCalled()
  })
})
