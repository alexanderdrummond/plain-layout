import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  return (
    <Container className={`${styles.contentControl}`}>
      <Row className="justify-content-center">
        <Col md={8} lg={9}>
          <Row className="mb-3">
            <Col className="d-flex justify-content-between align-items-center">
              <h3>Dit forsikringsoverblik</h3>
              <p>Gå til dit detaljeret overblik -{">"}</p>
            </Col>
          </Row>
          <Row className="mb-4 px-5 py-4 bg-white rounded">
            <h4 className="mb-4">Aktive forsikringer</h4>
            {[1, 2, 3].map((item, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col
                  md={10}
                  className={`d-flex justify-content-between bg-light p-3 ${styles.forsikringsBox}`}
                >
                  <p className="mb-0">Forsikringstekst {item}</p>
                  <div className={`${styles.checkIconBox}`}>
                    <Image src="/icons/check.svg" fluid />
                  </div>
                </Col>
                <Col
                  md={2}
                  className="d-flex align-items-center justify-content-end"
                >
                  <p className="mb-0">Se mere -{">"}</p>
                </Col>
              </Row>
            ))}
          </Row>
          <Row className="px-5 py-5 bg-white rounded d-flex justify-content-center align-items-center">
            <Col className="text-center">
              <p className="fw-semibold">
                Alt er godt! Der er ingen nye anbefalinger.
              </p>
              <Image src="/icons/thumbsup.svg" fluid />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
