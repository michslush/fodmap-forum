import React from 'react'
import {Image} from 'react-bootstrap'

export const YelpLogo = props => {
  return (
    <div id="yelpLogo">
      <a
        href={props.url || 'https://www.yelp.com/'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/yelp_logo.png" style={{width: '100px'}} />
      </a>
    </div>
  )
}
