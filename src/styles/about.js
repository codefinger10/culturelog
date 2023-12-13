import styled from "@emotion/styled";
import { colors } from "./basic";

export const AboutWrap = styled.div`
  position: relative;
  margin-top: 3rem;
  font-size: 1.4rem;
  font-weight: 400;
`;
export const TeamWrap = styled.div`
  margin-bottom: 3rem;
  h2 {
    text-align: center;
  }
`;

export const AboutList = styled.div`
  margin-top: 2rem;
`;
export const AboutItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${colors.secondary};
  &:first-of-type {
    border-top: 1px solid ${colors.secondary};
  }
`;

export const AboutIcon = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  background: ${colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
`;

export const AboutInfo = styled.dl`
  display: flex;
  dt {
    min-width: 10rem;
    margin-right: 2rem;
    border-right: 1px solid ${colors.secondary};
  }
  dd {
    width: calc(1oo% - 12rem);
    a {
      color: ${colors.placeholder};
      transition: 0.2s;

      &:hover {
        color: ${colors.point};
      }
    }
  }
`;
