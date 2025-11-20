"use client";

import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { appointmentsRoute } from "@/app/utils/routes";
import CreateNewLayout from "@/app/components/base_layout/CreateNew/CreateNewLayout";
import Layout from "@/app/components/base_layout/Layout";

export default function NewAppointment() {
  return (
    <Layout
      headerTitle={"Nueva cita"}
      mainTitle={"Agendar nueva cita"}
      returnRoute={appointmentsRoute}
    >
      <AppointmentForm></AppointmentForm>
    </Layout>
  );
}
