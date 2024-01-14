/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../../common";
import type {
  P256Verifier,
  P256VerifierInterface,
} from "../../../contracts/crypto/P256Verifier";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";

const _abi = [
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610b17908161001c8239f35b600080fdfe60c06040523461001a5761001236610073565b602081519101f35b600080fd5b60e0810190811067ffffffffffffffff82111761003b57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761003b57604052565b60a08103610113578060201161001a5760409080821161001a578060601161001a578060801161001a5760a01161001a57805181810167ffffffffffffffff918082108383111761003b576100de91845260603581526080356020820152833560203560003561013f565b6000901561010d57506001915b60ff81519316602084015260208352808301918383109083111761003b575290565b916100eb565b5060405160006020820152602081526040810181811067ffffffffffffffff82111761003b5760405290565b9092831580156102d4575b80156102cc575b80156102a5575b61029c578051906020610170818301938451906102fb565b1561029157604051948186019082825282604088015282606088015260808701527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63254f60a08701527bffffffff00000000000000004319055258e8617b0c46353d039cdaae19958660c082015260c081526101e98161001f565b600080928192519060055afa903d15610289573d9167ffffffffffffffff83116102755760405192610224601f8201601f1916860185610051565b83523d828585013e5b1561026157828280518101031261025e57500151905161025993929185908181890994099151906103b5565b061490565b80fd5b634e487b7160e01b81526001600452602490fd5b634e487b7160e01b82526041600452602482fd5b60609161022d565b505050505050600090565b50505050600090565b507bffffffff00000000000000004319055258e8617b0c46353d039cdaae19831015610158565b508215610151565b507bffffffff00000000000000004319055258e8617b0c46353d039cdaae1984101561014a565b600160601b63ffffffff60c01b031990818110801590610383575b8015610372575b61036a577f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b8282818080956003600160601b0363ffffffff60c01b03190991818180090908089180091490565b505050600090565b508015801561031d5750821561031d565b5081831015610316565b600160ff1b811461039f576000190190565b634e487b7160e01b600052601160045260246000fd5b9290926080908282526000946000936001809886928815908161056c575b5061055f576103e28486610590565b97909360a09a60ff8c52825b8c518481126105595761040591508c8b5191610575565b61040f8d5161038d565b8d5280156103ee575b8086036105285750919b92939150600080516020610ac28339815191529050600080516020610aa28339815191525b8c8c51126104fe578a9389938d969361045f9361084f565b909e9290809f80986104778599859951908351610575565b90610482815161038d565b9052806104995750505050505b9b92909391610447565b92959850929550929e506104d99550600181146000146104e55750600080516020610ac283398151915293600080516020610aa28339815191529361072a565b9b91939093929161048f565b6002036104f5578793899361072a565b8a93879361072a565b99505098505097505050505050610523600163ffffffff60601b0360601b19926109e7565b900990565b600281036105405750919b9293915085905086610447565b9193909290916002190161048f5789935085925061048f565b50610418565b9850505050505091505090565b905015386103d3565b91906002600192841c831b16921c16810180911161039f5790565b8015806105da575b6105b6576105b2916105a9916105e2565b92919091610999565b9091565b5050600080516020610aa283398151915290600080516020610ac283398151915290565b508115610598565b9190821580610722575b1561061a5750600080516020610aa28339815191529150600080516020610ac2833981519152906001908190565b7fb01cbd1c01e58065711814b583f061e9d431cca994cea1313449bf97c840ae0a91600160601b63ffffffff60c01b0319808481600186090894817f94e82e0c1ed3bdb90743191a9c5bbf0d88fc827fd214cc5f0b5ec6ba27673d698160018409089384156106f357505080808480099384099481846001099482808860010995600080516020610aa2833981519152099187840384811161039f5784908180866002600160601b0363ffffffff60c01b031909918185800908089788850385811161039f578580949281930994080908935b93929190565b935093505092156000146107135761070a916108f4565b919390926106ed565b505060008060009260006106ed565b5080156105ec565b91949592939095811580610847575b15610769575050831580610761575b6107525793929190565b50600093508392508291508190565b508215610748565b8591929495158061083f575b61082f57600160601b63ffffffff60c01b03199687039187831161039f57878381898509089386890389811161039f5789908184840908928315610814575050818880959493928180848196099b8c9485099b8c9209990996099187840384811161039f5784908180866002600160601b0363ffffffff60c01b031909918185800908089788850385811161039f578580949281930994080908929190565b96509650505050909350156000146107135761070a916108f4565b9550509150915091906001908190565b508515610775565b508015610739565b9390928215806108ec575b61075257600160601b63ffffffff60c01b0319908185600209948280878009809709948380888a0998818080808680096003600160601b0363ffffffff60c01b0319099280096003090884808a6002600160601b0363ffffffff60c01b0319098183800908988986039186831161039f578887039087821161039f578780969481809681950994089009089609930990565b50801561085a565b919091801580610991575b61098457600160601b63ffffffff60c01b031990818460020991808084800980940991816003600160601b0363ffffffff60c01b031981808088860994800960030908958280836002600160601b0363ffffffff60c01b0319098189800908968784039184831161039f578585039285841161039f5785809492819309940890090892565b5060009150819081908190565b5082156108ff565b9093928215806109df575b6109d2576109b1906109e7565b918291600163ffffffff60601b0360601b1980809581940980099009930990565b5050509050600090600090565b5080156109a4565b604051906020918281019183835283604083015283606083015260808201526002600160601b0363ffffffff60c01b031960a0820152600163ffffffff60601b0360601b1960c082015260c08152610a3e8161001f565b600080928192519060055afa903d15610a99573d9167ffffffffffffffff83116102755760405192610a79601f8201601f1916860185610051565b83523d828585013e5b1561026157828280518101031261025e5750015190565b606091610a8256fe6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2964fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5a2646970667358221220f13f7df0abdddd3a29a24877d72aacf0caa57a3b2e8d6ab146c6aa17d4f1e5b764736f6c63430008110033";

type P256VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: P256VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class P256Verifier__factory extends ContractFactory {
  constructor(...args: P256VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      P256Verifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): P256Verifier__factory {
    return super.connect(runner) as P256Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): P256VerifierInterface {
    return new Interface(_abi) as P256VerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): P256Verifier {
    return new Contract(address, _abi, runner) as unknown as P256Verifier;
  }
}