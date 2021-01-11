import React from "react"
import "./contact.css"
import "../../css/normalize.css"
import "../../css/global.css"

const Contact = () => {
  return (
    <section className="wrapper black margin_negative">
      <h4 className="contact__head">Feel free to say hi!</h4>
      <div className="btn__contact--wrapper">
        <a href="mailto:aaterziev.c@gmail.com">
          <button className="btn__contact">aaterziev.c@gmail.com</button>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/atanas-terziev-jr/"
        >
          <button className="btn__contact">LinkedIn</button>
        </a>
      </div>
    </section>
  )
}

export default Contact
