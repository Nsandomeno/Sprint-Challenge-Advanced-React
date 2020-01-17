import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { getByText } from '@testing-library/react';

afterEach(rtl.cleanup)

test('renders data', () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.getByTestId('test')
    expect(element).toBeVisible()
})

test('button renders', () => {
  const buttonWrap = rtl.render(<App />)
  const btn = buttonWrap.getByTestId('test-btn')
  expect(btn).toBeVisible()
})

test('theme is changing', () => {
  const wrap = rtl.render(<App />)

  // let light = 'light'


  let btnText = wrap.getByTestId('test-btn')

  
  rtl.fireEvent.click(btnText)
  expect(btnText).toHaveTextContent('Toggle: light')
 
})
