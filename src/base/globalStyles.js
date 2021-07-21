import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { maxQuery } from '../helpers'

export default createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
    }
      
    html, body {
      padding: 0px;
      margin: 0px;
      font-size: 1rem;
      font-family: ${({ theme }) => theme.fontFamily};
      background: ${({ theme }) => theme.bgColor};    
      ${maxQuery('sm')} {
        font-size: 80%;
      }
    }
    html { 
      overflow-y: overlay;
      overflow-x: hidden;
      body {   
        &.disable--scroll {
          overflow: hidden;
        }
      }
      hr {
        border: none;
        border-bottom: 1px solid #E6E6E6;
      }
      h1, h2, h3, h4, p {
        margin: 0px;
        padding: 0px;
      }
      div.app--content {
        width: 90%;
        max-width: ${({ theme }) => theme.dimensions.maxWidth};
        margin: 0 auto;
        position: relative;
        padding-top: 3em;
      }
    }
    
`
