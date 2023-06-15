import { useRouteError } from "react-router-dom";
import styled from 'styled-components';
// import { FaBars } from 'react-icons/fa';

const ErrorBlock = styled.div`

`;

export default function ErrorPage() {
    const error = useRouteError();
  return (
    <ErrorBlock>
        <h1>Not this time!!! 😒 </h1>
        <h4>Something went wrong</h4>
        <p>{error.statusText || error.message}</p>
    </ErrorBlock>
  )
}
