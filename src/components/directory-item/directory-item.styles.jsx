import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const Body = styled.div`
  height: 100px;
  width: 200px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
  background-color: white;
  opacity: 0.85;
  position: absolute;
`;

export const H2 = styled.h2`
  font-weight: 300;
  margin: 20px 6px 0;
  font-size: 1.6em;
  line-height: 1em;
  color: #4a4a4a;
`;

export const P = styled.p`
  font-weight: 300;
  font-size: 16px;
`;

export const DirectoryItemContainer = styled(Link)`
  min-width: max(300px, 30%);
  height: clamp(200px, 25dvw, 400px);
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & ${BackgroundImage} {
      transform: scale(1.2);
      transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & ${Body} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;
