import styled, { css } from "styled-components";

import NavLinks from "./NavLinks";

import { keyframes } from "styled-components";

const slideInLeft = keyframes`
0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
}
100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
`;

const TagDivOverlay = styled.div<{
  $open: boolean;
}>`
  ${({ $open }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: ${$open ? "100vw" : 0};
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    cursor: pointer;
  `}
`;

const DivTagDrawer = styled.div`
  background-color: var(--bg-dark);
  min-width: 250px;
  min-height: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  padding: 60px 20px 20px 20px;
  animation: ${slideInLeft} 0.5s both;
`;

const DivTagContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  > section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

interface onToProps {
  open: boolean;
  onTo: () => void;
}

function Drawer({ open, onTo }: onToProps) {
  return (
    <>
      <DivTagDrawer>
        <DivTagContent>
          <section>
            <NavLinks isRow={false} onTo={onTo} />
          </section>
        </DivTagContent>
      </DivTagDrawer>
      <TagDivOverlay $open={open} onClick={onTo} />
    </>
  );
}

export default Drawer;
