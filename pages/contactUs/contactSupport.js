import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "./ContactSupport.module.css";

const ContactSupport = () => {
  return (
    <section className={`${styles.supportWrapper}`}>
      <div className={`${styles.supportInnerWrapper} container-xl`}>
        <div className={`${styles.supportTitleWrapper}`}>
          <h3>Find the answers you need</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, recusandae?
          </p>
        </div>

        {/* who are you section */}
        <div className={`${styles.chooseUser}`}>
          <p className={`${styles.chooseUserTitle}`}>Who are you?</p>
          <div className={`${styles.users}`}>
            <p>{`I'm a candidate`}</p>
            <p>{`I'm a employee`}</p>
            <p></p>
          </div>
        </div>
        <hr />
        {/* questions section */}
        <div className={`${styles.accordionWrapper}`}>
          <h4 className={`${styles.accordionWrapperLeft}`}>General</h4>
          <div className={`${styles.accordionWrapperRight}`}>
            <Accordion className={`${styles.accordion}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How will the vitlous process work for me?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={`${styles.accordion}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I create new user?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <hr />
        {/* technical questions */}
        <div className={`${styles.accordionWrapper}`}>
          <h4 className={`${styles.accordionWrapperLeft}`}>Technical help</h4>
          <div className={`${styles.accordionWrapperRight}`}>
            <Accordion className={`${styles.accordion}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How will the vitlous process work for me?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className={`${styles.accordion}`}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I create new user?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <hr />

        {/* contact more section */}
        <div>
          <h4>{`Didn't find the answer you were looking for?`}</h4>
          <button>Contact support </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
