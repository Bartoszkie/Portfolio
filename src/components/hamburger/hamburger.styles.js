import styled from 'styled-components';
import {device} from '../../styles/globalSizes';

export const HamburgerContainer = styled.button`
    display: none;

    position: fixed;
    bottom: 2rem;
    right: 2rem; 
    z-index: 150;

    width: 5rem;
    height: 5rem;

    border-radius: 50%;
    padding: 1rem;
    outline: none;
    border: ${({isopen}) => isopen ? ".1rem solid white" : "transparent"};
    background-color: ${({theme}) => theme.baseRedColor};
    transition: .2s all ease-in-out;

    cursor: pointer;

    i {
        color: #950740;
    }

    @media ${device.laptopS} {
        display: block;
    }
`;
