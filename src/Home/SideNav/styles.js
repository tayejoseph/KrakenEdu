import Styled from 'styled-components'

export default Styled.div`

    header.side--nav__header {
        background: pink;
        height: 8rem;
        background: rgb(109,172,245);
        background: linear-gradient(148deg, rgba(109,172,245,1) 17%, rgba(217,78,140,1) 58%, rgba(236,163,136,1) 73%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1.5em;
        border-radius: 5px;
        margin-bottom: 1.5em;
        color: #fff;
        h1 {
            font-size: 1.2rem;
        }
        
        p {
            font-size: 1rem;
        }
    }
    div.filter--lists {
        background: #fff;
        border-radius: 4px;
        padding: 1em 1.5em;
        button {
            outline: none;
            background: #F1F4FE;
            border: none;
            margin: 0.4em;
            margin-left: 0px;
            margin-right: 0.8em;
            cursor: pointer;
            border-radius: 8px;
            padding: 0.5em;
            color: #8483E5;
            font-size: 0.9rem;
            font-weight: 600;
            &.active, &:hover, &:focus {
                background: #475FE5;
                color: #fff;
            }
        }
    }
    div.roadmap--container {
        margin-top: 1em;
        background: #fff;
        padding: 1.5em;
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5em;
            h2 {
                font-size: 1.1rem
            }
            a {
                font-size: 0.9rem;
            }
        }
        div.list--container {
            div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                &:not(:last-of-type) {
                    margin-bottom: 1em;
                }
                p:first-of-type {
                    display: flex;
                    align-items: center;
                    &:before {
                        content: "";
                        display: inline-block;
                        width: 0.6rem;
                        height: 0.6rem;
                        border-radius: 50%;
                        margin-right: 1em;
                        background: #EC9CA7;
                    }
                    &.inprogress--txt:before {
                        background: #8533E0;
                    }
                    &.live--txt:before {
                        background: #74B3E0;
                    }
                }
            }
        }
    }

`
