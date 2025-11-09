"use client";
import CreateNewLayout from "@/app/components/base_layout/CreateNew/CreateNewLayout";
import { servicesRoute } from "@/app/utils/routes";
import ServiceForm from "../ServiceForm/ServiceForm";
import { createService } from "../api/services";

export default function NewService() {
  return (
    <CreateNewLayout
      title={"Registrar nuevo servicio"}
      returnRoute={servicesRoute}
    >
      <ServiceForm
        onSubmit={createService}
      ></ServiceForm>
    </CreateNewLayout>
  );
}
