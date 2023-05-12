import { Column, Entity, Index, JoinColumn, ManyToOne, } from 'typeorm';

import { User, } from './User';


@Index('fiat_deposits_pkey', ['id',], { unique: true, })
@Index(
  'provider_provider_deposit_id_unique',
  ['provider', 'providerDepositId',],
  { unique: true, }
)
@Entity('fiat_deposits', { schema: 'public', })
export class FiatDeposits {
  @Column('uuid', { primary: true, name: 'id', default: () => 'uuid_generate_v4()', })
    id: string;

  @Column('character varying', { name: 'user_id', nullable: false, length: 255, })
    userId: string;

  @Column('numeric', {
    name: 'amount',
    nullable: true,
    precision: 19,
    scale: 2,
  })
    amount: string | null;

  @Column('text', { name: 'currency', })
    currency: string;

  @Column('numeric', {
    name: 'fee_amount',
    nullable: true,
    precision: 19,
    scale: 2,
  })
    feeAmount: string | null;

  @Column('numeric', {
    name: 'fee_exchange_rate',
    nullable: true,
    precision: 19,
    scale: 4,
  })
    feeExchangeRate: string | null;

  @Column('text', { name: 'fee_currency', nullable: true, })
    feeCurrency: string | null;

  @Column('character varying', {
    name: 'status',
    length: 16,
    default: () => "'REQUESTED'",
  })
    status: string;

  @Column('character varying', {
    name: 'provider',
    unique: true,
    length: 16,
    default: () => "'sofort'",
  })
    provider: string;

  @Column('character varying', {
    name: 'provider_deposit_id',
    nullable: true,
    unique: true,
    length: 100,
  })
    providerDepositId: string | null;

  @Column('timestamp with time zone', {
    name: 'provider_transaction_time',
    nullable: true,
  })
    providerTransactionTime: Date | null;

  @Column('json', { name: 'api_reponse', nullable: true, })
    apiReponse: object | null;

  @Column('timestamp with time zone', { name: 'created_at', default: () => 'now()', })
    createdAt: Date;

  @Column('timestamp with time zone', { name: 'updated_at', default: () => 'now()', })
    updatedAt: Date;

  @Column('numeric', {
    name: 'deposit_amount',
    precision: 19,
    scale: 2,
    default: () => 0,
  })
    depositAmount: number;

  @ManyToOne(() => User, (users) => users.fiatDeposits)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user: User;
}
