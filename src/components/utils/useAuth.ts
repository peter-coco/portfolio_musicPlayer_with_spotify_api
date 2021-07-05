import { useState, useEffect } from "react";
import axios from "axios";
import Actions from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function useAuth(code: string) {
  const [accessToken, setAcceessToken] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .post("http://localhost:3001/login")
      .then((res) => {
        // console.log(res.data);
        setAcceessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn); // 만료 되는 시간에 맞춰서 갱신
      })
      .catch(() => {
        dispatch({
          type: Actions.SET_API_ENTRACE_CODE,
          payload: { apiEntraceCode: "" },
        });
        window.location.href = "/";
      });
  }, [code]);

  return accessToken;
}
