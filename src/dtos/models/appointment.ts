import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Appointment {
  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
