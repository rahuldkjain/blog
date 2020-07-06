/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faInstagram, faDev } from '@fortawesome/free-brands-svg-icons'
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter,
            dev,
            instagram,
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong> &nbsp;
        <a href={`https://dev.to/${social.dev}`} target="_blank">
          <FontAwesomeIcon icon={faDev} style={{
            color: '#000000',
            fontSize: '20px',
            textDecoration: 'none',
            boxShadow: 'none'
          }} />
        </a> &nbsp;
        <a href={`https://github.com/${social.github}`} target="_blank">
          <FontAwesomeIcon icon={faGithub} style={{
            color: '#000000',
            fontSize: '20px',
            textDecoration: 'none',
            boxShadow: 'none'
          }} />
        </a> &nbsp;
        <a href={`https://twitter.com/${social.twitter}`} target="_blank">
          <FontAwesomeIcon icon={faTwitter} style={{
            fontSize: '20px',
            textDecoration: 'none',
            boxShadow: 'none'
          }} />
        </a> &nbsp;
        <a href={`https://instagram.com/${social.instagram}`} target="_blank">
          <FontAwesomeIcon icon={faInstagram} style={{
            color: '#D42F8B',
            fontSize: '20px',
            textDecoration: 'none',
            boxShadow: 'none'
          }}/>
        </a>&nbsp;
        <br></br>
        {author.summary}
        {` `}
      </p>
    </div>
  )
}

export default Bio
