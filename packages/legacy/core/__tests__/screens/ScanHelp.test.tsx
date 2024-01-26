import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import ScanHelp from '../../App/screens/ScanHelp'
import { ConfigurationContext } from '../../App/contexts/configuration'
import configurationContext from '../contexts/configuration'
import { testIdWithKey } from '../../App/utils/testable'

jest.mock('@react-navigation/core', () => {
  return require('../../__mocks__/custom/@react-navigation/core')
})
jest.mock('@react-navigation/native', () => {
  return require('../../__mocks__/custom/@react-navigation/native')
})

describe('ScanHelp Screen', () => {
  test('Renders correctly', async () => {
    const tree = render(
      <ConfigurationContext.Provider value={configurationContext}>
        <ScanHelp />
      </ConfigurationContext.Provider>
    )
    expect(tree).toMatchSnapshot()
  })

  test('Link button exists and is accessible', async () => {
    const tree = render(
      <ConfigurationContext.Provider value={configurationContext}>
        <ScanHelp />
      </ConfigurationContext.Provider>
    )
    const { getByTestId } = tree
    const linkButton = getByTestId(testIdWithKey('WhereToUseLink'))

    fireEvent(linkButton, 'press')

    expect(linkButton).toBeTruthy()
  })
})
