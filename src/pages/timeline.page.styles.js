import styled from 'styled-components';

export const TimelineContainer = styled.section`
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.baseGoldenRod};

    &::after {
        background-color: ${({theme}) => theme.baseRedColor};
        content: "";
        position: absolute;
        left: calc(50% - .2rem);
        width: .4rem;
        height: 100%;
    }
`;