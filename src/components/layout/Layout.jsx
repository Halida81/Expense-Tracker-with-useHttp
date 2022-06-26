import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <Main>{props.children}</Main>
    </>
  );
};
export default Layout;

const Main = styled.main`
  margin: 3rem auto;
  width: 900%;
  max-width: 60rem;
`;
