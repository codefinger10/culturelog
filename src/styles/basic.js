/* eslint-disable no-undef */
import styled from "@emotion/styled";
import { ConfigProvider } from "antd";

const configCalender = {
  token: {
    colorSplit: "none",
  },
  components: {
    Calendar: {
      controlItemBgActive: "none",
    },
    Button: {
      textHoverBg: "none",
    },
    Drawer: {
      textHoverBg: "rgba(0, 0, 0, 0.06)",
    },
  },
};

// 기본색상
export const colors = {
  main: "#ffffff",
  secondary: "#ebebeb",
  point: "#273F7C",
  tab: "#f7f7f7",
  error: "#ff6345",
  placeholder: "#cccccc",
  gray: "#555555",
  black: "#000",
};

// 그림자효과
export const shadow = {
  light: { boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)" },
  bold: {
    boxShadow:
      "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  },
};

// 전체 레이아웃
export const Wrap = styled.div`
  position: relative;
  max-width: ${props => props.maxw + "px"};
  /* height: 100vh; */
  min-height: 100vh;
  overflow-x: auto;
  margin: 0 auto;
  padding: 6rem 1.5% 16rem;
  background: #fff;

  input,
  textarea {
    border: 1px solid ${colors.secondary};
    border-radius: 0;
    font-size: 1.2rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${colors.placeholder};
  }
`;

export const Inner = styled.div`
  padding: 0 5%;
`;

// header 레이아웃
export const HeaderWrap = styled.header`
  position: fixed;
  max-width: ${props => props.maxw + "px"};
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 6rem;
  background: url(${process.env.PUBLIC_URL + "/images/nav_bg.jpg"}) center/cover;
  z-index: 99999;
  h3 {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 300;
    line-height: 6rem;
    color: ${colors.point};
  }
  h3 a {
    color: ${colors.point};
  }

  button {
    display: none;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    &.on {
      display: block;
    }
    &.signout {
      display: block;
      left: initial;
      right: 5%;
      width: 2.8rem;
      height: 2.8rem;
      background: url(${process.env.PUBLIC_URL + "/images/icon_signout.svg"})
        no-repeat center/100%;
      font-size: 0;
      transition: 0.2s;
      &:hover {
        background: url(${process.env.PUBLIC_URL + "/images/icon_signout.svg"});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
      }
    }
  }
`;

// footer 레이아웃
export const FooterWrap = styled.footer`
  position: fixed;
  max-width: ${props => props.maxw + "px"};
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  height: 6rem;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 300;
  line-height: 6rem;
  color: ${colors.point};
  background: url(${process.env.PUBLIC_URL + "/images/nav_bg.jpg"}) center/cover;
  z-index: 99999;
`;

export const FooterBtnWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FooterBtn = styled.div`
  img {
    margin-bottom: 0.5rem;
  }
`;

export const FooterAddBtn = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  background: ${colors.main};
  border: 1px solid ${colors.secondary};
  border-radius: 50%;
  margin-top: -5.5rem;
  ${shadow.light}
  a {
    display: block;
    width: 7.2rem;
    height: 7.2rem;
  }
`;

export const FooterCopyRight = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10rem;
  text-align: center;
  small {
    display: block;
    font-size: 1.2rem;
    color: ${colors.placeholder};
  }
  a {
    display: inline-block;
    min-width: 18rem;
    padding: 0.7rem 2rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: ${colors.placeholder};
    transition: 0.3s;
    border-radius: 4rem;
    &:hover {
      border-color: ${colors.gray};
      color: ${colors.gray};
    }
  }
`;

// 메인

export const MainWrap = styled.main`
  position: relative;
  * {
    font-family: "Hahmlet", "Noto Sans KR", "Segoe UI", Tahoma, Geneva, Verdana,
      sans-serif;
  }
  .ant-picker-calendar.ant-picker-calendar-full .ant-picker-calendar-date {
    height: 80px !important;
  }
  .ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-panel
    .ant-picker-body {
    font-size: 1.2rem;
  }
  .ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-panel
    .ant-picker-body
    th {
    padding: 15px 0;
    text-align: center !important;
  }
  .ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-panel
    .ant-picker-body
    td {
    padding: 0;
    text-align: center !important;
  }

  .list-item {
    transition: background-color 0.3s;
    cursor: pointer;
  }

  .list-item:hover {
    background-color: #f0f0f0; /* 원하는 hover 시 배경색 */
  }

  .list-item:active {
    background-color: #d9d9d9; /* 원하는 click 시 배경색 */
  }

  .list-item:hover .list-button,
  .list-item:active .list-button {
    background-color: #1890ff; /* 원하는 hover 및 click 시 배경색 */
    color: #fff; /* 원하는 hover 및 click 시 텍스트 색상 */
  }

  :where(.css-dev-only-do-not-override-x4zgyu).ant-drawer .ant-drawer-body {
    padding: 0 24px;
  }

  .ant-picker-cell-today {
    border: 1px solid #273f7c;
  }

  .ant-picker-calendar-date-content {
    height: 60px;
  }
  .ant-picker-calendar.ant-picker-calendar-full
    .ant-picker-calendar-date-content {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    left: 0;
    top: 0;
  }
`;

export const ConfigCalender = ({ children }) => (
  <ConfigProvider theme={configCalender}>{children}</ConfigProvider>
);

export const CircleBadge = ({ count }) => (
  <div
    style={{
      position: "absolute",
      bottom: "5px",
      right: 0,
      width: "2rem",
      height: "2rem",
      background: "rgba(39, 63, 124, 0.6)",
      color: "#fff",
      fontSize: "1.2rem",
      borderRadius: "50%",
      lineHeight: "2rem",
      textAlign: "center",
    }}
  >
    {count}
  </div>
);

export const CellStyle = ({ dateString, result }) => (
  <style>
    {`
      .ant-picker-cell[title="${dateString}"] {
        background-image: url(${result ? `"${result.pic}"` : ""});
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}
  </style>
);
