import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Children, useCallback, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
gsap.registerPlugin(ScrollTrigger); // moduel init

const HorizontalScreen = ({ children }: any) => {
  const panelRef = useRef<any>([]);
  const containerRef = useRef<any>(null);

  const createPanelsRefs = useCallback(() => {
    let index = -1;
    const f = (panel: any) => {
      index++;
      panelRef.current[index] = panel;
    };
    return f;
  }, []);
  const create = createPanelsRefs(); // closure

  useLayoutEffect(() => {
    gsap.to(panelRef.current, {
      ease: "none",
      xPercent: -100 * (panelRef.current.length - 1),
      scrollTrigger: {
        end: () => "+=" + containerRef.current.offsetWidth * 2,
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
      },
    });
    ScrollTrigger.normalizeScroll(true);
    return () => {
      ScrollTrigger.killAll(); // react router dom link error resolution
    };
  }, []);

  return (
    <Container ref={containerRef} id="id">
      {Children.toArray(children).map((element, index) => (
        <Panel ref={create} key={index}>
          {element}
        </Panel>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overscroll-behavior: none;
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: row;
`;
const Panel = styled.div``;

export default HorizontalScreen;
