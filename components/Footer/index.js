import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="container-main">
      <div className="container-left">
        <p>TERMS &amp; CONDITION</p>
        <p>POLICY</p>
        <p>MAP</p>
      </div>
      <div className="container-mid">
        <Logo />
        <p>
          @2015 <span>Mr. Bara</span> All Rights Preserved
        </p>
      </div>
      <div className="container-right">
        <p>FOLLOW US ON SOCIAL</p>
        <div className="container-social">
          <img src="/twitter-logo.png" />
          <img src="/facebook-logo.png" />
          <img src="/rss-feed-logo.png" />
        </div>
      </div>

      <style jsx>{`
        .container-main {
          background-color: #e9efef;
          display: flex;
          justify-content: space-around;
          padding: 1.5em 0;
          height: 15vh;
        }

        .container-left,
        .container-right {
          display: flex;
          justify-content: space-between;
          padding: 1em;
          width: 20%;
        }

        .container-left p,
        .container-right p,
        span {
          font-weight: bold;
        }

        .container-mid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }

        .container-social img {
          width: 2em;
          margin: 0 0.5em;
          cursor: pointer;
        }

        @media (max-width: 1280px) {
          .container-right,
          .container-left {
            flex-direction: column;
            justify-content: center;
          }

          .container-left {
            align-items: flex-start;
          }
          .container-right {
            align-items: flex-end;
          }

          .container-left p {
            margin: 0.25em;
          }

          .container-mid p {
            text-align:center;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
