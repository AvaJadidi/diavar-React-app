import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import styles from "./Header.module.css";

import { deleteCookie } from "src/utils/cookie";
import { getProfile } from "src/services/user";

function Header() {
  const { refetch, data, isLoading, error } = useQuery(["profile"], getProfile);
  console.log({ data, isLoading, error });

  const navigate = useNavigate();

  const logoutHandler = () => {
    deleteCookie();
    navigate("/");
    refetch();
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src="divar.svg" />
        </Link>
        <span>
          <img src="location.svg" alt="" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span className={styles.profile}>
            <img src="profile.svg" alt="" />
            <p>دیوار من</p>
          </span>
        </Link>
        {data ? (
          <>
            <div  className={styles.logout}>
              
                <p>{data?.data?.role === "ADMIN" ? "ادمین" : "کاربر"}</p>
             
              <Link to="/">
                <span  onClick={logoutHandler}>
                  <img src="logout.svg" alt="Logout" />
                  <p>خروج از حساب کاربری</p>
                </span>
              </Link>
            </div>
          </>
        ) : null}

        <Link className={styles.button} to="/dashboard">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
