import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "../../services/user";
import styles from "../../styles/CheckOtpForm.module.css";

function CheckOtpForm({ mobile, setCode, code, setStep }) {
  const navigate = useNavigate();

  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
      console.log(response);
    }
    if (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده را به شماره {mobile}.را وارد کنید</span>
      <label htmlFor="input">کد تایید شده را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button className={styles.backButton} onClick={() => setStep(1)}>
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
