"use client";

import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { appointmentsRoute } from "@/app/utils/routes";
import CreateNewLayout from "@/app/components/base_layout/CreateNew/CreateNewLayout";

export default function NewAppointment() {
  return (
    <CreateNewLayout title={"Agendar cita"} returnRoute={appointmentsRoute}>
      <AppointmentForm></AppointmentForm>
    </CreateNewLayout>
  );
}
