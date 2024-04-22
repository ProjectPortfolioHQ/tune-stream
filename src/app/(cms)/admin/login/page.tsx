"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/cms/v1/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/admin/dashboard");
    } else {
      setErrorMessage("Invalid email or password");
    }
  }

  return (
    <div className={styles.signin}>
      <form onSubmit={handleSubmit} className={styles.signinForm}>
        <h1 className={styles.formHeading}>Tune Stream Cms</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
}
