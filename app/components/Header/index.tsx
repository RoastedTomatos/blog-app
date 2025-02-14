"use client";

import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <h1>Blog App</h1>
        <ul>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
