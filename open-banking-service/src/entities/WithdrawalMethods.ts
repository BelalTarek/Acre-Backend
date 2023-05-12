import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { ClearJunctionWithdrawalRequests, } from './ClearJunctionWithdrawalRequests';
import { FiatWithdrawalRequests, } from './FiatWithdrawalRequests';
import { User, } from './User';


@Index('withdrawal_methods_pkey', ['id',], { unique: true, })
@Entity('withdrawal_methods', { schema: 'public', })
export class WithdrawalMethods {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
    id: string;

  @Column('character varying', { name: 'currency', length: 3, })
    currency: string;

  @Column('enum', {
    name: 'type',
    enum: ['BANK_TRANSFER_EU', 'BANK_TRANSFER_UK', 'CREDIT_CARD',],
  })
    type: 'BANK_TRANSFER_EU' | 'BANK_TRANSFER_UK' | 'CREDIT_CARD';

  @Column('json', { name: 'details', })
    details: object;

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

  @Column('timestamp with time zone', { name: 'deleted_at', nullable: true, })
    deletedAt: Date | null;

  @OneToMany(
    () => ClearJunctionWithdrawalRequests,
    (clearJunctionWithdrawalRequests) =>
      clearJunctionWithdrawalRequests.withdrawalMethod
  )
    clearJunctionWithdrawalRequests: ClearJunctionWithdrawalRequests[];

  @OneToMany(
    () => FiatWithdrawalRequests,
    (fiatWithdrawalRequests) => fiatWithdrawalRequests.withdrawalMethod
  )
    fiatWithdrawalRequests: FiatWithdrawalRequests[];

  @ManyToOne(() => User, (users) => users.withdrawalMethods)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user: User;
}
