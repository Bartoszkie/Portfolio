import styled from 'styled-components';

export const TimelineContainer = styled.section`
    grid-column: center-start / center-end;
    width: 100%;

    background-color: ${({theme}) => theme.baseGoldenRod};

    display: flex;
    flex-direction: column;

    &::after {
        background-color: ${({theme}) => theme.baseRedColor};
        content: "";
        position: absolute;
        left: calc(50% - .2rem);
        width: .4rem;
        height: 100%;
    }
`;
