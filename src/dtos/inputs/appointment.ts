import { Field, InputType } from "type-graphql";

@InputType()
export default class CreateAppointmentInput {
  @Field()
  customerId: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
