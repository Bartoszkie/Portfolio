import styled from 'styled-components';
import {device} from '../../styles/globalSizes';

export const TimelineContainer = styled.section`
    grid-column: center-start / full-end;

    padding-top: 1rem;
    width: 100%;

    background-color: ${({theme}) => theme.baseWhiteColor};

    display: flex;
    flex-direction: column;
    position: relative;

    @media ${device.laptopS} {
        grid-column: full-start / full-end;
    }

    &::after {
        background-color: ${({theme}) => theme.baseRedColor};
        content: "";
        position: absolute;
        left: calc(50% - .2rem);
        width: .4rem;
        height: 100%;
    }

    display: flex;
    flex-direction: column;
`;
