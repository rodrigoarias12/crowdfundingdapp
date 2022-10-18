import { useContract, useContractRead, useContractWrite } from "wagmi";

import CROWDFACTORY_ABI from "./abis/crowdfactory.json";
import CROWNFUNDINGPROJECT_ABI from "./abis/crowdfundingproject.json";
import { FACTORY_CONTRACT_ADDRESS } from "./constants";
import type { CrowdFactory } from "./typechain-types/CrowdFactory";
import type { CrowdfundingProject } from "./typechain-types/CrowdfundingProject";

/*//////////////////////////////////////////////////////////////
                              CROWD FACTORY
//////////////////////////////////////////////////////////////*/

export function useCrowdFactoryContract(): CrowdFactory {
  const contract = useContract({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
  });

  return contract as CrowdFactory;
}
export interface useCrowdFactoryFunctionWriterProps {
  functionName: string;
}
// create a generic hook to access write functions of contract
export function useCrowdFactoryFunctionWriter({
  functionName }:useCrowdFactoryFunctionWriterProps
): ReturnType<typeof useContractWrite> {
  const contractWrite = useContractWrite({ 
    mode: 'recklesslyUnprepared',
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
    functionName: functionName,
  });

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
): CrowdfundingProject {
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
  });

  return contract as CrowdfundingProject;
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
  const contractWrite = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: contractAddress,
    contractInterface: CROWNFUNDINGPROJECT_ABI,
    functionName: functionName,
  });

  return contractWrite;
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