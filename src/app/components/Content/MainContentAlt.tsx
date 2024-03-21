import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./MainContent.module.scss";
import NotificationBox from "./atoms/NotificicationBox";
import NotificationCircle from "./atoms/NotificationCircle";

const MainContentAlt = () => {
  const boxContents = ["Tekst 1", "Tekst 2", "Tekst 3"];

  const actionTexts = [
    "Start gennemgang ->",
    "Opsæt automatisk bogføring ->",
    "Automatiser din forsikring ->",
  ];

  return (
    <Container className={`${styles.contentControl}`}>
      <Row className="justify-content-center">
        <Col md={8} lg={9}>
          <Row className="mb-4">
            <Col>
              <NotificationBox />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex justify-content-between align-items-center">
              <h3>Dit forsikringsoverblik</h3>
              <p>Gå til dit detaljeret overblik -{">"}</p>
            </Col>
          </Row>
          <Row className="mb-4 px-5 py-4 bg-white rounded">
            <h4 className="mb-4">Aktive forsikringer</h4>
            {boxContents.map((content, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col
                  md={10}
                  className={`d-flex justify-content-between bg-light p-3 ${styles.forsikringsBox}`}
                >
                  <p className="mb-0">{content}</p>
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

          <Row className="mb-4 px-5 py-4 bg-white rounded">
            <Col xs={12}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center mb-4">
                  <h4 style={{ marginRight: "10px" }}>
                    Anbefalinger til din virksomhed
                  </h4>
                  <div style={{ position: "relative", top: "-4px" }}>
                    <NotificationCircle />
                  </div>
                </div>
              </div>
            </Col>
            {boxContents.map((content, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col
                  xs={12}
                  md={12}
                  className={`d-flex justify-content-between bg-light p-3 ${styles.forsikringsBox}`}
                >
                  <p className="mb-0">{content}</p>
                  <div className={`${styles.redBox}`}>{actionTexts[index]}</div>
                </Col>
              </Row>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContentAlt;
