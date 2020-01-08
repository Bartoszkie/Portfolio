import styled from 'styled-components';

export const CartContainer = styled.div`
    display: flex;
    width: 50%;
    align-self: ${({right}) => right ? "flex-end" : "center"};
    justify-content: ${({right}) => right ? "unset" : "flex-start"};
`;

export const CartContainerContent = styled.div`
    padding: 1rem 1rem 1rem 2rem;
    margin-left: ${({right}) => right ? "3rem" : "0rem"};
    margin-right: ${({right}) => right ? "0rem" : "3rem"};
    width: 40%;
    background-color: ${({theme}) => theme.colorBaseWhite};
    box-shadow: 0 0 .5rem rgba(0, 0, 0, .3);
    border-radius: .5rem;

    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

    position: relative;
    z-index: 10;

    &::after {
        content: "";
        width: 1rem;
        height: 1rem;

        position: absolute;
        left: ${({right}) => right ? "-.001" : "auto"};
        top: 50%;
        right: ${({right}) => right ? "auto" : "-1rem"};

        box-shadow: ${({right}) => right ? "-1px 1px 1px rgba(0, 0, 0, .2); " : "1px -1px 1px rgba(0, 0, 0, .2); "};
        transform: translate(-50%, -50%) rotate(45deg);
        background-color: ${({theme}) => theme.colorBaseWhite};
    }
`;

export const DateTag = styled.time`
    grid-column: 1 / 2;
    color: ${({theme}) => theme.greyDateColor}
`;

export const PlatformTag = styled.span`
    grid-row: 1 / 2;
    grid-column: 2 / -1;
    justify-self: end;
`;

export const InfoTag = styled.p`
    grid-column: 1 / -1;
`;

export const LinkTag = styled.a`
    grid-column: 1 / -1;
`;

export const Circle = styled.span`
    position: absolute;
    left: ${({right}) => right ? "-2.999rem" : "auto"};
    right: ${({right}) => right ? "auto" : "-5.79rem"};
    top: 50%;
    transform: translate(-50%, -50%);

    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    background-color: ${({theme}) => theme.baseRedColor};

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    &::after {
        content: "";
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colorBaseWhite};        
    }
`;