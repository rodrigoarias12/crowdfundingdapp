import { ethers } from "ethers";
import { useContractRead, usePrepareContractWrite } from 'wagmi';
import CROWDFACTORY_ABI from "../abis/crowdfactory.json";
export type CampaignProps = { projectNumber: number };
import { FACTORY_CONTRACT_ADDRESS } from "../constants";



const useActionRead = (functionName="") => {
  
  const contractRead = useContractRead({
    addressOrName: FACTORY_CONTRACT_ADDRESS,
    contractInterface: CROWDFACTORY_ABI,
    functionName: functionName,
    watch: false,
  });
  return contractRead;
}

export default useActionRead