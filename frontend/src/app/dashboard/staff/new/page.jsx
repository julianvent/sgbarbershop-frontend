'use client';
import CreateNewLayout from "@/app/components/base_layout/CreateNew/CreateNewLayout";
import { staffRoute } from "@/app/utils/routes";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { createEmployee } from "../api/employees";

export default function NewEmployee(){
    return (
        <CreateNewLayout
        title={"Registrar empleado"}
        returnRoute={staffRoute}
        >
            <EmployeeForm 
            onSubmit={createEmployee}/>

        </CreateNewLayout>
        
    )
}