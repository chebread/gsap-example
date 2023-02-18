import styled from "styled-components";
import HorizontalScreen from "./HorizontalScreen";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HorizontalScreen>
        <FullScreen>hello</FullScreen>
        <FullScreen>hello</FullScreen>
        <FullScreen>hello</FullScreen>
      </HorizontalScreen>
    </>
  );
};

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
`;
export default App;
