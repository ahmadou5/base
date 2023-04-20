import { useMemo } from 'react'

const mapCriteriasToQualifications = {
  
  
  needQualifiedWhitelist: 'isQualifiedWhitelist'
}

export default function useCriterias(userBasicPoolInfo, ifoCriterias) {
  const criterias = useMemo(
    () =>
      Object.keys(ifoCriterias)
        .filter((key) => ifoCriterias[key])
        .map((key) => ({
          type: mapCriteriasToQualifications[key],
          value: Boolean(userBasicPoolInfo[mapCriteriasToQualifications[key]]),
        })),
    [ifoCriterias, userBasicPoolInfo],
  )

  const isEligible = useMemo(() => criterias.some((criteria) => criteria?.value), [criterias])

  return {
    isEligible,
    criterias,
  }
}
