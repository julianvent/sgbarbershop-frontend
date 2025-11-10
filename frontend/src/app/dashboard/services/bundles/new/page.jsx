"use client";
import CreateNewLayout from "@/app/components/base_layout/CreateNew/CreateNewLayout";
import { servicesRoute } from "@/app/utils/routes";
import BundleForm from "../../ServiceForm/BundleForm";
import { createBundle } from "../../api/services";

export default function NewService() {
  return (
    <CreateNewLayout
      title={"Registrar nuevo paquete"}
      returnRoute={servicesRoute}
    >
        <BundleForm onSubmit={createBundle}></BundleForm>

    </CreateNewLayout>
  );
}
