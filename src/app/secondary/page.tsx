"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContent from "../components/Content/MainContent";
import styles from "../Home.module.scss";

export default function Secondary() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className={`d-lg-none ${styles.mobileHeader}`}>
        <Image src="/Plain.svg" alt="Logo" width={85} height={85} />
        <Button onClick={toggleSidebar} className="border-0 bg-transparent">
          <Image src="/icons/menu.svg" alt="Menu Icon" width={30} height={30} />
        </Button>
      </div>

      <Row>
        <Col
          lg={2}
          className={`d-flex flex-column vh-100 ${styles.menuControls} ${
            sidebarVisible ? styles.visible : ""
          }`}
        >
          <Sidebar />
        </Col>

        <Col
          xs={12}
          lg={10}
          className="py-4"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <MainContent />
        </Col>
      </Row>
    </>
  );
}
