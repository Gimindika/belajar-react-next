import Logo from "../Logo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-menu">
        <img src="/burger-menu.png" />
        <p>MENU</p>
      </div>
      {/* end nav menu */}

      <Logo />

      <div className="nav-link">
        <img src="/bag-icon.png" />
        <img src="/user-icon.png" />
      </div>

      <style jsx>{`
        // nav //////////////////
        .nav-bar {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 2em;
          background-color: #e9efef;
        }

        // nav menu/////////////////
        .nav-menu {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .nav-menu img {
          height: 3em;
        }
        .nav-menu p {
          font-size: 1em;
        }

        // nav link//////////
        .nav-link {
          display: flex;
          align-items: center;
        }

        .nav-link img {
          height: 2.5em;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
