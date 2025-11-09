import { useForm, FormProvider } from "react-hook-form";
import styles from "./styles.module.css";
import Input from "../../../components/form/input/Input";
import {
  durationValidation,
  nameValidation,
  priceValidation,
  descriptionValidation,
} from "@/app/utils/servicesValidators";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextArea from "@/app/components/form/input/TextArea";
import { servicesRoute } from "@/app/utils/routes";

export default function ServiceForm({ onSubmit, id }) {
  const router = useRouter();
  const [isCreatingService, setIsCreatingService] = useState(false);
  const methods = useForm();
  const submit = methods.handleSubmit(async (data) => {
    setIsCreatingService(true);
    if(id){
      await onSubmit(data, id);
    }
    await onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >

        <div className={styles.fieldsContainer}>
          <div className={styles.row}>
            <Input {...nameValidation}></Input>
            <Input {...priceValidation}></Input>
            <Input {...durationValidation}></Input>
          </div>
          <div className={styles.soloRow}>
            <TextArea {...descriptionValidation}></TextArea>

          </div>
            
          <div className={styles.fieldsConta}>
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => router.push(servicesRoute)}
              >
                Cancelar
              </button>
              <button type="submit">Confirmar</button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
