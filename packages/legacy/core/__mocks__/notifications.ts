import { CredentialExchangeRecord as CredentialRecord, ProofExchangeRecord } from '@aries-framework/core'

type Notifications = {
  total: number
  notifications: Array<CredentialRecord | ProofExchangeRecord>
}

export const useNotifications = (): Notifications => {
  return { total: 0, notifications: [] }
}
