export const ARTICLE_FRAGMENT = `#graphql
    fragment Article on Article {
        id
          title
          handle
          excerpt
          image {
            url
            altText
            width
            height
        }
    }
`