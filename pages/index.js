// import Carousel from "../components/Carousel";
import Carousel from "../components/CarouselComponent";
import BrandList from "../components/BrandList";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const fakeData = [
    {
      url: "/bed1.png",
      category: "SOFA COLLECTION 2008",
      name: "wood cloth sofa",
      description: `Good sofa and bed with really good sofa and bed, Good sofa and
      bed with really good sofa and bed, Good sofa and bed with really
      good sofa and bed Good sofa and bed with really good sofa and
      bed, Good sofa and bed with really good sofa and bed, Good sofa
      and bed with really good sofa and bed`
      // url:
      //   "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "/bed2.png",
      category: "SOFA COLLECTION 2008",
      name: "steel cloth bed",
      description: `Strong bed with really strong sofa and bed, strong sofa and
      bed with really strong sofa and bed, strong sofa and bed with really
      strong sofa and bed strong sofa and bed with really strong sofa and
      bed, strong sofa and bed with really strong sofa and bed, strong sofa
      and bed with really strong sofa and bed`
      // url:
      //   "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      url: "/bed3.png",
      category: "SOFA COLLECTION 2100",
      name: "comfy cloth bed",
      description: `comfy bed with really comfy sofa and bed, comfy sofa and
      bed with really comfy sofa and bed, comfy sofa and bed with really
      comfy sofa and bed comfy sofa and bed with really comfy sofa and
      bed, comfy sofa and bed with really comfy sofa and bed, comfy sofa
      and bed with really comfy sofa and bed`
      // url:
      //   "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div>
      <div className="container-main">
        <NavBar />
        <Carousel data={fakeData} timer={5000} />
      </div>{" "}
      {/* end carosel with nav */}
      <div>
        {/* lower section */}
        <div className="container-content">
          {/* container */}
          <BrandList />
        </div>{" "}
        {/* end container */}
      </div>{" "}
      {/* end lower section */}
      <Footer />
      <style jsx>{`
        .container-main {
          display: flex;
          flex-direction: column;
        }
        .container-content {
          display: flex;
          width: 50%;
          flex-wrap: wrap;
          margin: 5em auto;
          align-items: center;
        }

        @media (max-width: 1280px) {
          .container-content {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
