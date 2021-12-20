/**
 * @jest-environment jsdom
 */

import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import SEO from "../Seo"

describe("SEO component", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Fencing Company In Germiston`,
          description: `Official website for fencing installation company in Germistone, Gauteng.`,
          author: `@kudzaim.codes`
        },
      },
    })
  })

  it("renders the tests correctly", () => {
    const mockTitle = "MJ Fencing SA (PTY) LTD | Fencing Company In Germiston"
    const mockDescription = "Official website for fencing installation company in Germistone, Gauteng."
    const mockAuthor = "@kudzaim.codes"

    render(<SEO title="MJ Fencing SA (PTY) LTD" />)
    const { title, metaTags } = Helmet.peek()

    expect(title).toBe(mockTitle)
    expect(metaTags[0].content).toBe(mockDescription)
    expect(metaTags[5].content).toBe(mockAuthor)
    expect(metaTags.length).toBe(8)
  })
})