import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { FiatPaymentRequests, } from './FiatPaymentRequests';
import { FiatWithdrawalRequests, } from './FiatWithdrawalRequests';
import { User, } from './User';


@Index('fiat_accounts_pkey', ['id',], { unique: true, })
@Entity('fiat_accounts', { schema: 'public', })
export class FiatAccounts {
  @Column('uuid', { primary: true, name: 'id', default: () => 'uuid_generate_v4()', })
    id: string;

  @Column('character varying', { name: 'customer_id', length: 255, })
    customerId: string;

  @Column('enum', { name: 'legal_entity', enum: ['GB', 'IE', 'NL',], })
    legalEntity: 'GB' | 'IE' | 'NL';

  @Column('character varying', { name: 'user_id', nullable: false, length: 255, })
    userId: string;

  @Column('character varying', {
    name: 'account_id',
    nullable: true,
    length: 255,
  })
    accountId: string | null;

  @Column('enum', {
    name: 'currency',
    nullable: true,
    enum: ['EUR', 'GBP', 'USD',],
  })
    currency: 'EUR' | 'GBP' | 'USD' | null;

  @Column('character varying', { name: 'type', nullable: true, length: 255, })
    type: string | null;

  @Column('character varying', {
    name: 'iban_account',
    nullable: true,
    length: 255,
  })
    ibanAccount: string | null;

  @Column('character varying', {
    name: 'bic_sort',
    nullable: true,
    length: 255,
  })
    bicSort: string | null;

  @Column('json', { name: 'api_request', nullable: true, })
    apiRequest: object | null;

  @Column('json', { name: 'api_response', nullable: true, })
    apiResponse: object | null;

  @Column('timestamp with time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
    createdAt: Date;

  @Column('timestamp with time zone', {
    name: 'updated_at',
    default: () => 'now()',
  })
    updatedAt: Date;

  @Column('character varying', {
    name: 'payin_id',
    nullable: true,
    length: 255,
  })
    payinId: string | null;

  @Column('character varying', {
    name: 'payout_id',
    nullable: true,
    length: 255,
  })
    payoutId: string | null;

  @ManyToOne(() => User, (users) => users.fiatAccounts)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user: User;

  @OneToMany(
    () => FiatWithdrawalRequests,
    (fiatWithdrawalRequests) => fiatWithdrawalRequests.fiatAccount
  )
    fiatWithdrawalRequests: FiatWithdrawalRequests[];

  @OneToMany(
    () => FiatPaymentRequests,
    (fiatPaymentRequests) => fiatPaymentRequests.fiatAccount
  )
    fiatPaymentRequests: FiatPaymentRequests[];
}
