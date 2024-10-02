import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: #a60f14;
  color: white;

  .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }

  .nav-btnclose {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    .nav-btn {
      visibility: visible;
      opacity: 1;
    }
  }

  .responsive_nav {
    transform: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    font-weight: bold;
    color: white;
    margin: 0 1rem;
    text-decoration: none;

    &:hover {
      color: #2a2a2a;
    }
  }

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background-color: #a60f14;
    transform: translateY(-100vh);

    a {
      font-size: 1.5rem;
    }
  }
`;
