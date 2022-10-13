import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import product22 from "../../public/product22.jpg";

const Products2 = ({ product2ndData }) => {
  // console.log(product2ndData);
  return (
    <div
      style={{
        display: product2ndData.isShow ? "block" : "none",
        background: "rgb(226, 246, 254)",
      }}
    >
      {product2ndData.items?.map((data) => (
        <div
          key={data.id}
          className="d-flex flex-column flex-lg-row align-items-center container-lg"
          style={{
            fontFamily: "Poppins",
            // backgroundColor:'rgb(23,45,76)'
          }}
        >
          <div className="p-3">
            <h3 className="fs-5 fw-bold">{data.title}</h3>
            <p className="fs-6 my-4">
              <span className="me-2">
                <FontAwesomeIcon
                  className=""
                  icon={data.icon}
                  color="purple"
                ></FontAwesomeIcon>
              </span>
              {data.titleDescription1}
            </p>
            <p className="fs-6 my-4">
              <span className="me-2">
                <FontAwesomeIcon
                  className=""
                  icon={data.icon}
                  color="purple"
                ></FontAwesomeIcon>
              </span>
              {data.titleDescription2}
            </p>
            <p className="fs-6 my-4">
              <span className="me-2">
                <FontAwesomeIcon
                  className=""
                  icon={data.icon}
                  color="purple"
                ></FontAwesomeIcon>
              </span>
              {data.titleDescription3}
            </p>
            <p className="fs-6 my-4">
              <span className="me-2">
                <FontAwesomeIcon
                  className=""
                  icon={data.icon}
                  color="purple"
                ></FontAwesomeIcon>
              </span>
              {data.titleDescription4}
            </p>
            <button className="btn btn-primary">Purchase now</button>
          </div>
          <div className="p-3 w-100">
            <Image
              className=" rounded-5"
              src={data?.img}
              alt=" "
              height="100%"
              width="100%"
              objectFit="contain"
              layout="responsive"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products2;
