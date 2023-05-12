import { Column, Entity, Index, JoinColumn, OneToOne, } from 'typeorm';

import { User, } from './User';


@Index('personal_details_pkey', ['id',], { unique: true, })
@Index('personal_details_phone_unique', ['phoneCode', 'phoneNumber',], {
  unique: true,
})
@Index('personal_details_user_id_key', ['userId',], { unique: true, })
@Entity('personal_details', { schema: 'public', })
export class PersonalDetails {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
    id!: string;

  @Column('character varying', {
    name: 'user_id',
    nullable: true,
    unique: true,
    length: 255,
  })
    userId!: string | null;

  // TODO: make this not nullable
  @Column('character varying', {
    name: 'first_name',
    nullable: true,
    length: 255,
  })
    firstName!: string;

  @Column('character varying', {
    name: 'last_name',
    nullable: true,
    length: 255,
  })
    lastName!: string | null;

  @Column('timestamp with time zone', { name: 'date_of_birth', nullable: true, })
    dateOfBirth!: Date | null;

  @Column('character varying', {
    name: 'citizenship',
    nullable: true,
    length: 255,
  })
    citizenship!: string | null;

  // TODO: make not nullable
  @Column('character varying', {
    name: 'phone_code',
    nullable: true,
    unique: true,
    length: 255,
  })
    phoneCode!: string;

  // TODO make not nullable
  @Column('character varying', {
    name: 'phone_number',
    nullable: true,
    unique: true,
    length: 255,
  })
    phoneNumber!: string;

  @Column('timestamp with time zone', { name: 'created_at', })
    createdAt!: Date;

  @Column('timestamp with time zone', { name: 'updated_at', })
    updatedAt!: Date;

  @Column('character varying', {
    name: 'industry',
    nullable: true,
    length: 255,
  })
    industry!: string | null;

  @Column('character varying', {
    name: 'monthly_spend',
    nullable: true,
    length: 255,
  })
    monthlySpend!: string | null;

  @Column('character varying', {
    name: 'nationality',
    nullable: true,
    length: 255,
  })
    nationality!: string | null;

  @Column('character varying', {
    name: 'tax_residency',
    nullable: true,
    length: 255,
  })
    taxResidency!: string | null;

  @OneToOne(() => User, (users) => users.personalDetails)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user!: User;
}
