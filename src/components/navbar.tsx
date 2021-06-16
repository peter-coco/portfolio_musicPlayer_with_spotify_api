function NavbarMenus() {
  return (
    <div id="header-menus">
      <i className="fas fa-home"></i>
      <i className="fas fa-chart-bar"></i>
      <i className="far fa-list-alt"></i>
      <i className="fas fa-search"></i>
    </div>
  );
}

export function Navbar() {
  return (
    <div id="header">
      <div id="header-logo-img">
        <img src="./navbar-logo.png" alt="header" />
      </div>
      <NavbarMenus />
    </div>
  );
}
