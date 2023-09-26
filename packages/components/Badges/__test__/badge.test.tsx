/*
 * @Description: 
 * @Author: error: git config user.name & please set dead value or install git
 * @Date: 2023-09-26 11:44:48
 * @LastEditTime: 2023-09-26 12:55:53
 * Copyright (c) 2023 by error: git config user.name & please set dead value or install git, All Rights Reserved.
 */
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Badge from '../index'

describe('<Badge />', () => {
  test('should render', () => {
    render(<Badge title='hi'>test</Badge>)
    expect(screen.getByText(/hi/i)).toBeDefined()
  })
})