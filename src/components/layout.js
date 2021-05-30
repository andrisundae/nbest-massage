/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ChatIcon } from "@heroicons/react/outline"

import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import { useSticky } from "../hooks"
import '../utils/fontawesome'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { isSticky, element } = useSticky()

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <Header sticky={isSticky} stickyRef={element} siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        {children}
      </Content>
      <Footer />
      <div className="fixed right-3 bottom-8 md:right-0 md:bottom-10 z-30">
        <a
          href="https://api.whatsapp.com/send?phone=6281236583768&text=Hallo, saya ingin tanya tentang massage."
          className="h-10 w-10 md:w-full flex items-center justify-center border border-transparent text-base font-medium rounded-full md:px-3 md:rounded-r-none shadow-lg text-white bg-green-500 hover:bg-green-600"
        >
          <ChatIcon className="h-5 w-5" aria-hidden="true" />
          <span className="hidden md:inline-block md:ml-1">Chat kami di whatsapp</span>
        </a>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
