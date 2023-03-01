import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Children, useCallback, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
gsap.registerPlugin(ScrollTrigger); // moduel init

const HorizontalScreen = () => {
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
    const ctx = gsap.context(() => {
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
    }, containerRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <Panel ref={create}>
        <FullScreen>hello</FullScreen>
      </Panel>
      <Panel ref={create}>
        <FullScreen>hello</FullScreen>
      </Panel>
      <Panel ref={create}>
        <FullScreen>hello</FullScreen>
      </Panel>
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
const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
`;
export default HorizontalScreen;
