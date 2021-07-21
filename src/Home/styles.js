import Styled from 'styled-components'
import { minQuery } from '../helpers'

export default Styled.div`
    display: grid;
    ${minQuery('md')} {
        grid-template-columns: 15rem 1fr;
        column-gap: 1.5em;
    }

`
