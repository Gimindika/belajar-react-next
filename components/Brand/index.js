const Brand = ({ attribute_id, name, logo }) => {
  return (
    <div className="container-brand">
      <div className="container-left">
        <p>{name}</p>
      </div>
      <div className="container-right">
        <div className="container-image">
          <img src={logo} />
        </div>
        <p className="text-name">{name}</p>
      </div>
      <style jsx>{`
        .container-brand {
          height: 10%;
          display: flex;
          flex-direction: row;
          padding: 0;
          margin: 0;
        }

        .container-left {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .container-left p {
          color: #ff0000;
          transform: rotate(-90deg);
          font-size: 0.5em;
        }

        .container-right {
        }
        .container-image img {
          width: 20vw;
        }

        .text-name {
          text-transform: lowercase;
          font-size: 1.2em;
          font-weight: bold;
        }

        .text-name:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Brand;
