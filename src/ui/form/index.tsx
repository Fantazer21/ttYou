import React, { ChangeEvent, useState } from "react";
import styles from "./form.module.scss";
import Photo from "../../assets/icons/Vector.svg";
import { sendData } from "../../dal/api";

type DataType = {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
};

const Form = () => {
  const [state, setState] = useState<DataType>({
    id: 1,
    name: "",
    surname: "",
    patronymic: "",
  });
  const [photo, setPhoto] = useState<File | null>(null);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputSearchFieldWrapper}>
        <div className={styles.inputSearchFieldTitle}>Name</div>
        <input
          onChange={(e) => setState({ ...state, name: e.target.value })}
          className={styles.inputSearchField}
          type="text"
        />
      </div>
      <div className={styles.inputSearchFieldWrapper}>
        <div className={styles.inputSearchFieldTitle}>Surname</div>
        <input
          onChange={(e) => setState({ ...state, surname: e.target.value })}
          className={styles.inputSearchField}
          type="text"
        />
      </div>
      <div className={styles.inputSearchFieldWrapper}>
        <div className={styles.inputSearchFieldTitle}>Patronymic</div>
        <input
          onChange={(e) => setState({ ...state, patronymic: e.target.value })}
          className={styles.inputSearchField}
          type="text"
        />
      </div>
      <div className={styles.inputSearchFieldWrapper}>
        <div className={styles.inputSearchFieldTitle}>Photo</div>
        {photo ? (
          <img
            alt={"Image"}
            className={styles.image}
            src={URL.createObjectURL(photo)}
          />
        ) : (
          <>
            <input
              className={styles.inputAddPhoto}
              id="add_photo"
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              name="uploadImg"
              hidden
              onChange={(e: ChangeEvent<any>) => setPhoto(e.target.files[0])}
            />
            <label htmlFor={`add_photo`} className={styles.labelAddPhoto}>
              <div className={styles.inputAddPhoto}>
                <img className={styles.photo} src={Photo} />
              </div>
            </label>
          </>
        )}
      </div>
      <div
        onClick={() =>
          sendData(state.name, state.surname, state.patronymic, photo!)
        }
        className={styles.btnSave}
      >
        <p>Сохранить</p>
      </div>
      <div className={styles.inputSearchFieldWrapper}>
        <div className={styles.inputSearchFieldTitle}></div>
        <input className={styles.textArea} type="textArea" />
      </div>
    </div>
  );
};

export default Form;
