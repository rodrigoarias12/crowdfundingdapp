//read function
//view and pure functions (Smartcontract)

import type { BigNumber } from "ethers";
import type { Result } from "ethers/lib/utils";

import { DEBUG } from "./constants";
import type { CrowdFactory } from "./typechain-types/CrowdFactory";
import type { CrowdfundingProject } from "./typechain-types/CrowdfundingProject";

import {
  useCrowdFactoryFunctionReader,
  useCrowdfundingProjectFunctionReader,
} from "./hooks";

/*//////////////////////////////////////////////////////////////
                              CROWD FACTORY
//////////////////////////////////////////////////////////////*/

export function useTotalPublishedProjs(): number | undefined {
  const totalPublishedProjsReader = useCrowdFactoryFunctionReader({
    functionName: "totalPublishedProjs",
  });
  const totalPublishedProjs:
    | Awaited<ReturnType<CrowdFactory["totalPublishedProjs"]>>
    | Result
    | undefined = totalPublishedProjsReader.data;

  DEBUG &&
    console.log("totalPublishedProjs: ", totalPublishedProjs?.toString());

  if (!totalPublishedProjs) return undefined;

  return parseInt(totalPublishedProjs.toString()) as number;
}

export function usePublishedProjs(index: number): string | undefined {
  const publishedProjsReader = useCrowdFactoryFunctionReader({
    functionName: "publishedProjs",
    args: [index],
  });
  const publishedProjs:
    | Awaited<ReturnType<CrowdFactory["publishedProjs"]>>
    | Result
    | undefined = publishedProjsReader.data;

  DEBUG && console.log("publishedProjs: ", publishedProjs);

  if (!publishedProjs) return undefined;

  return publishedProjs as unknown as string;
}

/*//////////////////////////////////////////////////////////////
                          CROWD FUNDING PROJECT
//////////////////////////////////////////////////////////////*/

export function useProjTitle(contractAddress: string): string | undefined {
  const projTitleReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "projTitle",
  });

  const projTitle:
    | Awaited<ReturnType<CrowdfundingProject["projTitle"]>>
    | Result
    | undefined = projTitleReader.data;

  DEBUG && console.log("projTitle: ", projTitle);

  if (!projTitle) return undefined;

  return projTitle as unknown as string;
}

export function useProjDescription(
  contractAddress: string
): string | undefined {
  const projDescriptionReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "projDescription",
  });

  const projDescription:
    | Awaited<ReturnType<CrowdfundingProject["projDescription"]>>
    | Result
    | undefined = projDescriptionReader.data;

  DEBUG && console.log("projDescription: ", projDescription);

  if (!projDescription) return undefined;

  return projDescription as unknown as string;
}

export function useGoalAmount(contractAddress: string): BigNumber | undefined {
  const goalAmountReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "goalAmount",
  });

  const goalAmount:
    | Awaited<ReturnType<CrowdfundingProject["goalAmount"]>>
    | Result
    | undefined = goalAmountReader.data;

  DEBUG && console.log("goalAmount: ", goalAmount);

  if (!goalAmount) return undefined;

  return goalAmount as unknown as BigNumber;
}

export function useRaisedAmount(
  contractAddress: string
): BigNumber | undefined {
  const raisedAmountReader = useCrowdfundingProjectFunctionReader({
    contractAddress: contractAddress,
    functionName: "raisedAmount",
  });

  const raisedAmount:
    | Awaited<ReturnType<CrowdfundingProject["raisedAmount"]>>
    | Result
    | undefined = raisedAmountReader.data;

  DEBUG && console.log("raisedAmount: ", raisedAmount);

  if (!raisedAmount) return undefined;

  return raisedAmount as unknown as BigNumber;
}