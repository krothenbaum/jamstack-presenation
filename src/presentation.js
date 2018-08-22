import React from "react";
import ReactMarkdown from "react-markdown";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

import { mdHeadings, mdText, mdLink, mdList, mdListItem } from "./markdown";

// Import Spectacle Core tags
import { Deck, Slide, Layout, Fill, Image, Notes } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const StyledImage = styled(Image)`
  padding-top: 25%;

  ${ifProp(
    "gatsby",
    css`
      padding: 0;
      background-color: white;
      border-radius: 50%;
    `
  )};
`;

const markdownRenderers = {
  paragraph: mdText,
  heading: mdHeadings,
  list: mdList,
  listItem: mdListItem,
  link: mdLink
};

const theme = createTheme(
  {
    // zero: "#D9707B",
    primary: "#EDEAEE",
    secondary: "#EDEAEE",
    tertiary: "#84A5C9",
    quartenary: "#343E91"
  },
  {
    primary: "Dank Mono",
    secondary: {
      name: "Poppins",
      googleFont: true,
      styles: ["600"]
    }
  }
);

export default class Presentation extends React.Component {
  render() {
    const { slides } = this.props;
    return (
      <Deck
        transition={["zoom"]}
        transitionDuration={500}
        theme={theme}
        contentWidth={1500}
      >
        {slides.map(slide => {
          const { content, notes, backgroundImage, logoImg } = slide;
          if (!logoImg) {
            return (
              <Slide
                transition={["slide"]}
                bgColor="quartenary"
                bgImage={backgroundImage ? backgroundImage.url : ""}
              >
                <Notes>
                  <h1>{notes}</h1>
                </Notes>
                <ReactMarkdown
                  source={content}
                  renderers={markdownRenderers}
                  escapeHtml={false}
                />
              </Slide>
            );
          } else {
            return (
              <Slide
                transition={[
                  "fade",
                  (transitioning, forward) => {
                    const angle = forward ? -180 : 180;
                    return {
                      transform: `
                      translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                      rotate(${transitioning ? angle : 0}deg)
                    `,
                      backgroundColor: transitioning ? "#D9707B" : "#343E91"
                    };
                  }
                ]}
                bgColor="quartenary"
                bgImage={backgroundImage ? backgroundImage.url : ""}
              >
                <Notes>
                  <h1>{notes}</h1>
                </Notes>
                <Layout>
                  <Fill>
                    <StyledImage
                      margin={0}
                      src={logoImg.url}
                      width={"60%"}
                      gatsby={logoImg.fileName === "gatsby.svg"}
                    />
                  </Fill>
                  <Fill>
                    <ReactMarkdown
                      source={content}
                      renderers={markdownRenderers}
                      escapeHtml={false}
                    />
                  </Fill>
                </Layout>
              </Slide>
            );
          }
        })}
      </Deck>
    );
  }
}
