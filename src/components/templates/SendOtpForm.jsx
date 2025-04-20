import { sendOtp } from "../../services/auth";

import styles from "../../styles/SendOtpForm.module.css";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    console.log({ response, error });

    if (response) setStep(2);
    if (error) {
      const errorMsg = error?.response?.data?.message || "خطایی رخ داده";
      console.log(errorMsg);
    }
    console.log({ response, error });
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار،لطفا شماره موبایل خود را وارد کنید.کد
        تایید به این شماره پیامک خواهد شد
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد بکنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
