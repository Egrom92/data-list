import React from 'react'
import './Section.css'

const Section = (props) => {
  const {children} = props;
  return (
      <section>
          {children}
      </section>
  )
}

export default Section