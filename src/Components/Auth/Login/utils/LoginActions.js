import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginRedux } from "../../../../redux/slice/userSlice";

export function LoginActions(resp) {

    const dispatch = useDispatch(); 
    const nav = useNavigate()

  localStorage.setItem(
    "access-token",
    JSON.stringify({
      token: resp.token,
      email: resp.user.email,
      admin: false,
      auth: true,
    })
  );
  dispatch(
    loginRedux({ token: resp.token, email: resp.user.email, admin: false })
  );
  nav(PrivateRoutes.HOME, { replace: true });
}
