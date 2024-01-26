import { ProofRequestTemplate, ProofRequestType } from './types/proof-reqeust-template'

export const useProofRequestTemplates = (useDevRestrictions: boolean) => {
  const studentRestrictions = [{ cred_def_id: 'XUxBrVSALWHLeycAUhrNr9:3:CL:26293:student_card' }]
  const studentDevRestrictions = [{ schema_name: 'student_card' }]
  const restrictions = useDevRestrictions ? studentDevRestrictions : studentRestrictions
  const defaultProofRequestTemplates: Array<ProofRequestTemplate> = [
    {
      id: 'Aries:5:StudentFullName:0.0.1:indy',
      name: 'Student full name',
      description: 'Verify the full name of a student',
      version: '0.0.1',
      payload: {
        type: ProofRequestType.AnonCreds,
        data: [
          {
            schema: 'XUxBrVSALWHLeycAUhrNr9:3:CL:26293:Student Card',
            requestedAttributes: [
              {
                name: 'student_first_name',
                restrictions,
              },
              {
                name: 'student_last_name',
                restrictions,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'Aries:5:StudentFullNameAndExpirationDate:0.0.1:indy',
      name: 'Student full name and expiration date',
      description: 'Verify that full name of a student and that he/she has a not expired student card.',
      version: '0.0.1',
      payload: {
        type: ProofRequestType.AnonCreds,
        data: [
          {
            schema: 'XUxBrVSALWHLeycAUhrNr9:3:CL:26293:Student Card',
            requestedAttributes: [
              {
                names: ['student_first_name', 'student_last_name'],
                restrictions,
              },
            ],
            requestedPredicates: [
              {
                name: 'expiry_date',
                predicateType: '>=',
                predicateValue: 20240101,
                restrictions,
              },
            ],
          },
        ],
      },
    },
  ]
  return defaultProofRequestTemplates
}
