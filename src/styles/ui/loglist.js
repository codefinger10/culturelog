import styled from "@emotion/styled";
import { colors } from "../basic";

export const LogList = styled.ul`
  margin-top: 10px;
  width: 100%;
`;
export const LogItem = styled.li`
  height: 90px;
  border-radius: 5px;
  border: 1px solid ${colors.secondary};
  background: ${colors.main};
  display: flex;
  align-items: center;
  :hover {
    border-radius: 5px;
    border: 1px solid ${colors.point};
    background: ${colors.main};
  }
`;
export const LogItemImg = styled.div`
  position: relative;
  width: 63px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  background: #000;
  img {
    width: 100%;
    border-radius: 5px 0px 0px 5px;
  }
  img.on {
    width: 100%;
    border-radius: 5px 0px 0px 5px;
    opacity: 0.5;
  }
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 400;
    color: ${colors.main};
  }
`;
export const LogText = styled.div`
  width: 186px;
  margin-right: auto;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  span {
    color: ${colors.gray};
    font-size: 12px;
    font-weight: 300;
  }
`;
export const LogMore = styled.div`
  button {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    font-size: 10px;
    font-weight: 300;
    border-radius: 50%;

    color: ${colors.gray};
    background-color: ${colors.tab};
    :hover {
      background-color: ${colors.point};
      color: ${colors.main};
    }
  }
`;