import { useState, useEffect } from "react";
import axios from "axios";
import Actions from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function useAuth(code: string) {
  // if (!code) return null;
  const [accessToken, setAcceessToken] = useState("");
  // const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
<<<<<<< HEAD
        // .post("https://musicdata.link/login", {
      // .post("https://musicdata.link/login", {
>>>>>>> defaa50eed8ef35294cbc215bace960c15d32549
        code,
      })
      .then((res) => {
        // console.log(res.data);
        setAcceessToken(res.data.accessToken);
        // setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn); // 만료 되는 시간에 맞춰서 갱신
        // setExpiresIn(61);
        // window.history.pushState({}, "", "/");
      })
      .catch(() => {
        dispatch({
          type: Actions.SET_API_ENTRACE_CODE,
          payload: { apiEntraceCode: "" },
        });
        window.location.href = "/";
      });
  }, [code]);

<<<<<<< HEAD
  // useEffect(() => {
  //   // 이부분 이해가 잘 안감
  //   if (!refreshToken || !expiresIn) return;
  //   const interval = setInterval(() => {
  //     axios
  //       .post("http://localhost:3001/refresh", {
  //         // .post("https://musicdata.link/refresh", {
  //         refreshToken,
  //       })
  //       .then((res) => {
  //         // console.log(res.data)
  //         setAcceessToken(res.data.accessToken);
  //         setExpiresIn(res.data.expiresIn);
  //         //   setExpiresIn(61); // 1초마다 갱신
  //         // setRefreshToken(res.data.refreshToken);
  //         window.history.pushState({}, "", "/");
  //       })
  //       .catch(() => {
  //         window.location.href = "/";
  //         // js : window.location
  //       });
  //   }, (expiresIn - 60) * 1000);
=======
  useEffect(() => {
    // 이부분 이해가 잘 안감
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
        // .post("https://musicdata.link/refresh", {
          refreshToken,
        })
        .then((res) => {
          // console.log(res.data)
          setAcceessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
          //   setExpiresIn(61); // 1초마다 갱신
          // setRefreshToken(res.data.refreshToken);
          window.history.pushState({}, "", "/");
        })
        .catch(() => {
          window.location.href = "/";
          // js : window.location
        });
    }, (expiresIn - 60) * 1000);
>>>>>>> defaa50eed8ef35294cbc215bace960c15d32549

  //   return () => clearInterval(interval);
  // }, [refreshToken, expiresIn]);

  return accessToken;
}
