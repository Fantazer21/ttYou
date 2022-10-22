import axios from "axios";

const url = "https://test-job.pixli.app/send.php";

export const sendData = (
  name: string,
  surname: string,
  patronymic: string,
  photo: File
) => {
  let data = new FormData();
  data.set("action", "send_data");
  data.set("id", "1");
  data.set("contact[name]", name);
  data.set("contact[surname]", surname);
  data.set("contact[patronymic]", patronymic);
  data.set("image", photo);

  axios.post(url, data).then((response) => {
    alert(response.data.status);
  });
};
