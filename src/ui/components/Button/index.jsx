import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  text,
  variant = "primary",
  type = "button",
  href,
  onClick,
  customClass,
}) => {
  return href ? (
    <StyledLink
      className={customClass}
      to={href}
      $variant={variant}
      onClick={onClick}
    >
      {text}
    </StyledLink>
  ) : (
    <StyledButton className={customClass} type={type} $variant={variant}>
      {text}
    </StyledButton>
  );
};

// 🎨 Base Styles for both Button & Link
const BaseStyles = `
  display: inline-block;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
  padding: 10px 24px;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
`;

// 🎨 Styled Button Component
const StyledButton = styled.button`
  ${BaseStyles}
  background: ${({ $variant }) =>
    $variant === "primary" ? "transparent" : "white"};
  color: ${({ $variant }) => ($variant === "primary" ? "white" : "black")};
  border: 2px solid white;

  &:hover {
    background: ${({ $variant }) =>
      $variant === "primary" ? "white" : "transparent"};
    color: ${({ $variant }) => ($variant === "primary" ? "black" : "white")};
  }
`;

// 🎨 Styled Link Component (For Navigational Buttons)
const StyledLink = styled(Link)`
  ${BaseStyles}
  background: ${({ $variant }) =>
    $variant === "primary" ? "transparent" : "white"};
  color: ${({ $variant }) => ($variant === "primary" ? "white" : "black")};
  border: 2px solid white;

  &:hover {
    background: ${({ $variant }) =>
      $variant === "primary" ? "white" : "transparent"};
    color: ${({ $variant }) => ($variant === "primary" ? "black" : "white")};
  }
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  customClass: PropTypes.string,
};

export default Button;
