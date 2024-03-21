"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Nav, Row, Col, Button } from "react-bootstrap";
import styles from "./Sidebar.module.scss";
import NotificationCircle from "../Content/atoms/NotificationCircle";

const user = {
  fullName: "Astrid Fisker",
  email: "astrid@revision.com",
};

interface MenuLink {
  title: string;
  icon: string;
  subLinks?: string[];
  showNotification?: boolean;
}

const menuLinks = [
  {
    title: "Overblik",
    icon: "/icons/chart-pie.svg",
    subLinks: ["Sublink 1", "Sublink 2"],
  },
  {
    title: "Forsikringer",
    icon: "/icons/forsikringer.svg",
    subLinks: ["Sublink 1", "Sublink 2"],
  },
  {
    title: "Medarbejdere",
    icon: "/icons/users.svg",
  },
  {
    title: "Beskeder",
    icon: "/icons/inbox-in.svg",
    showNotification: true,
  },
  {
    title: "Fordele og tilbud",
    icon: "/icons/benefits.svg",
  },
  {
    title: "Integrationer",
    icon: "/icons/integrations.svg",
    subLinks: ["Sublink 1", "Sublink 2"],
  },
  {
    title: "Anmeld skade",
    icon: "/icons/report.svg",
  },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setActiveLink(activeLink === index ? null : index);
  };

  return (
    <Nav className={`flex-column py-4 align-items-center ${styles.sidebar}`}>
      <Nav.Item className="mb-3">
        <Image src="/icons/plain-logo.svg" width="85" height="85" alt="Logo" />
      </Nav.Item>

      {menuLinks.map((link, index: number) => (
        <React.Fragment key={index}>
          <Nav.Item className="w-100 mb-2">
            <Nav.Link
              href="#"
              onClick={() => toggleSubmenu(index)}
              className={`d-flex align-items-center justify-content-start mx-3 ${styles.navLink} `}
            >
              <Image
                width="20"
                height="20"
                src={link.icon}
                alt="Menu icon"
                className="me-3"
              />
              <span className="flex-grow-1">{link.title}</span>
              {link.showNotification && <NotificationCircle />}{" "}
              {link.subLinks &&
                link.subLinks.length > 0 &&
                !link.showNotification && (
                  <img
                    src="/icons/chevron-down.svg"
                    className={`ms-auto arrowIcon ${
                      activeLink === index ? styles.rotateArrow : ""
                    }`}
                  />
                )}
            </Nav.Link>
          </Nav.Item>
          {activeLink === index &&
            link.subLinks?.map((subLink, subIndex) => (
              <Nav.Item
                key={subIndex}
                className="w-100 mb-2 ps-5"
                style={{ transition: "opacity 0.3s", opacity: 1 }}
              >
                <Nav.Link className={`${styles.subItem}`} href="#">
                  {subLink}
                </Nav.Link>
              </Nav.Item>
            ))}
        </React.Fragment>
      ))}

      <div className={`mt-auto w-100 ${styles.userModule}`}>
        <hr className="my-3" />

        <Row className="align-items-center">
          <Col xs={3} className="d-flex justify-content-center">
            <div
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "black",
              }}
            ></div>
          </Col>
          <Col xs={9} className="ps-0">
            <div className="fw-bold text-black mb-1">{user.fullName}</div>
            <div className="text-muted small">{user.email}</div>
          </Col>
        </Row>

        <Button
          variant="link"
          className="text-muted mt-3 d-flex align-items-center fw-bold text-decoration-none"
          style={{ paddingLeft: "8px" }}
        >
          <Image
            src="/icons/signout.svg"
            width="20"
            height="20"
            alt="Sign out"
            className="me-2"
          />
          Sign Out
        </Button>
      </div>
    </Nav>
  );
}
