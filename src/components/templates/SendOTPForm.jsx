import { sendOtp } from "services/auth";
import styles from "./SendOTPForm.module.css";

function SendOTPForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;
    const {response, error}= await sendOtp(mobile);
    if (response) setStep(2);
   if (error) console.log(error.response.data.message);
    console.log({response,error});
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>ورود به حساب کاربری </p>
      <span>
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد نمایید. کد
        تایید به این شماره ارسال خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
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


export default SendOTPForm;
