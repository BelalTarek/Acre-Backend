import { Column, Entity, Index, JoinColumn, ManyToOne, } from 'typeorm';

import { FiatAccounts, } from './FiatAccounts';
import { User, } from './User';
import { WithdrawalMethods, } from './WithdrawalMethods';


@Index('fiat_withdrawal_requests_pkey', ['id',], { unique: true, })
@Entity('fiat_withdrawal_requests', { schema: 'public', })
export class FiatWithdrawalRequests {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
    id: string;

  @Column('numeric', { name: 'amount', precision: 19, scale: 2, })
    amount: string;

  @Column('enum', {
    name: 'currency',
    nullable: true,
    enum: ['EUR', 'GBP', 'USD',],
  })
    currency: 'EUR' | 'GBP' | 'USD' | null;

  @Column('enum', {
    name: 'status',
    enum: ['COMPLETED', 'PENDING', 'REJECTED', 'TRANSFERRED',],
  })
    status: 'COMPLETED' | 'PENDING' | 'REJECTED' | 'TRANSFERRED';

  @Column('numeric', { name: 'fee', nullable: true, precision: 19, scale: 2, })
    fee: string | null;

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

  @ManyToOne(
    () => FiatAccounts,
    (fiatAccounts) => fiatAccounts.fiatWithdrawalRequests
  )
  @JoinColumn([{ name: 'fiat_account_id', referencedColumnName: 'id', },])
    fiatAccount: FiatAccounts;

  @ManyToOne(
    () => WithdrawalMethods,
    (withdrawalMethods) => withdrawalMethods.fiatWithdrawalRequests
  )
  @JoinColumn([{ name: 'withdrawal_method_id', referencedColumnName: 'id', },])
    withdrawalMethod: WithdrawalMethods;

  @ManyToOne(() => User, (users) => users.fiatWithdrawalRequests)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user: User;
}
