import { useForm, FormProvider } from "react-hook-form"
import styles from "./styles.module.css"
import Input from "../../../components/form/input/Input"
import { durationValidation, nameValidation, priceValidation, descriptionValidation } from "@/app/utils/servicesValidators"
import { useState } from "react"
import inputStyles from "@/app/components/form/input/Input.module.css"
import { useRouter } from "next/navigation"


export default function ServiceForm({onSubmit,id}){
    const router = useRouter();
    const [isCreatingService, setIsCreatingService] = useState(false);
    const methods = useForm();
    const submit = methods.handleSubmit(async (data) => {
        setIsCreatingService(true);
        await onSubmit(data);
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={e => {
                e.preventDefault();
                submit();
            }}>
                <h1>{id ? 'Editando servicio': 'Registrar nuevo servicio'}</h1>

                <div className={styles.fieldsContainer}>
                    <div className={styles.row}>
                        <Input {...nameValidation} ></Input>
                        <Input {... priceValidation} ></Input>
                        <Input {...durationValidation} ></Input>  
                    </div>
                    <div className={styles.soloRow}>
                        <div className={inputStyles.field}>
                            <label  htmlFor={descriptionValidation.id}>{descriptionValidation.label}</label>
                            <textarea className={styles.textArea} name={descriptionValidation.name} id={descriptionValidation.id}></textarea>
                            
                        </div>

                    </div>
                    
                    <div className={styles.fieldsConta}>
                        <div className={styles.cornerButtons}>
                            <button type="button" className={styles.cancelBoton} onClick={() => router.push('/dashboard/services')} >Cancelar</button>
                            <button type="submit">Confirmar</button>
                        </div>
                    </div>

                </div>

            </form>
        </FormProvider>

    )
}