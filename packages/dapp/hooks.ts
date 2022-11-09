import { useContract, useContractRead, useContractWrite,usePrepareContractWrite } from "wagmi";

import CROWDFACTORY_ABI from "./abis/crowdfactory.json";
import CROWNFUNDINGPROJECT_ABI from "./abis/crowdfundingproject.json";
import type { Crowdfactory } from "./contract-types/Crowdfactory";
import type { Crowdfundingproject } from "./contract-types/Crowdfundingproject";

/*//////////////////////////////////////////////////////////////
                              CROWD FACTORY
//////////////////////////////////////////////////////////////*/
export const FACTORY_CONTRACT_ADDRESS = "0x8A3D3a2b17eD94D7e23fCecc51912451f65982F9";

export function useCrowdFactoryContract(): Crowdfactory {
  const contract = useContract({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
  });

  return contract as Crowdfactory;
}
//config

// create a generic hook to access write functions of contract
export function useCrowdFactoryFunctionWriter(
  functionName: string,
  argu?: any[],
): ReturnType<typeof useContractWrite> {
  const  { config } = usePrepareContractWrite({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
    functionName: functionName,
    args:argu,
  })
  const contractWrite = useContractWrite(config);

  return contractWrite;
}

export interface UseCrowdFactoryFunctionReaderProps {
  functionName: string;
  args?: any[];
}
// create a generic hook to access read functions of contract
export function useCrowdFactoryFunctionReader({
  functionName,
  args,
}: UseCrowdFactoryFunctionReaderProps): ReturnType<typeof useContractRead> {
  const contractRead = useContractRead({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
    functionName: functionName,
    args: args,
    watch: true,
  });

  return contractRead;
}

/*//////////////////////////////////////////////////////////////
                          CROWD FUNDING PROJECT
//////////////////////////////////////////////////////////////*/

export function useCrowdfundingProjectContract(
  contractAddress: string
): Crowdfundingproject {
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
  });

  return contract as Crowdfundingproject;
}

export interface UseCrowdfundingProjectFunctionWriterProps {
  contractAddress: string;
  functionName: string;
}

export function useCrowdfundingProjectFunctionWriter({
  contractAddress,
  functionName,
}: UseCrowdfundingProjectFunctionWriterProps): ReturnType<
  typeof useContractWrite
> {
  const contractWrite = useContractWrite({mode:"recklesslyUnprepared",
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
    functionName: functionName,
  });

  return contractWrite ;
}

export interface UseCrowdfundingProjectFunctionReaderProps {
  contractAddress: string;
  functionName: string;
  args?: any[];
}

// create a generic hook to access read functions of contract
export function useCrowdfundingProjectFunctionReader({
  contractAddress,
  functionName,
  args,
}: UseCrowdfundingProjectFunctionReaderProps): ReturnType<
  typeof useContractRead
> {
  const contractRead = useContractRead({
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
    functionName: functionName,
    args: args,
    watch: true,
  });

  return contractRead;
}