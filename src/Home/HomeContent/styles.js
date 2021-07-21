import Styled from 'styled-components'
import { lighten } from 'polished'

export default Styled.div`
    header {
        background: #373E68;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8em 1.5em;
        border-radius: 10px;
        margin-bottom: 1.5em;
        color: #fff;
        div.col--1 {     
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon {
                font-size: 1.8rem;
                transform: rotate(180deg);
                margin-right: 0.6em;
            }
            h3 {
                font-size: 1.2rem;
            }
            div.input--container {
                margin-left: 3em;
                label {
                    color: #E8EAF2;
                }
                select {
                    background: transparent;
                    outline: none;
                    border: none;
                    font-weight: 600;
                    color: #fff;
                    margin-left: 0.5em;
                }
            }
        }
        button {
            display: flex;
            align-items: center;
            outline: none;
            border: none;
            font-weight: 700;
            background: #B61CEE;
            color: #fff;
            padding: 1em 1em;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            &:hover, &:focus {
                background: ${lighten(0.1, '#B61CEE')}
            }
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
            border-radius: 8px;
            padding: 0.5em;
            font-size: 0.9rem;
            font-weight: 600;
        }
    }
    div.roadmap--container {
        margin-top: 1em;
        background: #fff;
        padding: 1.5em;
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    div.list--container {
        div.item--container {
            padding: 1.5em;
            margin-bottom: 1em;
            background: #fff;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            div.col--1 {
                display: flex;
                align-items: flex-start;
                div.action--container {
                    background: #F1F4FE;
                    border-radius: 4px;
                    padding: 0.5em;
                    padding-top: 0px;
                    button {
                        outline: none;
                        cursor: pointer;
                        border: none;
                        background: transparent;
                        .icon {
                            font-size: 1.2rem;
                        }
                    }
                    p {
                        font-size: 0.9rem;
                        font-weight: 600;
                    }
                }
            }
            div.col--2 {
                h3 {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #56595B;
                    display: flex;
                    align-items: center;
                    &:before {
                        content: "";
                        display: block;
                        width: 0.75rem;
                        margin-right: 0.4em;
                        height: 0.75rem;
                        border-radius: 50%;
                        background: #D1D1F4;
                    }
                }
            }
            div.content--container {
                margin-left: 3em;
                
                h2 {
                    color: #5C5A78;
                    font-size: 1.2rem;
                    margin-bottom: 0.5em;
                }
                p {
                    font-size: 1rem;
                    color: #B7B8BF;
                    &.label--txt {
                        background: #F1F4FE;
                        margin: 0.4em;
                        width: fit-content;
                        margin-left: 0px;
                        margin-right: 0.8em;
                        margin-top: 1em;
                        border-radius: 8px;
                        padding: 0.5em;
                        color: #8483E5;
                        font-size: 0.9rem;
                        font-weight: 600;
                    }
                }
            }
        }
    }

`
