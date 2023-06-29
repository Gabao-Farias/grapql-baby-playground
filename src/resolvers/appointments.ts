import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs";
import { Appointment, Customer } from "../dtos/models";

@Resolver(() => Appointment)
export default class AppointmentResolvers {
  appointments: Appointment[] = [];

  @Query(() => [Appointment]!)
  async getAppointments() {
    return this.appointments;
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment: Appointment = {
      endsAt: data.endsAt,
      startsAt: data.startsAt,
    };

    this.appointments.push(appointment);

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    console.log(appointment);

    return {
      name: "John Doe",
    };
  }
}
