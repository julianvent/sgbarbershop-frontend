"use client";

import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { appointmentsRoute } from "@/app/utils/routes";
import CreateNewLayout from "@/app/components/base_layout/CreateNew/CreateNewLayout";

export default function NewAppointment() {
  return (
    <CreateNewLayout
      headerTitle={"Nueva cita"}
      mainTitle={"Crear nueva cita"}
      returnRoute={appointmentsRoute}
    >
      <AppointmentForm></AppointmentForm>
    </CreateNewLayout>
  );
}
