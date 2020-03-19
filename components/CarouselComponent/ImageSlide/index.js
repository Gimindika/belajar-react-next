import { Fragment } from "react";

const ImageSlide = ({ data }) => {
  const { url, category, name, description } = data;
  return (
    <Fragment>
      <div>
        <div className="container-carousel">
          <div className="container-top">
            <div className="container-left">
              <p className="text-category">{category}</p>
              <h1 className="text-title">{name}</h1>
              <p className="text-description">{description}</p>
              <p className="text-explore">EXPLORE NOW &#9654;</p>
            </div>

            <div className="container-right">
              <img src={url} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        

        .container-carousel {
          height: 80vh;
          margin: 0;
          background-color: #e9efef;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          padding: 0 15%;
        }

        .container-top {
          display: flex;
          height:70%;
        }
        .container-left {
          display: flex;
          flex-direction: column;
          width: 35%;
          height:100%
          margin-left:5em;
         
        }

        .container-right {
          width: 60%;
          display:flex;
          justify-content:center;
        }

        .container-right img {
          width:100%;
        }

        .text-title {
          font-size:5em;
          margin:0;
        }

        .text-category {
          font-size:.9em;
          color:#C8CECE;
          height:5em;
          width:20%;
          border-left: 3px solid #C8CECE;
          text-align: justify;
          padding: 1em 0 0 2em;
        }

        .text-description {
          font-size:.9em;
          color:#C8CECE;
        }

        .text-explore {
          font-weight:bold;
          cursor: pointer;
        }

        @media (max-width:1280px) {
          .container-top {
            flex-direction:column;
          }
          .container-left, .container-right {
            width:100%;
            align-items:center;
            text-align:justify;
          }

          .text-title {
            text-align:center;
          }

          .text-category {
            display:none;
          }
     
        }
      `}</style>
    </Fragment>
  );
};

export default ImageSlide;
