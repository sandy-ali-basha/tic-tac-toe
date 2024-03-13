import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Col, Container, InputGroup, Row } from "reactstrap";

//* images

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row className="justify-content-between pb-5">
          <Col md="4" xs="6">
            <h4 className="fw-bold">{t("Scan. Detect. Remove.")}</h4>
            <div className="d-flex gap-md-5 gap-2 py-5">
              <a href="https://">{/* <img src={twitter} alt="" /> */}</a>
              <a href="https://">{/* <img src={f} alt="" /> */}</a>
              <a href="https://">{/* <img src={y} alt="" /> */}</a>
            </div>
            <div className="d-flex gap-5">
              <a
                href="https://"
                className="fs-11 text-white border-bottom border-white"
              >
                {t("Privacy Policy")}
              </a>
              <a
                href="https://"
                className="fs-11 text-white border-bottom border-white"
              >
                {t("Terms of Service")}
              </a>
            </div>
            <p className="fs-11 pt-5 pb-2">
              {t(
                "Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356"
              )}
            </p>
            <p className="fs-11">
              {t("Designed & developed by Bigger Picture")}
            </p>
          </Col>
          <Col md="2" xs="6">
            {/* <img src={logo} className=" pb-2 " alt="" /> */}
            <hr color="white" />
            <ul className="footer_ul">
              <li>
                <Link to="">{t("iPhone")}</Link>
              </li>
              <li>
                <Link to="">{t("Android")}</Link>
              </li>
              <li>
                <Link to="">{t("Help")}</Link>
              </li>
              <li>
                <Link to="">{t("About")}</Link>
              </li>
              <li>
                <Link to="">{t("Insights")}</Link>
              </li>
            </ul>
          </Col>
          <Col md="5" xs="12">
            <div className="yellow_card">
              <h2 className="fs-h fw-bold pb-2">
                {t("Sign up to our newsletter")}
              </h2>
              <p className="pb-4">
                {t(
                  "Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!"
                )}
              </p>
              <InputGroup class="mb-3 pill">
                <input
                  type="text"
                  class="form-control inputInputGroup"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Email address"
                />
                <Button className="InputGroupBtn" color="primary">
                  {" "}
                  {t("Submit")}
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        <p className="w-md-100 w-50 fs-11 ps-2">
          {t(
            "Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC."
          )}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
