import React from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <section className="bill-matrix-layout">
        <Header />
        <main className="body-content">{children}</main>
        <Footer />
      </section>
    </>
  );
};

export default HomeLayout;
