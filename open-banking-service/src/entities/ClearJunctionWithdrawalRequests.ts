import { Column, Entity, Index, JoinColumn, ManyToOne, } from 'typeorm';

import { User, } from './User';
import { WithdrawalMethods, } from './WithdrawalMethods';


@Index('clear_junction_withdrawal_requests_pkey', ['id',], { unique: true, })
@Entity('clear_junction_withdrawal_requests', { schema: 'public', })
export class ClearJunctionWithdrawalRequests {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
    id: string;

  @Column('numeric', { name: 'amount', precision: 19, scale: 2, })
    amount: string;

  @Column('character varying', { name: 'currency', length: 3, })
    currency: string;

  @Column('enum', {
    name: 'status',
    enum: ['COMPLETED', 'PENDING', 'REJECTED', 'TRANSFERED',],
  })
    status: 'COMPLETED' | 'PENDING' | 'REJECTED' | 'TRANSFERED';

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

  @Column('uuid', { name: 'clear_junction_wallet_id', nullable: true, })
    clearJunctionWalletId: string | null;

  @Column('numeric', {
    name: 'fee',
    precision: 19,
    scale: 2,
    default: () => '0',
  })
    fee: string;

  @ManyToOne(
    () => WithdrawalMethods,
    (withdrawalMethods) => withdrawalMethods.clearJunctionWithdrawalRequests
  )
  @JoinColumn([{ name: 'withdrawal_method_id', referencedColumnName: 'id', },])
    withdrawalMethod: WithdrawalMethods;

  @ManyToOne(() => User, (users) => users.clearJunctionWithdrawalRequests)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user: User;
}
