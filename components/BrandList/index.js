import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import Brand from "../Brand";

const BrandList = () => {
  const { error, data } = useQuery(queries);
  let brandList;
  if (data) {
    brandList = data.getBrandList.filter(brand => brand.logo !== "");
  }

  return (
    <div className="container-main">
      {brandList &&
        brandList.map(brand => {
          const { attribute_id, name, logo } = brand;
          return (
            <div className="container-brand" key={attribute_id}>
              <Brand  name={name} logo={logo} />
              <div className="mask-brand"></div>
            </div>
          );
        })}
      <style jsx>{`
        .container-main {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .container-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .container-brand:nth-of-type(2n) {
          margin: 15em 0 0 0;
        }

        .mask-brand {
          position: relative;
          bottom: 1em;
          height: 50%;
          width: 100%;
          background-color: #e9efef;
          opacity: 0.25;
        }

        @media (max-width: 1280px) {
          .container-brand:nth-of-type(2n) {
            margin: 0;
          }
        }

        @media (max-width: 500px) {
          .container-main {
            width: 100vw;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

const queries = gql`
  query {
    getBrandList {
      name
      attribute_id
      logo
      sort_order
    }
  }
`;

export default BrandList;
