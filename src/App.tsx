import React from "react";
import "./app.module.scss";
import styles from "./app.module.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import Palette from "./ui/palette";
import Form from "./ui/form";

function App() {
  const navigate = useNavigate();

  return (
    <div className={styles.appWrapper}>
      <div className={styles.containerWrapper}>
        <div className={styles.navBar}>
          <div onClick={() => navigate("./form")} className={styles.navBarItem}>
            {" "}
            Форма
          </div>
          <div
            onClick={() => navigate("./palette")}
            className={styles.navBarItem}
          >
            {" "}
            Палитра
          </div>
        </div>
        <div className={styles.mainWrapper}>
          <Routes>
            <Route path="" element={<Form />} />
            <Route path="/form" element={<Form />} />
            <Route path="/palette" element={<Palette />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
