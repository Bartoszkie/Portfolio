import styled from 'styled-components';
import {device} from '../../styles/globalSizes';

export const HamburgerContainer = styled.button`
    display: none;

    position: absolute;
    bottom: 2rem;
    right: 2rem; 
    z-index: 150;

    width: 5rem;
    height: 5rem;

    border-radius: 50%;
    padding: 1rem;
    outline: none;
    border: ${({isOpen}) => isOpen ? ".1rem solid white" : "none"};
    background-color: ${({theme}) => theme.baseRedColor};

    cursor: pointer;

    @media ${device.laptopS} {
        display: block;
    }
`;

export const HamburgerDash = styled.div`
    width: 80%;
    height: .2rem;
    background-color: ${({isOpen}) => isOpen ? "white" : "grey"};
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    &:not(:last-child) {
        margin-bottom: .5rem;
    }
`;