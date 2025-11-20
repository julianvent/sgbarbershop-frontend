"use client";
import { servicesRoute } from "@/app/utils/routes";
import ServiceForm from "../ServiceForm/ServiceForm";
import { createService } from "../api/services";
import Layout from "@/app/components/base_layout/Layout";

export default function NewService() {
  return (
    <Layout
      headerTitle={"Nuevo servicio"}
      mainTitle={"Registrar nuevo servicio"}
      returnRoute={servicesRoute}
    >
      <ServiceForm onSubmit={createService}></ServiceForm>
    </Layout>
  );
}
