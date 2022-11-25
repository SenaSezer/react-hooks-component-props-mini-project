import React from "react"

function About({ ArticleList, about }) {
    return (
        <main>
        <img src={image} alt="blog logo"></img>
        <p>{ArticleList}</p>
        </main>
    )
  }
  
  export default About;
  About.defaultProps = {
    image: "https://via.placeholder.com/215"
}