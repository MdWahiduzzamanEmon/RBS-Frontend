import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import changeColorOfCircleCheck from "../../components/utility/functions/changeColorOfCircleCheck";

const ProjectManagement = ({ projectManagementData }) => {
  const { id, title, description, keyPoints, image } = projectManagementData;
  return (
    <div
      className=""
      style={{
        // backgroundImage:
        //   "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        // background: "linear-gradient(55deg, #24c6dc 0%,#140c1f 100%)",
        padding: "50px 0",
        // fontFamily: "Poppins",
        fontFamily: "open sans",
      }}
    >
      <div className="d-flex flex-column flex-lg-row align-items-center container-lg">
        <div className="p-3 w-100 w-lg-50" data-aos="zoom-in-down">
          {/* {home3rdData?.items?.map((data, index) => ( */}
          <Image
            // key={data.id}
            src={image}
            alt=" "
            objectFit="cover"
            width={500}
            height={450}
            layout="responsive"
            className="rounded-5 p-2"
          />
          {/* ))} */}
        </div>
        <div className="p-3 w-100 w-lg-50" data-aos="zoom-in-down">
          {/* {home3rdData?.items?.map((data, index) => ( */}
          <div>
            <h1 className="fs-2 fw-bold  mb-3">{title}</h1>
            <p
              className="fs-6"
              style={{
                color: "rgb(75, 101, 126)",
                textAlign: "justify",
              }}
            >
              {description}
            </p>
            {keyPoints?.map((keyPoint, index) => (
              <div key={keyPoint.id}>
                <h3 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      color={changeColorOfCircleCheck(keyPoint.id)}
                    />
                  </span>
                  {keyPoint?.title}
                </h3>
                <p
                  className="fs-6"
                  style={{
                    color: "rgb(75, 101, 126)",
                    textAlign: "justify",
                  }}
                >
                  {keyPoint?.description}
                </p>
              </div>
            ))}
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
