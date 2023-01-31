import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import { contactUsDemo } from "../../public/JSON/contactus/contactus";
import styles from "./Support.module.css";

export const getStaticProps = async () => {
  return {
    props: {
      supportData: contactUsDemo,
    },
  };
};

const ContactSupport = ({ supportData }) => {
  const [selectedUser, setSelectedUser] = React.useState("User 1");
  return (
    <section className={`${styles.supportWrapper} container-lg`}>
      <div className={`${styles.supportInnerWrapper} `}>
        <div className={`${styles.supportTitleWrapper}`}>
          <h3>{supportData?.support?.title}</h3>
          <p>{supportData?.support?.description}</p>
        </div>

        {/* who are you section */}
        <div className={`${styles.chooseUser}`}>
          <p className={`${styles.chooseUserTitle}`}>
            {supportData?.support?.usersList?.title}
          </p>
          <div className={`${styles.users}`}>
            {supportData?.support?.usersList?.users?.map((user, index) => (
              <p
                key={user.id}
                onClick={() => setSelectedUser(user.title)}
                style={{
                  backgroundColor: selectedUser === user.title ? "#173465" : "",
                  color: selectedUser === user.title ? "#FFF" : "#000",
                }}
              >
                {`I'm a ${user.title}`}
              </p>
            ))}
          </div>
        </div>
        <hr />
        {/* questions section */}
        {supportData?.support?.usersList?.questionsSection.map((questions) => (
          <div
            className={`${styles.accordionWrapper}`}
            key={questions.id}
            style={{ display: selectedUser !== questions.user ? "none" : "" }}
          >
            <h4 className={`${styles.accordionWrapperLeft}`}>
              {selectedUser === questions.user && questions.questionsList.title}
            </h4>

            <div className={`${styles.accordionWrapperRight}`}>
              {questions.questionsList.questions
                .filter((question) => selectedUser === questions.user)
                .map((question) => (
                  <Accordion
                    className={`${styles.accordion}`}
                    key={question.id}
                  >
                    <Accordion.Item
                      eventKey="0"
                      className={`${styles.accordionItem}`}
                    >
                      <Accordion.Header className={`${styles.accordionHeader}`}>
                        {question.title}
                      </Accordion.Header>
                      <Accordion.Body>{question.ans}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ))}
            </div>
          </div>
        ))}
        <div className={`${styles.supportBoardLink}`}>
          <p>{`Didn't find the answer you were looking for?`}</p>
          <Link href="/contactUs/contactSupport">
            <button className={`${styles.buttonSupport}`}>
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
