"use client";

import styles from "./Sign-In-Form.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "@/app/components/form/input/Input";
import {
  emailValidation,
  passwordValidation,
} from "@/app/utils/inputValidators";
import { signIn } from "../api/signIn";

export default function LoginForm() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const router = useRouter();

  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (data) => {
    setIsLoggingIn(true);
    await signIn(data);
    router.push("/dashboard");
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        noValidate
      >
        <div className={styles.fieldsContainer}>
          <Input {...emailValidation}></Input>
          <Input {...passwordValidation}></Input>
          <button type="submit" disabled={isLoggingIn}>
            Iniciar sesión
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
