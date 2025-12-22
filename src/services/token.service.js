import { Cookies } from "react-cookie";
const cookies = new Cookies();

const getAccessToken = () => {
  const user = getUser();
  return user?.accessToken;
};

const getUser = () => {
  return cookies.get("user");
};

const removeUser = () => {
  cookies.remove("user", { path: "/" });
};

const setUser = (user) => {
  if (user) {
    // แก้ไข: เช็คว่ามีข้อมูล user จริง
    cookies.set(
      "user",
      {
        id: user.id,
        username: user.username,
        accessToken: user.accessToken,
      },
      {
        path: "/",
        expires: new Date(Date.now() + 86400000), // 1 วัน
      }
    );
  }
};

const tokenService = {
  getAccessToken,
  getUser,
  removeUser,
  setUser,
};

export default tokenService;
