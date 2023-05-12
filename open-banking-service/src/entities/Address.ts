import { Column, Entity, Index, JoinColumn, ManyToOne, } from 'typeorm';

import { User, } from './User';


@Index('addresses_pkey', ['id',], { unique: true, })
@Index('addresses_user_id_is_active_key_index', ['userId',], { unique: true, })
@Entity('addresses', { schema: 'public', })
export class Address {
  @Column('uuid', { primary: true, name: 'id', })
    id!: string;

  @Column('character varying', { name: 'user_id', nullable: true, length: 255, })
    userId!: string | null;

  // TODO: make not nullable
  @Column('character varying', {
    name: 'country_code',
    nullable: true,
    length: 255,
  })
    countryCode!: string;

  @Column('character varying', { name: 'street', length: 255, })
    street!: string;

  @Column('character varying', { name: 'suite', nullable: true, length: 255, })
    suite!: string | null;

  @Column('character varying', { name: 'postcode', length: 255, })
    postcode!: string;

  @Column('timestamp with time zone', { name: 'created_at', })
    createdAt!: Date;

  @Column('timestamp with time zone', { name: 'updated_at', })
    updatedAt!: Date;

  // TODO: make it not nullable
  @Column('character varying', { name: 'city', nullable: true, length: 255, })
    city!: string;

  @Column('boolean', { name: 'is_active', nullable: true, })
    isActive!: boolean | null;

  @ManyToOne(() => User, (users) => users.addresses)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user!: User;
}
