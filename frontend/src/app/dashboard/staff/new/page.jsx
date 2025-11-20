"use client";
import { staffRoute } from "@/app/utils/routes";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { createEmployee } from "../api/employees";
import Layout from "@/app/components/base_layout/Layout";

export default function NewEmployee() {
  return (
    <Layout
      headerTitle={"Nuevo empleado"}
      mainTitle={"Registrar nuevo empleado"}
      returnRoute={staffRoute}
    >
      <EmployeeForm onSubmit={createEmployee} />
    </Layout>
  );
}
