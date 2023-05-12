import { Column, Entity, Index, JoinColumn, ManyToOne, } from 'typeorm';

import { User, } from './User';


@Index('fiat_transactions_created_at', ['createdAt',], {})
@Index('fiat_transactions_pkey', ['id',], { unique: true, })
@Index('fiat_transactions_user_id', ['userId',], {})
@Entity('fiat_transactions', { schema: 'public', })
export class FiatTransactions {
  @Column('uuid', { primary: true, name: 'id', })
    id: string;

  @Column('character varying', { name: 'user_id', nullable: true, length: 255, })
    userId: string | null;

  @Column('enum', {
    name: 'type',
    nullable: true,
    enum: [
      'BUY_ORDER_FEE',
      'CARD_PURCHASE',
      'DEPOSIT_FEE',
      'DEPOSIT_FUNDS_RECEIVED',
      'IEO_PLEDGE',
      'LOAD_PLUTUS_CARD_FROM_CJ_WALLET',
      'ORDER_CANCELLED',
      'ORDER_CREATED',
      'ORDER_EXPIRED',
      'ORDER_FULFILLED',
      'PLUTON_WITHDRAW',
      'PLUTUS_WALLET_WITHDRAW_FEE',
      'SELL_ORDER_FEE',
      'SELL_ORDER_LOAD',
      'SUBSCRIPTION_CHARGE',
      'TRANSACTION_CANCELLED',
      'UNLOAD_PLUTUS_CARD_TO_CJ_WALLET',
      'WITHDRAWAL_FEE',
      'WITHDRAWAL_REQUEST_CREATED',
      'WITHDRAWAL_REQUEST_REJECTED',
      'PAYMENT_REQUEST_CREATED',
      'PAYMENT_REQUEST_REJECTED',
    ],
  })
    type:
  'BUY_ORDER_FEE' | 'CARD_PURCHASE' | 'DEPOSIT_FEE' | 'DEPOSIT_FUNDS_RECEIVED' | 'IEO_PLEDGE' | 'LOAD_PLUTUS_CARD_FROM_CJ_WALLET' | 'ORDER_CANCELLED' | 'ORDER_CREATED' | 'ORDER_EXPIRED' | 'ORDER_FULFILLED' | 'PAYMENT_REQUEST_CREATED' | 'PAYMENT_REQUEST_REJECTED' | 'PLUTON_WITHDRAW' | 'PLUTUS_WALLET_WITHDRAW_FEE' | 'SELL_ORDER_FEE' | 'SELL_ORDER_LOAD' | 'SUBSCRIPTION_CHARGE' | 'TRANSACTION_CANCELLED' | 'UNLOAD_PLUTUS_CARD_TO_CJ_WALLET' | 'WITHDRAWAL_FEE' | 'WITHDRAWAL_REQUEST_CREATED' | 'WITHDRAWAL_REQUEST_REJECTED' | null;

  @Column('numeric', {
    name: 'fiat_amount',
    precision: 19,
    scale: 2,
    default: () => 0,
  })
    fiatAmount: number;

  @Column('enum', { name: 'fiat_currency', enum: ['EUR', 'GBP', 'USD',], })
    fiatCurrency: 'EUR' | 'GBP' | 'USD';

  @Column('text', { name: 'reference_type', })
    referenceType: string;

  @Column('uuid', { name: 'reference_id', })
    referenceId: string;

  @Column('timestamp with time zone', { name: 'created_at', })
    createdAt: Date;

  @Column('timestamp with time zone', { name: 'updated_at', nullable: true, })
    updatedAt: Date | null;

  @Column('enum', {
    name: 'status',
    nullable: true,
    enum: ['FAILED', 'PENDING', 'SETTLED',],
    default: () => "'PENDING'",
  })
    status: 'FAILED' | 'PENDING' | 'SETTLED' | null;

  @ManyToOne(() => User, (users) => users.fiatTransactions)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'auth0Id', },])
    user: User;
}
