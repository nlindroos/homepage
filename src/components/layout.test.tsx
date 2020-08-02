import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'

import Layout, { StaticQuery } from './layout'

beforeEach(() => {
  ;(useStaticQuery as jest.Mock<StaticQuery>).mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: `Default Starter`,
      },
    },
  }))
})

test(`renders a header`, () => {
  const { container } = render(
    <Layout>
      <main>
        <h1>hello</h1>
      </main>
    </Layout>,
  )

  expect(container.querySelector(`header`)).toBeInTheDocument()
})
