const Logo = () => {
  return (
    <div className="logo">
      <p>Mr.</p>
      <p>Bara</p>
      <style jsx>{`
        .logo p {
          font-family: Georgia, "Times New Roman", Times, serif;
          margin: 0;
          font-weight: bold;
          font-size: 1.5em;
        }
      `}</style>
    </div>
  );
};

export default Logo;
