import styled from 'styled-components';

export const Input = styled.input`
    display: block;
    color: red;
    height: 46px;
    padding: 8px 10px 8px 30px;
    width: 100%;
    text-align: end;
    border-radius: 10px;
    border: none;
    outline: none;
    background: var(--Very-light-grayish-cyan);
    font-size: 1.4rem;
    font-weight: 700;
    font-family: inherit;
    color: var(--Very-dark-cyan);   
    letter-spacing: 1px;
}
`;

export const IconWrap = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    display: grid;
    place-items: center;
    color: var(--Grayish-cyan);
    font-size: 1.3rem;
`;
