import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <NavItem
            activeIcon="icones/home-ativo.png"
            inactiveIcon="icones/home-inativo.png"
            active
          >
            Home
          </NavItem>

          <NavItem
            activeIcon="icones/mais-vistas-ativo.png"
            inactiveIcon="icones/mais-vistas-inativo.png"
          >
            Most Viewed
          </NavItem>

          <NavItem
            activeIcon="icones/mais-curtidas-ativo.png"
            inactiveIcon="icones/mais-curtidas-inativo.png"
          >
            Most liked
          </NavItem>

          <NavItem
            activeIcon="icones/novas-ativo.png"
            inactiveIcon="icones/novas-inativo.png"
          >
            What's new
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
