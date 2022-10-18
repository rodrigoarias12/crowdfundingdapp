/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CrowdfundingProject,
  CrowdfundingProjectInterface,
} from "../CrowdfundingProject";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "projectTitle",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "projgoalAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "projDescript",
        type: "string",
      },
      {
        internalType: "address",
        name: "ownerWallet_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "donar",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Funded",
    type: "event",
  },
  {
    inputs: [],
    name: "goalAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "makeDonation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "projDescription",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "projTitle",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "raisedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d6738038062000d678339818101604052810190620000379190620002e0565b8360009081620000489190620005d1565b50826002819055508160019081620000619190620005d1565b5080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620006b8565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200011682620000cb565b810181811067ffffffffffffffff82111715620001385762000137620000dc565b5b80604052505050565b60006200014d620000ad565b90506200015b82826200010b565b919050565b600067ffffffffffffffff8211156200017e576200017d620000dc565b5b6200018982620000cb565b9050602081019050919050565b60005b83811015620001b657808201518184015260208101905062000199565b60008484015250505050565b6000620001d9620001d38462000160565b62000141565b905082815260208101848484011115620001f857620001f7620000c6565b5b6200020584828562000196565b509392505050565b600082601f830112620002255762000224620000c1565b5b815162000237848260208601620001c2565b91505092915050565b6000819050919050565b620002558162000240565b81146200026157600080fd5b50565b60008151905062000275816200024a565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002a8826200027b565b9050919050565b620002ba816200029b565b8114620002c657600080fd5b50565b600081519050620002da81620002af565b92915050565b60008060008060808587031215620002fd57620002fc620000b7565b5b600085015167ffffffffffffffff8111156200031e576200031d620000bc565b5b6200032c878288016200020d565b94505060206200033f8782880162000264565b935050604085015167ffffffffffffffff811115620003635762000362620000bc565b5b62000371878288016200020d565b92505060606200038487828801620002c9565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003e357607f821691505b602082108103620003f957620003f86200039b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000424565b6200046f868362000424565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620004b2620004ac620004a68462000240565b62000487565b62000240565b9050919050565b6000819050919050565b620004ce8362000491565b620004e6620004dd82620004b9565b84845462000431565b825550505050565b600090565b620004fd620004ee565b6200050a818484620004c3565b505050565b5b81811015620005325762000526600082620004f3565b60018101905062000510565b5050565b601f82111562000581576200054b81620003ff565b620005568462000414565b8101602085101562000566578190505b6200057e620005758562000414565b8301826200050f565b50505b505050565b600082821c905092915050565b6000620005a66000198460080262000586565b1980831691505092915050565b6000620005c1838362000593565b9150826002028217905092915050565b620005dc8262000390565b67ffffffffffffffff811115620005f857620005f7620000dc565b5b620006048254620003ca565b6200061182828562000536565b600060209050601f83116001811462000649576000841562000634578287015190505b620006408582620005b3565b865550620006b0565b601f1984166200065986620003ff565b60005b8281101562000683578489015182556001820191506020850194506020810190506200065c565b86831015620006a357848901516200069f601f89168262000593565b8355505b6001600288020188555050505b505050505050565b61069f80620006c86000396000f3fe60806040526004361061004a5760003560e01c80632636b9451461004f57806340ea0a941461007a578063bedab4fe14610084578063c59ee1dc146100af578063cbd60d54146100da575b600080fd5b34801561005b57600080fd5b50610064610105565b60405161007191906103bb565b60405180910390f35b61008261010b565b005b34801561009057600080fd5b50610099610280565b6040516100a69190610466565b60405180910390f35b3480156100bb57600080fd5b506100c461030e565b6040516100d191906103bb565b60405180910390f35b3480156100e657600080fd5b506100ef610314565b6040516100fc9190610466565b60405180910390f35b60025481565b60035460025411610151576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610148906104d4565b60405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163460405161019990610525565b60006040518083038185875af1925050503d80600081146101d6576040519150601f19603f3d011682016040523d82523d6000602084013e6101db565b606091505b505090508061021f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021690610586565b60405180910390fd5b346003600082825461023191906105d5565b9250508190555042343373ffffffffffffffffffffffffffffffffffffffff167fcd909ec339185c4598a4096e174308fbdf136d117f230960f873a2f2e81f63af60405160405180910390a450565b6000805461028d90610638565b80601f01602080910402602001604051908101604052809291908181526020018280546102b990610638565b80156103065780601f106102db57610100808354040283529160200191610306565b820191906000526020600020905b8154815290600101906020018083116102e957829003601f168201915b505050505081565b60035481565b6001805461032190610638565b80601f016020809104026020016040519081016040528092919081815260200182805461034d90610638565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b505050505081565b6000819050919050565b6103b5816103a2565b82525050565b60006020820190506103d060008301846103ac565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156104105780820151818401526020810190506103f5565b60008484015250505050565b6000601f19601f8301169050919050565b6000610438826103d6565b61044281856103e1565b93506104528185602086016103f2565b61045b8161041c565b840191505092915050565b60006020820190508181036000830152610480818461042d565b905092915050565b7f474f414c20414348494556454400000000000000000000000000000000000000600082015250565b60006104be600d836103e1565b91506104c982610488565b602082019050919050565b600060208201905081810360008301526104ed816104b1565b9050919050565b600081905092915050565b50565b600061050f6000836104f4565b915061051a826104ff565b600082019050919050565b600061053082610502565b9150819050919050565b7f56414c5545204e4f54205452414e534645525245440000000000000000000000600082015250565b60006105706015836103e1565b915061057b8261053a565b602082019050919050565b6000602082019050818103600083015261059f81610563565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105e0826103a2565b91506105eb836103a2565b9250828201905080821115610603576106026105a6565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061065057607f821691505b60208210810361066357610662610609565b5b5091905056fea2646970667358221220be9996157076659282491e5cac3c63d4f2ef6a1e1fa150c8686e4fed7d17f4de64736f6c63430008110033";

type CrowdfundingProjectConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdfundingProjectConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowdfundingProject__factory extends ContractFactory {
  constructor(...args: CrowdfundingProjectConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    projectTitle: PromiseOrValue<string>,
    projgoalAmount: PromiseOrValue<BigNumberish>,
    projDescript: PromiseOrValue<string>,
    ownerWallet_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrowdfundingProject> {
    return super.deploy(
      projectTitle,
      projgoalAmount,
      projDescript,
      ownerWallet_,
      overrides || {}
    ) as Promise<CrowdfundingProject>;
  }
  override getDeployTransaction(
    projectTitle: PromiseOrValue<string>,
    projgoalAmount: PromiseOrValue<BigNumberish>,
    projDescript: PromiseOrValue<string>,
    ownerWallet_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      projectTitle,
      projgoalAmount,
      projDescript,
      ownerWallet_,
      overrides || {}
    );
  }
  override attach(address: string): CrowdfundingProject {
    return super.attach(address) as CrowdfundingProject;
  }
  override connect(signer: Signer): CrowdfundingProject__factory {
    return super.connect(signer) as CrowdfundingProject__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdfundingProjectInterface {
    return new utils.Interface(_abi) as CrowdfundingProjectInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdfundingProject {
    return new Contract(address, _abi, signerOrProvider) as CrowdfundingProject;
  }
}