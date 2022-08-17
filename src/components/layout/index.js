/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp"

import Header from "../header"
import Content from "../content"
import Footer from "../footer"
import { useSticky } from "../../hooks"
// import "../../utils/fontawesome"

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
      <Header
        sticky={isSticky}
        stickyRef={element}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <Content>{children}</Content>
      <Footer />
      <div className="fixed w-36 right-1 bottom-5 md:right-0 md:bottom-10 z-30">
        <a
          href="https://api.whatsapp.com/send?phone=6281236583768&text=Hallo NBest, I Want To Book a Massage."
          className="py-1 animate-bounce h-5 w-full flex items-center justify-center border border-transparent text-base font-medium rounded-full md:rounded-r-none shadow-lg text-white bg-green-500 hover:bg-green-600"
        >
          <span className="mr-2">Contact Us</span>
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
