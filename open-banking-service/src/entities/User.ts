/* eslint-disable max-lines */
import { Column, Entity, Index, OneToMany, OneToOne, } from 'typeorm';

import { Address, } from './Address';
import { ClearJunctionWithdrawalRequests, } from './ClearJunctionWithdrawalRequests';
import { FiatAccounts, } from './FiatAccounts';
import { FiatDeposits, } from './FiatDeposits';
import { FiatTransactions, } from './FiatTransactions';
import { FiatWithdrawalRequests, } from './FiatWithdrawalRequests';
import { PersonalDetails, } from './PersonalDetails';
import { WithdrawalMethods, } from './WithdrawalMethods';


@Index('users_auth0_id_key', ['auth0Id',], { unique: true, })
@Index('idx_created_at', ['createdAt',], {})
@Index('users_deleted_at', ['deletedAt',], {})
@Index('users_unique_email', ['email',], { unique: true, })
@Index('users_pkey', ['id',], { unique: true, })
@Index('refresh_token_unique', ['refreshToken',], { unique: true, })
@Entity('users', { schema: 'public', })
export class User {
  @Column('uuid', { primary: true, name: 'id', })
    id!: string;

  @Column('character varying', { name: 'auth0_id', unique: true, length: 255, })
    auth0Id!: string;

  @Column('character varying', { name: 'email', unique: true, length: 255, })
    email!: string;

  @Column('character varying', { name: 'picture', nullable: true, length: 255, })
    picture!: string | null;

  @Column('timestamp with time zone', { name: 'created_at', })
    createdAt!: Date;

  @Column('timestamp with time zone', { name: 'updated_at', nullable: true, })
    updatedAt!: Date | null;

  @Column('enum', {
    name: 'verification_level',
    nullable: true,
    enum: ['IDV1', 'IDV2', 'IDV3',],
    default: () => "'IDV1'",
  })
    verificationLevel!: 'IDV1' | 'IDV2' | 'IDV3' | null;

  @Column('json', { name: 'accepted_terms', nullable: true, })
    acceptedTerms!: object | null;

  @Column('enum', {
    name: 'onboarding_step',
    nullable: true,
    enum: [
      'completed',
      'initial',
      'kyc_checking',
      'kyc_completed',
      'kyc_document_upload',
      'kyc_failed',
      'kyc_ready_for_verification',
      'kyc_selfie_upload',
      'kyc_verification',
      'legal_terms',
      'personal_details',
    ],
    default: () => "'initial'",
  })
    onboardingStep!:
  | 'completed'
  | 'initial'
  | 'kyc_checking'
  | 'kyc_completed'
  | 'kyc_document_upload'
  | 'kyc_failed'
  | 'kyc_ready_for_verification'
  | 'kyc_selfie_upload'
  | 'kyc_verification'
  | 'legal_terms'
  | 'personal_details'
  | null;

  @Column('enum', {
    name: 'local_currency',
    nullable: false,
    enum: ['EUR', 'GBP', 'USD',],
    default: () => "'EUR'",
  })
    localCurrency!: 'EUR' | 'GBP' | 'USD';

  @Column('timestamp with time zone', { name: 'deleted_at', nullable: true, })
    deletedAt!: Date | null;

  @Column('text', { name: 'refresh_token', nullable: true, unique: true, })
    refreshToken!: string | null;

  @Column('character varying', {
    name: 'password',
    nullable: true,
    length: 255,
  })
    password!: string | null;

  @Column('character varying', {
    name: 'mfa_secret',
    nullable: true,
    length: 255,
  })
    mfaSecret!: string | null;

  @Column('json', { name: 'subscription', nullable: true, })
    subscription!: object | null;

  @Column('text', { name: 'mobile_refresh_token', nullable: true, })
    mobileRefreshToken!: string | null;

  @OneToMany(() => Address, (addresses) => addresses.user)
    addresses!: Address[];

  @OneToOne(() => PersonalDetails, (personalDetails) => personalDetails.user)
    personalDetails!: PersonalDetails;

  @OneToMany(() => FiatAccounts, (fiatAccounts) => fiatAccounts.user)
    fiatAccounts: FiatAccounts[];

  @OneToMany(() => FiatDeposits, (fiatDeposits) => fiatDeposits.user)
    fiatDeposits!: FiatDeposits[];

  @OneToMany(
    () => FiatWithdrawalRequests,
    (fiatWithdrawalRequests) => fiatWithdrawalRequests.user
  )
    fiatWithdrawalRequests: FiatWithdrawalRequests[];

  @OneToMany(
    () => WithdrawalMethods,
    (withdrawalMethods) => withdrawalMethods.user
  )
    withdrawalMethods: WithdrawalMethods[];

  @OneToMany(
    () => ClearJunctionWithdrawalRequests,
    (clearJunctionWithdrawalRequests) => clearJunctionWithdrawalRequests.user
  )
    clearJunctionWithdrawalRequests: ClearJunctionWithdrawalRequests[];

  @OneToMany(
    () => FiatTransactions,
    (fiatTransactions) => fiatTransactions.user
  )
    fiatTransactions: FiatTransactions[];
}
