import styled from "styled-components";

const StyledNavItem = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#7b78e5" : "#d9d9d9")};
  font-family: ${(props) =>
    props.$active ? "GandhiSansBold" : "GandhiSansRegular"};

  display: flex;
  align-items: center;
  gap: 22px;
`;

const NavItem = ({ children, activeIcon, inactiveIcon, active = false }) => {
  return (
    <StyledNavItem $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="Icon" />
      {children}
    </StyledNavItem>
  );
};

export default NavItem;
