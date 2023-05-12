import { Column, Entity, Index, JoinColumn, ManyToOne, } from 'typeorm';

import { FiatAccounts, } from './FiatAccounts';


@Index('fiat_payment_requests_pkey', ['id',], { unique: true, })
@Entity('fiat_payment_requests', { schema: 'public', })
export class FiatPaymentRequests {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
    id: string;
    
  @Column('numeric', { name: 'amount', precision: 19, scale: 2, })
    amount: string;

  @Column('enum', { name: 'currency', enum: ['EUR', 'GBP', 'USD',], })
    currency: 'EUR' | 'GBP' | 'USD';

  @Column('enum', {
    name: 'status',
    enum: ['COMPLETED', 'PENDING', 'REJECTED', 'TRANSFERRED',],
  })
    status: 'COMPLETED' | 'PENDING' | 'REJECTED' | 'TRANSFERRED';

  @Column('enum', { name: 'type', enum: ['DOMESTIC', 'INTERNATIONAL',], })
    type: 'DOMESTIC' | 'INTERNATIONAL';

  @Column('json', { name: 'payee', nullable: true, })
    payee: object | null;

  @Column('json', { name: 'api_request', nullable: true, })
    apiRequest: object | null;

  @Column('timestamp with time zone', {
    name: 'created_at',
    nullable: true,
    default: () => 'now()',
  })
    createdAt: Date | null;

  @Column('timestamp with time zone', {
    name: 'updated_at',
    nullable: true,
    default: () => 'now()',
  })
    updatedAt: Date | null;

  @ManyToOne(
    () => FiatAccounts,
    (fiatAccounts) => fiatAccounts.fiatPaymentRequests
  )
  @JoinColumn([{ name: 'fiat_account_id', referencedColumnName: 'id', },])
    fiatAccount: FiatAccounts;
}
