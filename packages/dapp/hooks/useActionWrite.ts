import { ethers } from "ethers";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import CROWNFUNDINGPROJECT_ABI from "../abis/crowdfundingproject.json";
export type CampaignProps = { projectNumber: number };




const useActionWrite = (functionName="",publishedProjsAddress="", value="") => {
  
  const { config } = usePrepareContractWrite({
    addressOrName: publishedProjsAddress || "",
    contractInterface: CROWNFUNDINGPROJECT_ABI,
    functionName: functionName,
    overrides: {          
      value: ethers.utils.parseEther(value ? value?.toString() : "0"),
    }, 
    enabled: Boolean(value),
  })

  const { data, isError, isLoading, write, writeAsync } = useContractWrite(config)
  //console.log(data, isError, isLoading, write)
  return { data, isError, isLoading, write, writeAsync }
}

export default useActionWrite