import styled from 'styled-components';
import img from './images/simple-white.webp';

export const Container = styled.div`
    min-height:1080px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    background-image: url(${img});
    background-position: center;
    background-size: cover;
`;

// export const Error = styled.h2`
//     color: red;
//     margin: 24px 0 0 0;
// `;

// export const Text = styled.h2`
//     margin: 24px 0 8px 0;
//     font-size: 24px;
//     font-weight: 700;
// `;