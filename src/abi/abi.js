export const TokenClaimContract = [
  {
    "contractName": "TokenClaimContract",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_erc20Token",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "ReentrancyGuardReentrantCall",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "RemainingTokensSentToOwner",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "nftId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "nftAddress",
            "type": "address"
          }
        ],
        "name": "TokensClaimed",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "claimedFirstNFTs",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "claimedSecondNFTs",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractDeploymentTime",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "erc20Token",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "goldenPioneerNFT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "goldenPioneerNFTAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sevenDays",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "silverPioneerNFT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "silverPioneerNFTAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokensRemaining",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_nftId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_nftAddress",
            "type": "address"
          }
        ],
        "name": "claimTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sendRemainingTokensToOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_erc20Token\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"RemainingTokensSentToOwner\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"nftId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"nftAddress\",\"type\":\"address\"}],\"name\":\"TokensClaimed\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_nftId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_nftAddress\",\"type\":\"address\"}],\"name\":\"claimTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"claimedFirstNFTs\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"claimedSecondNFTs\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractDeploymentTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc20Token\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"goldenPioneerNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"goldenPioneerNFTAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"sendRemainingTokensToOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"sevenDays\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"silverPioneerNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"silverPioneerNFTAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokensRemaining\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/TokenClaimContract.sol\":\"TokenClaimContract\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5ef46daa3b58ef2702279d514780316efaa952915ee1aa3396f041ee2982b0b4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2f8f2a76e23b02fc69e8cd24c3cb47da6c7af3a2d6c3a382f8ac25c6e094ade7\",\"dweb:/ipfs/QmPV4ZS4tPVv4mTCf9ejyZ1ai57EEibDRj7mN2ARDCLV5n\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df\",\"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL\"]},\"@openzeppelin/contracts/utils/math/SafeCast.sol\":{\"keccak256\":\"0xe19a4d5f31d2861e7344e8e535e2feafb913d806d3e2b5fe7782741a2a7094fe\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4aed79c0fa6f0546ed02f2f683e8f77f0fd2ed7eb34d8bbf3d373c9a6d95b13c\",\"dweb:/ipfs/QmWqVz6UAVqmnWU5pqYPt1o6iDEZyPaBraAA3rKfTTSfYj\"]},\"project:/contracts/TokenClaimContract.sol\":{\"keccak256\":\"0x269e9af5de84a175ae9d4cb53e47f1750372cb691e16d5e0dcfbc9b74864e7ad\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://34bdc177390f7c8631843604b4ff1bb3720cce7046b6685ac9ff20be15c278d8\",\"dweb:/ipfs/QmZd7UU5gkDzxRhSf1Rjr9hCDQES5XwbeewrgTVmeXLNQ9\"]},\"project:/contracts/imports/ReentrancyGuard.sol\":{\"keccak256\":\"0xda059b09cd6e981d06da65bb0363b211f0cf1ae4682b87bb270c54f51609e407\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://407679d1b9ed78ebafd5d9406ac551b77033c509f541f42ded02f418536f2375\",\"dweb:/ipfs/QmWT4GQsHTWeuBZSJ3gX8EUz92nr8BFtGhLkZaKNm9nBib\"]}},\"version\":1}",
    "bytecode": "0x608060405262093a8060065534801562000017575f80fd5b506040516200156b3803806200156b83398181016040528101906200003d9190620001ff565b60015f819055508060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503360045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550689ae0d6faf71b040000600281905550681fc462373d2ae800006003819055504260058190555073c5995df3841d328e067680518779490dbd47311e60075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555073228585d835745fdde074e9254631ce723112bfdb60085f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200022f565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620001c9826200019e565b9050919050565b620001db81620001bd565b8114620001e6575f80fd5b50565b5f81519050620001f981620001d0565b92915050565b5f602082840312156200021757620002166200019a565b5b5f6200022684828501620001e9565b91505092915050565b61132e806200023d5f395ff3fe608060405234801561000f575f80fd5b50600436106100cd575f3560e01c80638da5cb5b1161008a578063cfb65bed11610064578063cfb65bed146101db578063d0723b9a146101f9578063ea7dde9714610217578063feb1647714610235576100cd565b80638da5cb5b14610195578063a48d79f5146101b3578063c8b08125146101bd576100cd565b806328ed7d27146100d1578063393dd2d1146100ef5780635049485d1461010d5780636e164e231461012b57806370bc9243146101475780638a13eea714610177575b5f80fd5b6100d9610265565b6040516100e69190610d51565b60405180910390f35b6100f761028a565b6040516101049190610d82565b60405180910390f35b610115610290565b6040516101229190610d82565b60405180910390f35b61014560048036038101906101409190610df3565b610296565b005b610161600480360381019061015c9190610e31565b610713565b60405161016e9190610e76565b60405180910390f35b61017f610730565b60405161018c9190610d51565b60405180910390f35b61019d610755565b6040516101aa9190610d51565b60405180910390f35b6101bb61077a565b005b6101c561098b565b6040516101d29190610d82565b60405180910390f35b6101e3610a2a565b6040516101f09190610d82565b60405180910390f35b610201610a30565b60405161020e9190610d82565b60405180910390f35b61021f610a36565b60405161022c9190610d51565b60405180910390f35b61024f600480360381019061024a9190610e31565b610a5b565b60405161025c9190610e76565b60405180910390f35b60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60055481565b6006546005546102a69190610ebc565b4211156102e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102df90610f49565b60405180910390fd5b6102f0610a78565b5f6102f961098b565b11610339576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033090610fb1565b60405180910390fd5b61034281610abc565b610381576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037890611019565b60405180910390fd5b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610548576103de82610b6b565b61041d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041490611081565b60405180910390fd5b60095f8381526020019081526020015f205f9054906101000a900460ff161561047b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610472906110e9565b60405180910390fd5b600160095f8481526020019081526020015f205f6101000a81548160ff02191690831515021790555060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336002546040518363ffffffff1660e01b8152600401610502929190611107565b6020604051808303815f875af115801561051e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105429190611158565b506106b7565b61055182610c3a565b610590576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610587906111cd565b60405180910390fd5b600a5f8381526020019081526020015f205f9054906101000a900460ff16156105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e5906110e9565b60405180910390fd5b6001600a5f8481526020019081526020015f205f6101000a81548160ff02191690831515021790555060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336003546040518363ffffffff1660e01b8152600401610675929190611107565b6020604051808303815f875af1158015610691573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106b59190611158565b505b3373ffffffffffffffffffffffffffffffffffffffff167fa96ccbd516e1bb3e6dad792a13a75e8afcf013d3ff446f07416945f5efd4606283836040516106ff9291906111eb565b60405180910390a261070f610d09565b5050565b6009602052805f5260405f205f915054906101000a900460ff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610809576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108009061125c565b60405180910390fd5b610811610a78565b5f61081a61098b565b90505f811161085e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085590610fb1565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b81526004016108db929190611107565b6020604051808303815f875af11580156108f7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061091b9190611158565b5060045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f3d4c14465bbbcfde6f683d1e0d62f01fcddf8b5722555c0505ea85f005ebed8f60405160405180910390a250610989610d09565b565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109e69190610d51565b602060405180830381865afa158015610a01573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a25919061128e565b905090565b60065481565b60035481565b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a602052805f5260405f205f915054906101000a900460ff1681565b60025f5403610ab3576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480610b64575060085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b9050919050565b5f3373ffffffffffffffffffffffffffffffffffffffff1660075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610bdd9190610d82565b602060405180830381865afa158015610bf8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c1c91906112cd565b73ffffffffffffffffffffffffffffffffffffffff16149050919050565b5f3373ffffffffffffffffffffffffffffffffffffffff1660085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610cac9190610d82565b602060405180830381865afa158015610cc7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ceb91906112cd565b73ffffffffffffffffffffffffffffffffffffffff16149050919050565b60015f81905550565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610d3b82610d12565b9050919050565b610d4b81610d31565b82525050565b5f602082019050610d645f830184610d42565b92915050565b5f819050919050565b610d7c81610d6a565b82525050565b5f602082019050610d955f830184610d73565b92915050565b5f80fd5b610da881610d6a565b8114610db2575f80fd5b50565b5f81359050610dc381610d9f565b92915050565b610dd281610d31565b8114610ddc575f80fd5b50565b5f81359050610ded81610dc9565b92915050565b5f8060408385031215610e0957610e08610d9b565b5b5f610e1685828601610db5565b9250506020610e2785828601610ddf565b9150509250929050565b5f60208284031215610e4657610e45610d9b565b5b5f610e5384828501610db5565b91505092915050565b5f8115159050919050565b610e7081610e5c565b82525050565b5f602082019050610e895f830184610e67565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610ec682610d6a565b9150610ed183610d6a565b9250828201905080821115610ee957610ee8610e8f565b5b92915050565b5f82825260208201905092915050565b7f436c61696d20706572696f642068617320656e646564000000000000000000005f82015250565b5f610f33601683610eef565b9150610f3e82610eff565b602082019050919050565b5f6020820190508181035f830152610f6081610f27565b9050919050565b7f4e6f206d6f726520746f6b656e7320746f2062652072656c65617365640000005f82015250565b5f610f9b601d83610eef565b9150610fa682610f67565b602082019050919050565b5f6020820190508181035f830152610fc881610f8f565b9050919050565b7f496e76616c6964204e46542061646472657373000000000000000000000000005f82015250565b5f611003601383610eef565b915061100e82610fcf565b602082019050919050565b5f6020820190508181035f83015261103081610ff7565b9050919050565b7f596f7520617265206e6f7420746865204f776e657200000000000000000000005f82015250565b5f61106b601583610eef565b915061107682611037565b602082019050919050565b5f6020820190508181035f8301526110988161105f565b9050919050565b7f4e465420494420616c726561647920636c61696d6564000000000000000000005f82015250565b5f6110d3601683610eef565b91506110de8261109f565b602082019050919050565b5f6020820190508181035f830152611100816110c7565b9050919050565b5f60408201905061111a5f830185610d42565b6111276020830184610d73565b9392505050565b61113781610e5c565b8114611141575f80fd5b50565b5f815190506111528161112e565b92915050565b5f6020828403121561116d5761116c610d9b565b5b5f61117a84828501611144565b91505092915050565b7f596f7520617265206e6f7420746865206f776e657200000000000000000000005f82015250565b5f6111b7601583610eef565b91506111c282611183565b602082019050919050565b5f6020820190508181035f8301526111e4816111ab565b9050919050565b5f6040820190506111fe5f830185610d73565b61120b6020830184610d42565b9392505050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f611246600d83610eef565b915061125182611212565b602082019050919050565b5f6020820190508181035f8301526112738161123a565b9050919050565b5f8151905061128881610d9f565b92915050565b5f602082840312156112a3576112a2610d9b565b5b5f6112b08482850161127a565b91505092915050565b5f815190506112c781610dc9565b92915050565b5f602082840312156112e2576112e1610d9b565b5b5f6112ef848285016112b9565b9150509291505056fea26469706673582212203afe0a0e15c5fda7cb06c7f04c0f923b02fdb0deecb893ca1075e61e24b69de664736f6c63430008150033",
    "deployedBytecode": "0x608060405234801561000f575f80fd5b50600436106100cd575f3560e01c80638da5cb5b1161008a578063cfb65bed11610064578063cfb65bed146101db578063d0723b9a146101f9578063ea7dde9714610217578063feb1647714610235576100cd565b80638da5cb5b14610195578063a48d79f5146101b3578063c8b08125146101bd576100cd565b806328ed7d27146100d1578063393dd2d1146100ef5780635049485d1461010d5780636e164e231461012b57806370bc9243146101475780638a13eea714610177575b5f80fd5b6100d9610265565b6040516100e69190610d51565b60405180910390f35b6100f761028a565b6040516101049190610d82565b60405180910390f35b610115610290565b6040516101229190610d82565b60405180910390f35b61014560048036038101906101409190610df3565b610296565b005b610161600480360381019061015c9190610e31565b610713565b60405161016e9190610e76565b60405180910390f35b61017f610730565b60405161018c9190610d51565b60405180910390f35b61019d610755565b6040516101aa9190610d51565b60405180910390f35b6101bb61077a565b005b6101c561098b565b6040516101d29190610d82565b60405180910390f35b6101e3610a2a565b6040516101f09190610d82565b60405180910390f35b610201610a30565b60405161020e9190610d82565b60405180910390f35b61021f610a36565b60405161022c9190610d51565b60405180910390f35b61024f600480360381019061024a9190610e31565b610a5b565b60405161025c9190610e76565b60405180910390f35b60085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60055481565b6006546005546102a69190610ebc565b4211156102e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102df90610f49565b60405180910390fd5b6102f0610a78565b5f6102f961098b565b11610339576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033090610fb1565b60405180910390fd5b61034281610abc565b610381576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037890611019565b60405180910390fd5b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610548576103de82610b6b565b61041d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041490611081565b60405180910390fd5b60095f8381526020019081526020015f205f9054906101000a900460ff161561047b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610472906110e9565b60405180910390fd5b600160095f8481526020019081526020015f205f6101000a81548160ff02191690831515021790555060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336002546040518363ffffffff1660e01b8152600401610502929190611107565b6020604051808303815f875af115801561051e573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105429190611158565b506106b7565b61055182610c3a565b610590576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610587906111cd565b60405180910390fd5b600a5f8381526020019081526020015f205f9054906101000a900460ff16156105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e5906110e9565b60405180910390fd5b6001600a5f8481526020019081526020015f205f6101000a81548160ff02191690831515021790555060015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336003546040518363ffffffff1660e01b8152600401610675929190611107565b6020604051808303815f875af1158015610691573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106b59190611158565b505b3373ffffffffffffffffffffffffffffffffffffffff167fa96ccbd516e1bb3e6dad792a13a75e8afcf013d3ff446f07416945f5efd4606283836040516106ff9291906111eb565b60405180910390a261070f610d09565b5050565b6009602052805f5260405f205f915054906101000a900460ff1681565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610809576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108009061125c565b60405180910390fd5b610811610a78565b5f61081a61098b565b90505f811161085e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085590610fb1565b60405180910390fd5b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b81526004016108db929190611107565b6020604051808303815f875af11580156108f7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061091b9190611158565b5060045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f3d4c14465bbbcfde6f683d1e0d62f01fcddf8b5722555c0505ea85f005ebed8f60405160405180910390a250610989610d09565b565b5f60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109e69190610d51565b602060405180830381865afa158015610a01573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a25919061128e565b905090565b60065481565b60035481565b60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a602052805f5260405f205f915054906101000a900460ff1681565b60025f5403610ab3576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480610b64575060085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b9050919050565b5f3373ffffffffffffffffffffffffffffffffffffffff1660075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610bdd9190610d82565b602060405180830381865afa158015610bf8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c1c91906112cd565b73ffffffffffffffffffffffffffffffffffffffff16149050919050565b5f3373ffffffffffffffffffffffffffffffffffffffff1660085f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610cac9190610d82565b602060405180830381865afa158015610cc7573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ceb91906112cd565b73ffffffffffffffffffffffffffffffffffffffff16149050919050565b60015f81905550565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610d3b82610d12565b9050919050565b610d4b81610d31565b82525050565b5f602082019050610d645f830184610d42565b92915050565b5f819050919050565b610d7c81610d6a565b82525050565b5f602082019050610d955f830184610d73565b92915050565b5f80fd5b610da881610d6a565b8114610db2575f80fd5b50565b5f81359050610dc381610d9f565b92915050565b610dd281610d31565b8114610ddc575f80fd5b50565b5f81359050610ded81610dc9565b92915050565b5f8060408385031215610e0957610e08610d9b565b5b5f610e1685828601610db5565b9250506020610e2785828601610ddf565b9150509250929050565b5f60208284031215610e4657610e45610d9b565b5b5f610e5384828501610db5565b91505092915050565b5f8115159050919050565b610e7081610e5c565b82525050565b5f602082019050610e895f830184610e67565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610ec682610d6a565b9150610ed183610d6a565b9250828201905080821115610ee957610ee8610e8f565b5b92915050565b5f82825260208201905092915050565b7f436c61696d20706572696f642068617320656e646564000000000000000000005f82015250565b5f610f33601683610eef565b9150610f3e82610eff565b602082019050919050565b5f6020820190508181035f830152610f6081610f27565b9050919050565b7f4e6f206d6f726520746f6b656e7320746f2062652072656c65617365640000005f82015250565b5f610f9b601d83610eef565b9150610fa682610f67565b602082019050919050565b5f6020820190508181035f830152610fc881610f8f565b9050919050565b7f496e76616c6964204e46542061646472657373000000000000000000000000005f82015250565b5f611003601383610eef565b915061100e82610fcf565b602082019050919050565b5f6020820190508181035f83015261103081610ff7565b9050919050565b7f596f7520617265206e6f7420746865204f776e657200000000000000000000005f82015250565b5f61106b601583610eef565b915061107682611037565b602082019050919050565b5f6020820190508181035f8301526110988161105f565b9050919050565b7f4e465420494420616c726561647920636c61696d6564000000000000000000005f82015250565b5f6110d3601683610eef565b91506110de8261109f565b602082019050919050565b5f6020820190508181035f830152611100816110c7565b9050919050565b5f60408201905061111a5f830185610d42565b6111276020830184610d73565b9392505050565b61113781610e5c565b8114611141575f80fd5b50565b5f815190506111528161112e565b92915050565b5f6020828403121561116d5761116c610d9b565b5b5f61117a84828501611144565b91505092915050565b7f596f7520617265206e6f7420746865206f776e657200000000000000000000005f82015250565b5f6111b7601583610eef565b91506111c282611183565b602082019050919050565b5f6020820190508181035f8301526111e4816111ab565b9050919050565b5f6040820190506111fe5f830185610d73565b61120b6020830184610d42565b9392505050565b7f4e6f7420746865206f776e6572000000000000000000000000000000000000005f82015250565b5f611246600d83610eef565b915061125182611212565b602082019050919050565b5f6020820190508181035f8301526112738161123a565b9050919050565b5f8151905061128881610d9f565b92915050565b5f602082840312156112a3576112a2610d9b565b5b5f6112b08482850161127a565b91505092915050565b5f815190506112c781610dc9565b92915050565b5f602082840312156112e2576112e1610d9b565b5b5f6112ef848285016112b9565b9150509291505056fea26469706673582212203afe0a0e15c5fda7cb06c7f04c0f923b02fdb0deecb893ca1075e61e24b69de664736f6c63430008150033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nativeSrc": "0:1199:6",
          "nodeType": "YulBlock",
          "src": "0:1199:6",
          "statements": [
            {
              "body": {
                "nativeSrc": "47:35:6",
                "nodeType": "YulBlock",
                "src": "47:35:6",
                "statements": [
                  {
                    "nativeSrc": "57:19:6",
                    "nodeType": "YulAssignment",
                    "src": "57:19:6",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "73:2:6",
                          "nodeType": "YulLiteral",
                          "src": "73:2:6",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "67:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:6"
                      },
                      "nativeSrc": "67:9:6",
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:6"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nativeSrc": "57:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:6"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nativeSrc": "7:75:6",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nativeSrc": "40:6:6",
                  "nodeType": "YulTypedName",
                  "src": "40:6:6",
                  "type": ""
                }
              ],
              "src": "7:75:6"
            },
            {
              "body": {
                "nativeSrc": "177:28:6",
                "nodeType": "YulBlock",
                "src": "177:28:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "194:1:6",
                          "nodeType": "YulLiteral",
                          "src": "194:1:6",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "197:1:6",
                          "nodeType": "YulLiteral",
                          "src": "197:1:6",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "187:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:6"
                      },
                      "nativeSrc": "187:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:6"
                    },
                    "nativeSrc": "187:12:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:6"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nativeSrc": "88:117:6",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:6"
            },
            {
              "body": {
                "nativeSrc": "300:28:6",
                "nodeType": "YulBlock",
                "src": "300:28:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "317:1:6",
                          "nodeType": "YulLiteral",
                          "src": "317:1:6",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "320:1:6",
                          "nodeType": "YulLiteral",
                          "src": "320:1:6",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "310:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:6"
                      },
                      "nativeSrc": "310:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:6"
                    },
                    "nativeSrc": "310:12:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:6"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nativeSrc": "211:117:6",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:6"
            },
            {
              "body": {
                "nativeSrc": "379:81:6",
                "nodeType": "YulBlock",
                "src": "379:81:6",
                "statements": [
                  {
                    "nativeSrc": "389:65:6",
                    "nodeType": "YulAssignment",
                    "src": "389:65:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "404:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "404:5:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "411:42:6",
                          "nodeType": "YulLiteral",
                          "src": "411:42:6",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nativeSrc": "400:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "400:3:6"
                      },
                      "nativeSrc": "400:54:6",
                      "nodeType": "YulFunctionCall",
                      "src": "400:54:6"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "389:7:6",
                        "nodeType": "YulIdentifier",
                        "src": "389:7:6"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nativeSrc": "334:126:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "361:5:6",
                  "nodeType": "YulTypedName",
                  "src": "361:5:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "371:7:6",
                  "nodeType": "YulTypedName",
                  "src": "371:7:6",
                  "type": ""
                }
              ],
              "src": "334:126:6"
            },
            {
              "body": {
                "nativeSrc": "511:51:6",
                "nodeType": "YulBlock",
                "src": "511:51:6",
                "statements": [
                  {
                    "nativeSrc": "521:35:6",
                    "nodeType": "YulAssignment",
                    "src": "521:35:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "550:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "550:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nativeSrc": "532:17:6",
                        "nodeType": "YulIdentifier",
                        "src": "532:17:6"
                      },
                      "nativeSrc": "532:24:6",
                      "nodeType": "YulFunctionCall",
                      "src": "532:24:6"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "521:7:6",
                        "nodeType": "YulIdentifier",
                        "src": "521:7:6"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nativeSrc": "466:96:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "493:5:6",
                  "nodeType": "YulTypedName",
                  "src": "493:5:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "503:7:6",
                  "nodeType": "YulTypedName",
                  "src": "503:7:6",
                  "type": ""
                }
              ],
              "src": "466:96:6"
            },
            {
              "body": {
                "nativeSrc": "611:79:6",
                "nodeType": "YulBlock",
                "src": "611:79:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "668:16:6",
                      "nodeType": "YulBlock",
                      "src": "668:16:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "677:1:6",
                                "nodeType": "YulLiteral",
                                "src": "677:1:6",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "680:1:6",
                                "nodeType": "YulLiteral",
                                "src": "680:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "670:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "670:6:6"
                            },
                            "nativeSrc": "670:12:6",
                            "nodeType": "YulFunctionCall",
                            "src": "670:12:6"
                          },
                          "nativeSrc": "670:12:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "670:12:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "634:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "634:5:6"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "659:5:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "659:5:6"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nativeSrc": "641:17:6",
                                "nodeType": "YulIdentifier",
                                "src": "641:17:6"
                              },
                              "nativeSrc": "641:24:6",
                              "nodeType": "YulFunctionCall",
                              "src": "641:24:6"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "631:2:6",
                            "nodeType": "YulIdentifier",
                            "src": "631:2:6"
                          },
                          "nativeSrc": "631:35:6",
                          "nodeType": "YulFunctionCall",
                          "src": "631:35:6"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "624:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "624:6:6"
                      },
                      "nativeSrc": "624:43:6",
                      "nodeType": "YulFunctionCall",
                      "src": "624:43:6"
                    },
                    "nativeSrc": "621:63:6",
                    "nodeType": "YulIf",
                    "src": "621:63:6"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nativeSrc": "568:122:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "604:5:6",
                  "nodeType": "YulTypedName",
                  "src": "604:5:6",
                  "type": ""
                }
              ],
              "src": "568:122:6"
            },
            {
              "body": {
                "nativeSrc": "759:80:6",
                "nodeType": "YulBlock",
                "src": "759:80:6",
                "statements": [
                  {
                    "nativeSrc": "769:22:6",
                    "nodeType": "YulAssignment",
                    "src": "769:22:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "784:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "784:6:6"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "778:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "778:5:6"
                      },
                      "nativeSrc": "778:13:6",
                      "nodeType": "YulFunctionCall",
                      "src": "778:13:6"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "769:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "769:5:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "827:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "827:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nativeSrc": "800:26:6",
                        "nodeType": "YulIdentifier",
                        "src": "800:26:6"
                      },
                      "nativeSrc": "800:33:6",
                      "nodeType": "YulFunctionCall",
                      "src": "800:33:6"
                    },
                    "nativeSrc": "800:33:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "800:33:6"
                  }
                ]
              },
              "name": "abi_decode_t_address_fromMemory",
              "nativeSrc": "696:143:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "737:6:6",
                  "nodeType": "YulTypedName",
                  "src": "737:6:6",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "745:3:6",
                  "nodeType": "YulTypedName",
                  "src": "745:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "753:5:6",
                  "nodeType": "YulTypedName",
                  "src": "753:5:6",
                  "type": ""
                }
              ],
              "src": "696:143:6"
            },
            {
              "body": {
                "nativeSrc": "922:274:6",
                "nodeType": "YulBlock",
                "src": "922:274:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "968:83:6",
                      "nodeType": "YulBlock",
                      "src": "968:83:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "970:77:6",
                              "nodeType": "YulIdentifier",
                              "src": "970:77:6"
                            },
                            "nativeSrc": "970:79:6",
                            "nodeType": "YulFunctionCall",
                            "src": "970:79:6"
                          },
                          "nativeSrc": "970:79:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "970:79:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "943:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "943:7:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "952:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "952:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "939:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "939:3:6"
                          },
                          "nativeSrc": "939:23:6",
                          "nodeType": "YulFunctionCall",
                          "src": "939:23:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "964:2:6",
                          "nodeType": "YulLiteral",
                          "src": "964:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "935:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "935:3:6"
                      },
                      "nativeSrc": "935:32:6",
                      "nodeType": "YulFunctionCall",
                      "src": "935:32:6"
                    },
                    "nativeSrc": "932:119:6",
                    "nodeType": "YulIf",
                    "src": "932:119:6"
                  },
                  {
                    "nativeSrc": "1061:128:6",
                    "nodeType": "YulBlock",
                    "src": "1061:128:6",
                    "statements": [
                      {
                        "nativeSrc": "1076:15:6",
                        "nodeType": "YulVariableDeclaration",
                        "src": "1076:15:6",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "1090:1:6",
                          "nodeType": "YulLiteral",
                          "src": "1090:1:6",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "1080:6:6",
                            "nodeType": "YulTypedName",
                            "src": "1080:6:6",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "1105:74:6",
                        "nodeType": "YulAssignment",
                        "src": "1105:74:6",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "1151:9:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1151:9:6"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "1162:6:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1162:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "1147:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "1147:3:6"
                              },
                              "nativeSrc": "1147:22:6",
                              "nodeType": "YulFunctionCall",
                              "src": "1147:22:6"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "1171:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "1171:7:6"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address_fromMemory",
                            "nativeSrc": "1115:31:6",
                            "nodeType": "YulIdentifier",
                            "src": "1115:31:6"
                          },
                          "nativeSrc": "1115:64:6",
                          "nodeType": "YulFunctionCall",
                          "src": "1115:64:6"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "1105:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "1105:6:6"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address_fromMemory",
              "nativeSrc": "845:351:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "892:9:6",
                  "nodeType": "YulTypedName",
                  "src": "892:9:6",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "903:7:6",
                  "nodeType": "YulTypedName",
                  "src": "903:7:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "915:6:6",
                  "nodeType": "YulTypedName",
                  "src": "915:6:6",
                  "type": ""
                }
              ],
              "src": "845:351:6"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
        "id": 6,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nativeSrc": "0:12820:6",
          "nodeType": "YulBlock",
          "src": "0:12820:6",
          "statements": [
            {
              "body": {
                "nativeSrc": "52:81:6",
                "nodeType": "YulBlock",
                "src": "52:81:6",
                "statements": [
                  {
                    "nativeSrc": "62:65:6",
                    "nodeType": "YulAssignment",
                    "src": "62:65:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "77:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "77:5:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "84:42:6",
                          "nodeType": "YulLiteral",
                          "src": "84:42:6",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nativeSrc": "73:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "73:3:6"
                      },
                      "nativeSrc": "73:54:6",
                      "nodeType": "YulFunctionCall",
                      "src": "73:54:6"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "62:7:6",
                        "nodeType": "YulIdentifier",
                        "src": "62:7:6"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nativeSrc": "7:126:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "34:5:6",
                  "nodeType": "YulTypedName",
                  "src": "34:5:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "44:7:6",
                  "nodeType": "YulTypedName",
                  "src": "44:7:6",
                  "type": ""
                }
              ],
              "src": "7:126:6"
            },
            {
              "body": {
                "nativeSrc": "184:51:6",
                "nodeType": "YulBlock",
                "src": "184:51:6",
                "statements": [
                  {
                    "nativeSrc": "194:35:6",
                    "nodeType": "YulAssignment",
                    "src": "194:35:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "223:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "223:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nativeSrc": "205:17:6",
                        "nodeType": "YulIdentifier",
                        "src": "205:17:6"
                      },
                      "nativeSrc": "205:24:6",
                      "nodeType": "YulFunctionCall",
                      "src": "205:24:6"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "194:7:6",
                        "nodeType": "YulIdentifier",
                        "src": "194:7:6"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nativeSrc": "139:96:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "166:5:6",
                  "nodeType": "YulTypedName",
                  "src": "166:5:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "176:7:6",
                  "nodeType": "YulTypedName",
                  "src": "176:7:6",
                  "type": ""
                }
              ],
              "src": "139:96:6"
            },
            {
              "body": {
                "nativeSrc": "306:53:6",
                "nodeType": "YulBlock",
                "src": "306:53:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "323:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "323:3:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "346:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "346:5:6"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nativeSrc": "328:17:6",
                            "nodeType": "YulIdentifier",
                            "src": "328:17:6"
                          },
                          "nativeSrc": "328:24:6",
                          "nodeType": "YulFunctionCall",
                          "src": "328:24:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "316:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "316:6:6"
                      },
                      "nativeSrc": "316:37:6",
                      "nodeType": "YulFunctionCall",
                      "src": "316:37:6"
                    },
                    "nativeSrc": "316:37:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "316:37:6"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nativeSrc": "241:118:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "294:5:6",
                  "nodeType": "YulTypedName",
                  "src": "294:5:6",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nativeSrc": "301:3:6",
                  "nodeType": "YulTypedName",
                  "src": "301:3:6",
                  "type": ""
                }
              ],
              "src": "241:118:6"
            },
            {
              "body": {
                "nativeSrc": "463:124:6",
                "nodeType": "YulBlock",
                "src": "463:124:6",
                "statements": [
                  {
                    "nativeSrc": "473:26:6",
                    "nodeType": "YulAssignment",
                    "src": "473:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "485:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "485:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "496:2:6",
                          "nodeType": "YulLiteral",
                          "src": "496:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "481:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "481:3:6"
                      },
                      "nativeSrc": "481:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "481:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "473:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "473:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "553:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "553:6:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "566:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "566:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "577:1:6",
                              "nodeType": "YulLiteral",
                              "src": "577:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "562:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "562:3:6"
                          },
                          "nativeSrc": "562:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "562:17:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nativeSrc": "509:43:6",
                        "nodeType": "YulIdentifier",
                        "src": "509:43:6"
                      },
                      "nativeSrc": "509:71:6",
                      "nodeType": "YulFunctionCall",
                      "src": "509:71:6"
                    },
                    "nativeSrc": "509:71:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "509:71:6"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nativeSrc": "365:222:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "435:9:6",
                  "nodeType": "YulTypedName",
                  "src": "435:9:6",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "447:6:6",
                  "nodeType": "YulTypedName",
                  "src": "447:6:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "458:4:6",
                  "nodeType": "YulTypedName",
                  "src": "458:4:6",
                  "type": ""
                }
              ],
              "src": "365:222:6"
            },
            {
              "body": {
                "nativeSrc": "638:32:6",
                "nodeType": "YulBlock",
                "src": "638:32:6",
                "statements": [
                  {
                    "nativeSrc": "648:16:6",
                    "nodeType": "YulAssignment",
                    "src": "648:16:6",
                    "value": {
                      "name": "value",
                      "nativeSrc": "659:5:6",
                      "nodeType": "YulIdentifier",
                      "src": "659:5:6"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "648:7:6",
                        "nodeType": "YulIdentifier",
                        "src": "648:7:6"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nativeSrc": "593:77:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "620:5:6",
                  "nodeType": "YulTypedName",
                  "src": "620:5:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "630:7:6",
                  "nodeType": "YulTypedName",
                  "src": "630:7:6",
                  "type": ""
                }
              ],
              "src": "593:77:6"
            },
            {
              "body": {
                "nativeSrc": "741:53:6",
                "nodeType": "YulBlock",
                "src": "741:53:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "758:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "758:3:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "781:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "781:5:6"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nativeSrc": "763:17:6",
                            "nodeType": "YulIdentifier",
                            "src": "763:17:6"
                          },
                          "nativeSrc": "763:24:6",
                          "nodeType": "YulFunctionCall",
                          "src": "763:24:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "751:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "751:6:6"
                      },
                      "nativeSrc": "751:37:6",
                      "nodeType": "YulFunctionCall",
                      "src": "751:37:6"
                    },
                    "nativeSrc": "751:37:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "751:37:6"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nativeSrc": "676:118:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "729:5:6",
                  "nodeType": "YulTypedName",
                  "src": "729:5:6",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nativeSrc": "736:3:6",
                  "nodeType": "YulTypedName",
                  "src": "736:3:6",
                  "type": ""
                }
              ],
              "src": "676:118:6"
            },
            {
              "body": {
                "nativeSrc": "898:124:6",
                "nodeType": "YulBlock",
                "src": "898:124:6",
                "statements": [
                  {
                    "nativeSrc": "908:26:6",
                    "nodeType": "YulAssignment",
                    "src": "908:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "920:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "920:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "931:2:6",
                          "nodeType": "YulLiteral",
                          "src": "931:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "916:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "916:3:6"
                      },
                      "nativeSrc": "916:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "916:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "908:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "908:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "988:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "988:6:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "1001:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "1001:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "1012:1:6",
                              "nodeType": "YulLiteral",
                              "src": "1012:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "997:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "997:3:6"
                          },
                          "nativeSrc": "997:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "997:17:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nativeSrc": "944:43:6",
                        "nodeType": "YulIdentifier",
                        "src": "944:43:6"
                      },
                      "nativeSrc": "944:71:6",
                      "nodeType": "YulFunctionCall",
                      "src": "944:71:6"
                    },
                    "nativeSrc": "944:71:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "944:71:6"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nativeSrc": "800:222:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "870:9:6",
                  "nodeType": "YulTypedName",
                  "src": "870:9:6",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "882:6:6",
                  "nodeType": "YulTypedName",
                  "src": "882:6:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "893:4:6",
                  "nodeType": "YulTypedName",
                  "src": "893:4:6",
                  "type": ""
                }
              ],
              "src": "800:222:6"
            },
            {
              "body": {
                "nativeSrc": "1068:35:6",
                "nodeType": "YulBlock",
                "src": "1068:35:6",
                "statements": [
                  {
                    "nativeSrc": "1078:19:6",
                    "nodeType": "YulAssignment",
                    "src": "1078:19:6",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "1094:2:6",
                          "nodeType": "YulLiteral",
                          "src": "1094:2:6",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "1088:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "1088:5:6"
                      },
                      "nativeSrc": "1088:9:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1088:9:6"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nativeSrc": "1078:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "1078:6:6"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nativeSrc": "1028:75:6",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nativeSrc": "1061:6:6",
                  "nodeType": "YulTypedName",
                  "src": "1061:6:6",
                  "type": ""
                }
              ],
              "src": "1028:75:6"
            },
            {
              "body": {
                "nativeSrc": "1198:28:6",
                "nodeType": "YulBlock",
                "src": "1198:28:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "1215:1:6",
                          "nodeType": "YulLiteral",
                          "src": "1215:1:6",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1218:1:6",
                          "nodeType": "YulLiteral",
                          "src": "1218:1:6",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "1208:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "1208:6:6"
                      },
                      "nativeSrc": "1208:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1208:12:6"
                    },
                    "nativeSrc": "1208:12:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "1208:12:6"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nativeSrc": "1109:117:6",
              "nodeType": "YulFunctionDefinition",
              "src": "1109:117:6"
            },
            {
              "body": {
                "nativeSrc": "1321:28:6",
                "nodeType": "YulBlock",
                "src": "1321:28:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "1338:1:6",
                          "nodeType": "YulLiteral",
                          "src": "1338:1:6",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "1341:1:6",
                          "nodeType": "YulLiteral",
                          "src": "1341:1:6",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "1331:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "1331:6:6"
                      },
                      "nativeSrc": "1331:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1331:12:6"
                    },
                    "nativeSrc": "1331:12:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "1331:12:6"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nativeSrc": "1232:117:6",
              "nodeType": "YulFunctionDefinition",
              "src": "1232:117:6"
            },
            {
              "body": {
                "nativeSrc": "1398:79:6",
                "nodeType": "YulBlock",
                "src": "1398:79:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "1455:16:6",
                      "nodeType": "YulBlock",
                      "src": "1455:16:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "1464:1:6",
                                "nodeType": "YulLiteral",
                                "src": "1464:1:6",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1467:1:6",
                                "nodeType": "YulLiteral",
                                "src": "1467:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "1457:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "1457:6:6"
                            },
                            "nativeSrc": "1457:12:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1457:12:6"
                          },
                          "nativeSrc": "1457:12:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "1457:12:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "1421:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "1421:5:6"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "1446:5:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1446:5:6"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nativeSrc": "1428:17:6",
                                "nodeType": "YulIdentifier",
                                "src": "1428:17:6"
                              },
                              "nativeSrc": "1428:24:6",
                              "nodeType": "YulFunctionCall",
                              "src": "1428:24:6"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "1418:2:6",
                            "nodeType": "YulIdentifier",
                            "src": "1418:2:6"
                          },
                          "nativeSrc": "1418:35:6",
                          "nodeType": "YulFunctionCall",
                          "src": "1418:35:6"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "1411:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "1411:6:6"
                      },
                      "nativeSrc": "1411:43:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1411:43:6"
                    },
                    "nativeSrc": "1408:63:6",
                    "nodeType": "YulIf",
                    "src": "1408:63:6"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nativeSrc": "1355:122:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "1391:5:6",
                  "nodeType": "YulTypedName",
                  "src": "1391:5:6",
                  "type": ""
                }
              ],
              "src": "1355:122:6"
            },
            {
              "body": {
                "nativeSrc": "1535:87:6",
                "nodeType": "YulBlock",
                "src": "1535:87:6",
                "statements": [
                  {
                    "nativeSrc": "1545:29:6",
                    "nodeType": "YulAssignment",
                    "src": "1545:29:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "1567:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "1567:6:6"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nativeSrc": "1554:12:6",
                        "nodeType": "YulIdentifier",
                        "src": "1554:12:6"
                      },
                      "nativeSrc": "1554:20:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1554:20:6"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "1545:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "1545:5:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "1610:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "1610:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nativeSrc": "1583:26:6",
                        "nodeType": "YulIdentifier",
                        "src": "1583:26:6"
                      },
                      "nativeSrc": "1583:33:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1583:33:6"
                    },
                    "nativeSrc": "1583:33:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "1583:33:6"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nativeSrc": "1483:139:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "1513:6:6",
                  "nodeType": "YulTypedName",
                  "src": "1513:6:6",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "1521:3:6",
                  "nodeType": "YulTypedName",
                  "src": "1521:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "1529:5:6",
                  "nodeType": "YulTypedName",
                  "src": "1529:5:6",
                  "type": ""
                }
              ],
              "src": "1483:139:6"
            },
            {
              "body": {
                "nativeSrc": "1671:79:6",
                "nodeType": "YulBlock",
                "src": "1671:79:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "1728:16:6",
                      "nodeType": "YulBlock",
                      "src": "1728:16:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "1737:1:6",
                                "nodeType": "YulLiteral",
                                "src": "1737:1:6",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "1740:1:6",
                                "nodeType": "YulLiteral",
                                "src": "1740:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "1730:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "1730:6:6"
                            },
                            "nativeSrc": "1730:12:6",
                            "nodeType": "YulFunctionCall",
                            "src": "1730:12:6"
                          },
                          "nativeSrc": "1730:12:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "1730:12:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "1694:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "1694:5:6"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "1719:5:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "1719:5:6"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nativeSrc": "1701:17:6",
                                "nodeType": "YulIdentifier",
                                "src": "1701:17:6"
                              },
                              "nativeSrc": "1701:24:6",
                              "nodeType": "YulFunctionCall",
                              "src": "1701:24:6"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "1691:2:6",
                            "nodeType": "YulIdentifier",
                            "src": "1691:2:6"
                          },
                          "nativeSrc": "1691:35:6",
                          "nodeType": "YulFunctionCall",
                          "src": "1691:35:6"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "1684:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "1684:6:6"
                      },
                      "nativeSrc": "1684:43:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1684:43:6"
                    },
                    "nativeSrc": "1681:63:6",
                    "nodeType": "YulIf",
                    "src": "1681:63:6"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nativeSrc": "1628:122:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "1664:5:6",
                  "nodeType": "YulTypedName",
                  "src": "1664:5:6",
                  "type": ""
                }
              ],
              "src": "1628:122:6"
            },
            {
              "body": {
                "nativeSrc": "1808:87:6",
                "nodeType": "YulBlock",
                "src": "1808:87:6",
                "statements": [
                  {
                    "nativeSrc": "1818:29:6",
                    "nodeType": "YulAssignment",
                    "src": "1818:29:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "1840:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "1840:6:6"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nativeSrc": "1827:12:6",
                        "nodeType": "YulIdentifier",
                        "src": "1827:12:6"
                      },
                      "nativeSrc": "1827:20:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1827:20:6"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "1818:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "1818:5:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "1883:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "1883:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nativeSrc": "1856:26:6",
                        "nodeType": "YulIdentifier",
                        "src": "1856:26:6"
                      },
                      "nativeSrc": "1856:33:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1856:33:6"
                    },
                    "nativeSrc": "1856:33:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "1856:33:6"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nativeSrc": "1756:139:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "1786:6:6",
                  "nodeType": "YulTypedName",
                  "src": "1786:6:6",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "1794:3:6",
                  "nodeType": "YulTypedName",
                  "src": "1794:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "1802:5:6",
                  "nodeType": "YulTypedName",
                  "src": "1802:5:6",
                  "type": ""
                }
              ],
              "src": "1756:139:6"
            },
            {
              "body": {
                "nativeSrc": "1984:391:6",
                "nodeType": "YulBlock",
                "src": "1984:391:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "2030:83:6",
                      "nodeType": "YulBlock",
                      "src": "2030:83:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "2032:77:6",
                              "nodeType": "YulIdentifier",
                              "src": "2032:77:6"
                            },
                            "nativeSrc": "2032:79:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2032:79:6"
                          },
                          "nativeSrc": "2032:79:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "2032:79:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2005:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "2005:7:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "2014:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "2014:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "2001:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "2001:3:6"
                          },
                          "nativeSrc": "2001:23:6",
                          "nodeType": "YulFunctionCall",
                          "src": "2001:23:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "2026:2:6",
                          "nodeType": "YulLiteral",
                          "src": "2026:2:6",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "1997:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "1997:3:6"
                      },
                      "nativeSrc": "1997:32:6",
                      "nodeType": "YulFunctionCall",
                      "src": "1997:32:6"
                    },
                    "nativeSrc": "1994:119:6",
                    "nodeType": "YulIf",
                    "src": "1994:119:6"
                  },
                  {
                    "nativeSrc": "2123:117:6",
                    "nodeType": "YulBlock",
                    "src": "2123:117:6",
                    "statements": [
                      {
                        "nativeSrc": "2138:15:6",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2138:15:6",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "2152:1:6",
                          "nodeType": "YulLiteral",
                          "src": "2152:1:6",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "2142:6:6",
                            "nodeType": "YulTypedName",
                            "src": "2142:6:6",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "2167:63:6",
                        "nodeType": "YulAssignment",
                        "src": "2167:63:6",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2202:9:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2202:9:6"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "2213:6:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2213:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2198:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "2198:3:6"
                              },
                              "nativeSrc": "2198:22:6",
                              "nodeType": "YulFunctionCall",
                              "src": "2198:22:6"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2222:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "2222:7:6"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nativeSrc": "2177:20:6",
                            "nodeType": "YulIdentifier",
                            "src": "2177:20:6"
                          },
                          "nativeSrc": "2177:53:6",
                          "nodeType": "YulFunctionCall",
                          "src": "2177:53:6"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "2167:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "2167:6:6"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nativeSrc": "2250:118:6",
                    "nodeType": "YulBlock",
                    "src": "2250:118:6",
                    "statements": [
                      {
                        "nativeSrc": "2265:16:6",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2265:16:6",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "2279:2:6",
                          "nodeType": "YulLiteral",
                          "src": "2279:2:6",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "2269:6:6",
                            "nodeType": "YulTypedName",
                            "src": "2269:6:6",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "2295:63:6",
                        "nodeType": "YulAssignment",
                        "src": "2295:63:6",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2330:9:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2330:9:6"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "2341:6:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2341:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2326:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "2326:3:6"
                              },
                              "nativeSrc": "2326:22:6",
                              "nodeType": "YulFunctionCall",
                              "src": "2326:22:6"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2350:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "2350:7:6"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nativeSrc": "2305:20:6",
                            "nodeType": "YulIdentifier",
                            "src": "2305:20:6"
                          },
                          "nativeSrc": "2305:53:6",
                          "nodeType": "YulFunctionCall",
                          "src": "2305:53:6"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nativeSrc": "2295:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "2295:6:6"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256t_address",
              "nativeSrc": "1901:474:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "1946:9:6",
                  "nodeType": "YulTypedName",
                  "src": "1946:9:6",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "1957:7:6",
                  "nodeType": "YulTypedName",
                  "src": "1957:7:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "1969:6:6",
                  "nodeType": "YulTypedName",
                  "src": "1969:6:6",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nativeSrc": "1977:6:6",
                  "nodeType": "YulTypedName",
                  "src": "1977:6:6",
                  "type": ""
                }
              ],
              "src": "1901:474:6"
            },
            {
              "body": {
                "nativeSrc": "2447:263:6",
                "nodeType": "YulBlock",
                "src": "2447:263:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "2493:83:6",
                      "nodeType": "YulBlock",
                      "src": "2493:83:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "2495:77:6",
                              "nodeType": "YulIdentifier",
                              "src": "2495:77:6"
                            },
                            "nativeSrc": "2495:79:6",
                            "nodeType": "YulFunctionCall",
                            "src": "2495:79:6"
                          },
                          "nativeSrc": "2495:79:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "2495:79:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2468:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "2468:7:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "2477:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "2477:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "2464:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "2464:3:6"
                          },
                          "nativeSrc": "2464:23:6",
                          "nodeType": "YulFunctionCall",
                          "src": "2464:23:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "2489:2:6",
                          "nodeType": "YulLiteral",
                          "src": "2489:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "2460:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "2460:3:6"
                      },
                      "nativeSrc": "2460:32:6",
                      "nodeType": "YulFunctionCall",
                      "src": "2460:32:6"
                    },
                    "nativeSrc": "2457:119:6",
                    "nodeType": "YulIf",
                    "src": "2457:119:6"
                  },
                  {
                    "nativeSrc": "2586:117:6",
                    "nodeType": "YulBlock",
                    "src": "2586:117:6",
                    "statements": [
                      {
                        "nativeSrc": "2601:15:6",
                        "nodeType": "YulVariableDeclaration",
                        "src": "2601:15:6",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "2615:1:6",
                          "nodeType": "YulLiteral",
                          "src": "2615:1:6",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "2605:6:6",
                            "nodeType": "YulTypedName",
                            "src": "2605:6:6",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "2630:63:6",
                        "nodeType": "YulAssignment",
                        "src": "2630:63:6",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "2665:9:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2665:9:6"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "2676:6:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "2676:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "2661:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "2661:3:6"
                              },
                              "nativeSrc": "2661:22:6",
                              "nodeType": "YulFunctionCall",
                              "src": "2661:22:6"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "2685:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "2685:7:6"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nativeSrc": "2640:20:6",
                            "nodeType": "YulIdentifier",
                            "src": "2640:20:6"
                          },
                          "nativeSrc": "2640:53:6",
                          "nodeType": "YulFunctionCall",
                          "src": "2640:53:6"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "2630:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "2630:6:6"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nativeSrc": "2381:329:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "2417:9:6",
                  "nodeType": "YulTypedName",
                  "src": "2417:9:6",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "2428:7:6",
                  "nodeType": "YulTypedName",
                  "src": "2428:7:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "2440:6:6",
                  "nodeType": "YulTypedName",
                  "src": "2440:6:6",
                  "type": ""
                }
              ],
              "src": "2381:329:6"
            },
            {
              "body": {
                "nativeSrc": "2758:48:6",
                "nodeType": "YulBlock",
                "src": "2758:48:6",
                "statements": [
                  {
                    "nativeSrc": "2768:32:6",
                    "nodeType": "YulAssignment",
                    "src": "2768:32:6",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "2793:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "2793:5:6"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nativeSrc": "2786:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "2786:6:6"
                          },
                          "nativeSrc": "2786:13:6",
                          "nodeType": "YulFunctionCall",
                          "src": "2786:13:6"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "2779:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "2779:6:6"
                      },
                      "nativeSrc": "2779:21:6",
                      "nodeType": "YulFunctionCall",
                      "src": "2779:21:6"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nativeSrc": "2768:7:6",
                        "nodeType": "YulIdentifier",
                        "src": "2768:7:6"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nativeSrc": "2716:90:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "2740:5:6",
                  "nodeType": "YulTypedName",
                  "src": "2740:5:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nativeSrc": "2750:7:6",
                  "nodeType": "YulTypedName",
                  "src": "2750:7:6",
                  "type": ""
                }
              ],
              "src": "2716:90:6"
            },
            {
              "body": {
                "nativeSrc": "2871:50:6",
                "nodeType": "YulBlock",
                "src": "2871:50:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "2888:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "2888:3:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "2908:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "2908:5:6"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nativeSrc": "2893:14:6",
                            "nodeType": "YulIdentifier",
                            "src": "2893:14:6"
                          },
                          "nativeSrc": "2893:21:6",
                          "nodeType": "YulFunctionCall",
                          "src": "2893:21:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "2881:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "2881:6:6"
                      },
                      "nativeSrc": "2881:34:6",
                      "nodeType": "YulFunctionCall",
                      "src": "2881:34:6"
                    },
                    "nativeSrc": "2881:34:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "2881:34:6"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nativeSrc": "2812:109:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "2859:5:6",
                  "nodeType": "YulTypedName",
                  "src": "2859:5:6",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nativeSrc": "2866:3:6",
                  "nodeType": "YulTypedName",
                  "src": "2866:3:6",
                  "type": ""
                }
              ],
              "src": "2812:109:6"
            },
            {
              "body": {
                "nativeSrc": "3019:118:6",
                "nodeType": "YulBlock",
                "src": "3019:118:6",
                "statements": [
                  {
                    "nativeSrc": "3029:26:6",
                    "nodeType": "YulAssignment",
                    "src": "3029:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "3041:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "3041:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "3052:2:6",
                          "nodeType": "YulLiteral",
                          "src": "3052:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "3037:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "3037:3:6"
                      },
                      "nativeSrc": "3037:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3037:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "3029:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "3029:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "3103:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "3103:6:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "3116:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "3116:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3127:1:6",
                              "nodeType": "YulLiteral",
                              "src": "3127:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "3112:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "3112:3:6"
                          },
                          "nativeSrc": "3112:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "3112:17:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nativeSrc": "3065:37:6",
                        "nodeType": "YulIdentifier",
                        "src": "3065:37:6"
                      },
                      "nativeSrc": "3065:65:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3065:65:6"
                    },
                    "nativeSrc": "3065:65:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "3065:65:6"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nativeSrc": "2927:210:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "2991:9:6",
                  "nodeType": "YulTypedName",
                  "src": "2991:9:6",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "3003:6:6",
                  "nodeType": "YulTypedName",
                  "src": "3003:6:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "3014:4:6",
                  "nodeType": "YulTypedName",
                  "src": "3014:4:6",
                  "type": ""
                }
              ],
              "src": "2927:210:6"
            },
            {
              "body": {
                "nativeSrc": "3171:152:6",
                "nodeType": "YulBlock",
                "src": "3171:152:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "3188:1:6",
                          "nodeType": "YulLiteral",
                          "src": "3188:1:6",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "3191:77:6",
                          "nodeType": "YulLiteral",
                          "src": "3191:77:6",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "3181:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "3181:6:6"
                      },
                      "nativeSrc": "3181:88:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3181:88:6"
                    },
                    "nativeSrc": "3181:88:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "3181:88:6"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "3285:1:6",
                          "nodeType": "YulLiteral",
                          "src": "3285:1:6",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "3288:4:6",
                          "nodeType": "YulLiteral",
                          "src": "3288:4:6",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "3278:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "3278:6:6"
                      },
                      "nativeSrc": "3278:15:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3278:15:6"
                    },
                    "nativeSrc": "3278:15:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "3278:15:6"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nativeSrc": "3309:1:6",
                          "nodeType": "YulLiteral",
                          "src": "3309:1:6",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "3312:4:6",
                          "nodeType": "YulLiteral",
                          "src": "3312:4:6",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nativeSrc": "3302:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "3302:6:6"
                      },
                      "nativeSrc": "3302:15:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3302:15:6"
                    },
                    "nativeSrc": "3302:15:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "3302:15:6"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nativeSrc": "3143:180:6",
              "nodeType": "YulFunctionDefinition",
              "src": "3143:180:6"
            },
            {
              "body": {
                "nativeSrc": "3373:147:6",
                "nodeType": "YulBlock",
                "src": "3373:147:6",
                "statements": [
                  {
                    "nativeSrc": "3383:25:6",
                    "nodeType": "YulAssignment",
                    "src": "3383:25:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nativeSrc": "3406:1:6",
                          "nodeType": "YulIdentifier",
                          "src": "3406:1:6"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "3388:17:6",
                        "nodeType": "YulIdentifier",
                        "src": "3388:17:6"
                      },
                      "nativeSrc": "3388:20:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3388:20:6"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nativeSrc": "3383:1:6",
                        "nodeType": "YulIdentifier",
                        "src": "3383:1:6"
                      }
                    ]
                  },
                  {
                    "nativeSrc": "3417:25:6",
                    "nodeType": "YulAssignment",
                    "src": "3417:25:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nativeSrc": "3440:1:6",
                          "nodeType": "YulIdentifier",
                          "src": "3440:1:6"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nativeSrc": "3422:17:6",
                        "nodeType": "YulIdentifier",
                        "src": "3422:17:6"
                      },
                      "nativeSrc": "3422:20:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3422:20:6"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nativeSrc": "3417:1:6",
                        "nodeType": "YulIdentifier",
                        "src": "3417:1:6"
                      }
                    ]
                  },
                  {
                    "nativeSrc": "3451:16:6",
                    "nodeType": "YulAssignment",
                    "src": "3451:16:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nativeSrc": "3462:1:6",
                          "nodeType": "YulIdentifier",
                          "src": "3462:1:6"
                        },
                        {
                          "name": "y",
                          "nativeSrc": "3465:1:6",
                          "nodeType": "YulIdentifier",
                          "src": "3465:1:6"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "3458:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "3458:3:6"
                      },
                      "nativeSrc": "3458:9:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3458:9:6"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nativeSrc": "3451:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "3451:3:6"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nativeSrc": "3491:22:6",
                      "nodeType": "YulBlock",
                      "src": "3491:22:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nativeSrc": "3493:16:6",
                              "nodeType": "YulIdentifier",
                              "src": "3493:16:6"
                            },
                            "nativeSrc": "3493:18:6",
                            "nodeType": "YulFunctionCall",
                            "src": "3493:18:6"
                          },
                          "nativeSrc": "3493:18:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "3493:18:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nativeSrc": "3483:1:6",
                          "nodeType": "YulIdentifier",
                          "src": "3483:1:6"
                        },
                        {
                          "name": "sum",
                          "nativeSrc": "3486:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "3486:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nativeSrc": "3480:2:6",
                        "nodeType": "YulIdentifier",
                        "src": "3480:2:6"
                      },
                      "nativeSrc": "3480:10:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3480:10:6"
                    },
                    "nativeSrc": "3477:36:6",
                    "nodeType": "YulIf",
                    "src": "3477:36:6"
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nativeSrc": "3329:191:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nativeSrc": "3360:1:6",
                  "nodeType": "YulTypedName",
                  "src": "3360:1:6",
                  "type": ""
                },
                {
                  "name": "y",
                  "nativeSrc": "3363:1:6",
                  "nodeType": "YulTypedName",
                  "src": "3363:1:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nativeSrc": "3369:3:6",
                  "nodeType": "YulTypedName",
                  "src": "3369:3:6",
                  "type": ""
                }
              ],
              "src": "3329:191:6"
            },
            {
              "body": {
                "nativeSrc": "3622:73:6",
                "nodeType": "YulBlock",
                "src": "3622:73:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "3639:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "3639:3:6"
                        },
                        {
                          "name": "length",
                          "nativeSrc": "3644:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "3644:6:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "3632:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "3632:6:6"
                      },
                      "nativeSrc": "3632:19:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3632:19:6"
                    },
                    "nativeSrc": "3632:19:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "3632:19:6"
                  },
                  {
                    "nativeSrc": "3660:29:6",
                    "nodeType": "YulAssignment",
                    "src": "3660:29:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "3679:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "3679:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "3684:4:6",
                          "nodeType": "YulLiteral",
                          "src": "3684:4:6",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "3675:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "3675:3:6"
                      },
                      "nativeSrc": "3675:14:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3675:14:6"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nativeSrc": "3660:11:6",
                        "nodeType": "YulIdentifier",
                        "src": "3660:11:6"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nativeSrc": "3526:169:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "3594:3:6",
                  "nodeType": "YulTypedName",
                  "src": "3594:3:6",
                  "type": ""
                },
                {
                  "name": "length",
                  "nativeSrc": "3599:6:6",
                  "nodeType": "YulTypedName",
                  "src": "3599:6:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nativeSrc": "3610:11:6",
                  "nodeType": "YulTypedName",
                  "src": "3610:11:6",
                  "type": ""
                }
              ],
              "src": "3526:169:6"
            },
            {
              "body": {
                "nativeSrc": "3807:66:6",
                "nodeType": "YulBlock",
                "src": "3807:66:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "3829:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "3829:6:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "3837:1:6",
                              "nodeType": "YulLiteral",
                              "src": "3837:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "3825:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "3825:3:6"
                          },
                          "nativeSrc": "3825:14:6",
                          "nodeType": "YulFunctionCall",
                          "src": "3825:14:6"
                        },
                        {
                          "hexValue": "436c61696d20706572696f642068617320656e646564",
                          "kind": "string",
                          "nativeSrc": "3841:24:6",
                          "nodeType": "YulLiteral",
                          "src": "3841:24:6",
                          "type": "",
                          "value": "Claim period has ended"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "3818:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "3818:6:6"
                      },
                      "nativeSrc": "3818:48:6",
                      "nodeType": "YulFunctionCall",
                      "src": "3818:48:6"
                    },
                    "nativeSrc": "3818:48:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "3818:48:6"
                  }
                ]
              },
              "name": "store_literal_in_memory_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151",
              "nativeSrc": "3701:172:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "3799:6:6",
                  "nodeType": "YulTypedName",
                  "src": "3799:6:6",
                  "type": ""
                }
              ],
              "src": "3701:172:6"
            },
            {
              "body": {
                "nativeSrc": "4025:220:6",
                "nodeType": "YulBlock",
                "src": "4025:220:6",
                "statements": [
                  {
                    "nativeSrc": "4035:74:6",
                    "nodeType": "YulAssignment",
                    "src": "4035:74:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "4101:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4101:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "4106:2:6",
                          "nodeType": "YulLiteral",
                          "src": "4106:2:6",
                          "type": "",
                          "value": "22"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "4042:58:6",
                        "nodeType": "YulIdentifier",
                        "src": "4042:58:6"
                      },
                      "nativeSrc": "4042:67:6",
                      "nodeType": "YulFunctionCall",
                      "src": "4042:67:6"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "4035:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "4035:3:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "4207:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4207:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151",
                        "nativeSrc": "4118:88:6",
                        "nodeType": "YulIdentifier",
                        "src": "4118:88:6"
                      },
                      "nativeSrc": "4118:93:6",
                      "nodeType": "YulFunctionCall",
                      "src": "4118:93:6"
                    },
                    "nativeSrc": "4118:93:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "4118:93:6"
                  },
                  {
                    "nativeSrc": "4220:19:6",
                    "nodeType": "YulAssignment",
                    "src": "4220:19:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "4231:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "4231:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "4236:2:6",
                          "nodeType": "YulLiteral",
                          "src": "4236:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "4227:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "4227:3:6"
                      },
                      "nativeSrc": "4227:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "4227:12:6"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "4220:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "4220:3:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "3879:366:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "4013:3:6",
                  "nodeType": "YulTypedName",
                  "src": "4013:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "4021:3:6",
                  "nodeType": "YulTypedName",
                  "src": "4021:3:6",
                  "type": ""
                }
              ],
              "src": "3879:366:6"
            },
            {
              "body": {
                "nativeSrc": "4422:248:6",
                "nodeType": "YulBlock",
                "src": "4422:248:6",
                "statements": [
                  {
                    "nativeSrc": "4432:26:6",
                    "nodeType": "YulAssignment",
                    "src": "4432:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "4444:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "4444:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "4455:2:6",
                          "nodeType": "YulLiteral",
                          "src": "4455:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "4440:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "4440:3:6"
                      },
                      "nativeSrc": "4440:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "4440:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "4432:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "4432:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "4479:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "4479:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4490:1:6",
                              "nodeType": "YulLiteral",
                              "src": "4490:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4475:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "4475:3:6"
                          },
                          "nativeSrc": "4475:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "4475:17:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "4498:4:6",
                              "nodeType": "YulIdentifier",
                              "src": "4498:4:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "4504:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "4504:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "4494:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "4494:3:6"
                          },
                          "nativeSrc": "4494:20:6",
                          "nodeType": "YulFunctionCall",
                          "src": "4494:20:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "4468:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "4468:6:6"
                      },
                      "nativeSrc": "4468:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "4468:47:6"
                    },
                    "nativeSrc": "4468:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "4468:47:6"
                  },
                  {
                    "nativeSrc": "4524:139:6",
                    "nodeType": "YulAssignment",
                    "src": "4524:139:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "4658:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "4658:4:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "4532:124:6",
                        "nodeType": "YulIdentifier",
                        "src": "4532:124:6"
                      },
                      "nativeSrc": "4532:131:6",
                      "nodeType": "YulFunctionCall",
                      "src": "4532:131:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "4524:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "4524:4:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "4251:419:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "4402:9:6",
                  "nodeType": "YulTypedName",
                  "src": "4402:9:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "4417:4:6",
                  "nodeType": "YulTypedName",
                  "src": "4417:4:6",
                  "type": ""
                }
              ],
              "src": "4251:419:6"
            },
            {
              "body": {
                "nativeSrc": "4782:73:6",
                "nodeType": "YulBlock",
                "src": "4782:73:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "4804:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "4804:6:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "4812:1:6",
                              "nodeType": "YulLiteral",
                              "src": "4812:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "4800:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "4800:3:6"
                          },
                          "nativeSrc": "4800:14:6",
                          "nodeType": "YulFunctionCall",
                          "src": "4800:14:6"
                        },
                        {
                          "hexValue": "4e6f206d6f726520746f6b656e7320746f2062652072656c6561736564",
                          "kind": "string",
                          "nativeSrc": "4816:31:6",
                          "nodeType": "YulLiteral",
                          "src": "4816:31:6",
                          "type": "",
                          "value": "No more tokens to be released"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "4793:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "4793:6:6"
                      },
                      "nativeSrc": "4793:55:6",
                      "nodeType": "YulFunctionCall",
                      "src": "4793:55:6"
                    },
                    "nativeSrc": "4793:55:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "4793:55:6"
                  }
                ]
              },
              "name": "store_literal_in_memory_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126",
              "nativeSrc": "4676:179:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "4774:6:6",
                  "nodeType": "YulTypedName",
                  "src": "4774:6:6",
                  "type": ""
                }
              ],
              "src": "4676:179:6"
            },
            {
              "body": {
                "nativeSrc": "5007:220:6",
                "nodeType": "YulBlock",
                "src": "5007:220:6",
                "statements": [
                  {
                    "nativeSrc": "5017:74:6",
                    "nodeType": "YulAssignment",
                    "src": "5017:74:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5083:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "5083:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "5088:2:6",
                          "nodeType": "YulLiteral",
                          "src": "5088:2:6",
                          "type": "",
                          "value": "29"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "5024:58:6",
                        "nodeType": "YulIdentifier",
                        "src": "5024:58:6"
                      },
                      "nativeSrc": "5024:67:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5024:67:6"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "5017:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "5017:3:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5189:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "5189:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126",
                        "nativeSrc": "5100:88:6",
                        "nodeType": "YulIdentifier",
                        "src": "5100:88:6"
                      },
                      "nativeSrc": "5100:93:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5100:93:6"
                    },
                    "nativeSrc": "5100:93:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "5100:93:6"
                  },
                  {
                    "nativeSrc": "5202:19:6",
                    "nodeType": "YulAssignment",
                    "src": "5202:19:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "5213:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "5213:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "5218:2:6",
                          "nodeType": "YulLiteral",
                          "src": "5218:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "5209:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "5209:3:6"
                      },
                      "nativeSrc": "5209:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5209:12:6"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "5202:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "5202:3:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "4861:366:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "4995:3:6",
                  "nodeType": "YulTypedName",
                  "src": "4995:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "5003:3:6",
                  "nodeType": "YulTypedName",
                  "src": "5003:3:6",
                  "type": ""
                }
              ],
              "src": "4861:366:6"
            },
            {
              "body": {
                "nativeSrc": "5404:248:6",
                "nodeType": "YulBlock",
                "src": "5404:248:6",
                "statements": [
                  {
                    "nativeSrc": "5414:26:6",
                    "nodeType": "YulAssignment",
                    "src": "5414:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "5426:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "5426:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "5437:2:6",
                          "nodeType": "YulLiteral",
                          "src": "5437:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "5422:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "5422:3:6"
                      },
                      "nativeSrc": "5422:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5422:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "5414:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "5414:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "5461:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "5461:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5472:1:6",
                              "nodeType": "YulLiteral",
                              "src": "5472:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5457:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "5457:3:6"
                          },
                          "nativeSrc": "5457:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "5457:17:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "5480:4:6",
                              "nodeType": "YulIdentifier",
                              "src": "5480:4:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "5486:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "5486:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "5476:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "5476:3:6"
                          },
                          "nativeSrc": "5476:20:6",
                          "nodeType": "YulFunctionCall",
                          "src": "5476:20:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "5450:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "5450:6:6"
                      },
                      "nativeSrc": "5450:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5450:47:6"
                    },
                    "nativeSrc": "5450:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "5450:47:6"
                  },
                  {
                    "nativeSrc": "5506:139:6",
                    "nodeType": "YulAssignment",
                    "src": "5506:139:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "5640:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "5640:4:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "5514:124:6",
                        "nodeType": "YulIdentifier",
                        "src": "5514:124:6"
                      },
                      "nativeSrc": "5514:131:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5514:131:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "5506:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "5506:4:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "5233:419:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "5384:9:6",
                  "nodeType": "YulTypedName",
                  "src": "5384:9:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "5399:4:6",
                  "nodeType": "YulTypedName",
                  "src": "5399:4:6",
                  "type": ""
                }
              ],
              "src": "5233:419:6"
            },
            {
              "body": {
                "nativeSrc": "5764:63:6",
                "nodeType": "YulBlock",
                "src": "5764:63:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "5786:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "5786:6:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "5794:1:6",
                              "nodeType": "YulLiteral",
                              "src": "5794:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "5782:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "5782:3:6"
                          },
                          "nativeSrc": "5782:14:6",
                          "nodeType": "YulFunctionCall",
                          "src": "5782:14:6"
                        },
                        {
                          "hexValue": "496e76616c6964204e46542061646472657373",
                          "kind": "string",
                          "nativeSrc": "5798:21:6",
                          "nodeType": "YulLiteral",
                          "src": "5798:21:6",
                          "type": "",
                          "value": "Invalid NFT address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "5775:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "5775:6:6"
                      },
                      "nativeSrc": "5775:45:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5775:45:6"
                    },
                    "nativeSrc": "5775:45:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "5775:45:6"
                  }
                ]
              },
              "name": "store_literal_in_memory_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297",
              "nativeSrc": "5658:169:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "5756:6:6",
                  "nodeType": "YulTypedName",
                  "src": "5756:6:6",
                  "type": ""
                }
              ],
              "src": "5658:169:6"
            },
            {
              "body": {
                "nativeSrc": "5979:220:6",
                "nodeType": "YulBlock",
                "src": "5979:220:6",
                "statements": [
                  {
                    "nativeSrc": "5989:74:6",
                    "nodeType": "YulAssignment",
                    "src": "5989:74:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "6055:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "6055:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "6060:2:6",
                          "nodeType": "YulLiteral",
                          "src": "6060:2:6",
                          "type": "",
                          "value": "19"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "5996:58:6",
                        "nodeType": "YulIdentifier",
                        "src": "5996:58:6"
                      },
                      "nativeSrc": "5996:67:6",
                      "nodeType": "YulFunctionCall",
                      "src": "5996:67:6"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "5989:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "5989:3:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "6161:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "6161:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297",
                        "nativeSrc": "6072:88:6",
                        "nodeType": "YulIdentifier",
                        "src": "6072:88:6"
                      },
                      "nativeSrc": "6072:93:6",
                      "nodeType": "YulFunctionCall",
                      "src": "6072:93:6"
                    },
                    "nativeSrc": "6072:93:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "6072:93:6"
                  },
                  {
                    "nativeSrc": "6174:19:6",
                    "nodeType": "YulAssignment",
                    "src": "6174:19:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "6185:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "6185:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "6190:2:6",
                          "nodeType": "YulLiteral",
                          "src": "6190:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "6181:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "6181:3:6"
                      },
                      "nativeSrc": "6181:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "6181:12:6"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "6174:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "6174:3:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "5833:366:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "5967:3:6",
                  "nodeType": "YulTypedName",
                  "src": "5967:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "5975:3:6",
                  "nodeType": "YulTypedName",
                  "src": "5975:3:6",
                  "type": ""
                }
              ],
              "src": "5833:366:6"
            },
            {
              "body": {
                "nativeSrc": "6376:248:6",
                "nodeType": "YulBlock",
                "src": "6376:248:6",
                "statements": [
                  {
                    "nativeSrc": "6386:26:6",
                    "nodeType": "YulAssignment",
                    "src": "6386:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "6398:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "6398:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "6409:2:6",
                          "nodeType": "YulLiteral",
                          "src": "6409:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "6394:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "6394:3:6"
                      },
                      "nativeSrc": "6394:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "6394:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "6386:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "6386:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "6433:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "6433:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6444:1:6",
                              "nodeType": "YulLiteral",
                              "src": "6444:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6429:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "6429:3:6"
                          },
                          "nativeSrc": "6429:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "6429:17:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "6452:4:6",
                              "nodeType": "YulIdentifier",
                              "src": "6452:4:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "6458:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "6458:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "6448:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "6448:3:6"
                          },
                          "nativeSrc": "6448:20:6",
                          "nodeType": "YulFunctionCall",
                          "src": "6448:20:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "6422:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "6422:6:6"
                      },
                      "nativeSrc": "6422:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "6422:47:6"
                    },
                    "nativeSrc": "6422:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "6422:47:6"
                  },
                  {
                    "nativeSrc": "6478:139:6",
                    "nodeType": "YulAssignment",
                    "src": "6478:139:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "6612:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "6612:4:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "6486:124:6",
                        "nodeType": "YulIdentifier",
                        "src": "6486:124:6"
                      },
                      "nativeSrc": "6486:131:6",
                      "nodeType": "YulFunctionCall",
                      "src": "6486:131:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "6478:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "6478:4:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "6205:419:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "6356:9:6",
                  "nodeType": "YulTypedName",
                  "src": "6356:9:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "6371:4:6",
                  "nodeType": "YulTypedName",
                  "src": "6371:4:6",
                  "type": ""
                }
              ],
              "src": "6205:419:6"
            },
            {
              "body": {
                "nativeSrc": "6736:65:6",
                "nodeType": "YulBlock",
                "src": "6736:65:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "6758:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "6758:6:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "6766:1:6",
                              "nodeType": "YulLiteral",
                              "src": "6766:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "6754:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "6754:3:6"
                          },
                          "nativeSrc": "6754:14:6",
                          "nodeType": "YulFunctionCall",
                          "src": "6754:14:6"
                        },
                        {
                          "hexValue": "596f7520617265206e6f7420746865204f776e6572",
                          "kind": "string",
                          "nativeSrc": "6770:23:6",
                          "nodeType": "YulLiteral",
                          "src": "6770:23:6",
                          "type": "",
                          "value": "You are not the Owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "6747:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "6747:6:6"
                      },
                      "nativeSrc": "6747:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "6747:47:6"
                    },
                    "nativeSrc": "6747:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "6747:47:6"
                  }
                ]
              },
              "name": "store_literal_in_memory_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6",
              "nativeSrc": "6630:171:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "6728:6:6",
                  "nodeType": "YulTypedName",
                  "src": "6728:6:6",
                  "type": ""
                }
              ],
              "src": "6630:171:6"
            },
            {
              "body": {
                "nativeSrc": "6953:220:6",
                "nodeType": "YulBlock",
                "src": "6953:220:6",
                "statements": [
                  {
                    "nativeSrc": "6963:74:6",
                    "nodeType": "YulAssignment",
                    "src": "6963:74:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "7029:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "7029:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7034:2:6",
                          "nodeType": "YulLiteral",
                          "src": "7034:2:6",
                          "type": "",
                          "value": "21"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "6970:58:6",
                        "nodeType": "YulIdentifier",
                        "src": "6970:58:6"
                      },
                      "nativeSrc": "6970:67:6",
                      "nodeType": "YulFunctionCall",
                      "src": "6970:67:6"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "6963:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "6963:3:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "7135:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "7135:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6",
                        "nativeSrc": "7046:88:6",
                        "nodeType": "YulIdentifier",
                        "src": "7046:88:6"
                      },
                      "nativeSrc": "7046:93:6",
                      "nodeType": "YulFunctionCall",
                      "src": "7046:93:6"
                    },
                    "nativeSrc": "7046:93:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "7046:93:6"
                  },
                  {
                    "nativeSrc": "7148:19:6",
                    "nodeType": "YulAssignment",
                    "src": "7148:19:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "7159:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "7159:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7164:2:6",
                          "nodeType": "YulLiteral",
                          "src": "7164:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "7155:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "7155:3:6"
                      },
                      "nativeSrc": "7155:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "7155:12:6"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "7148:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "7148:3:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "6807:366:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "6941:3:6",
                  "nodeType": "YulTypedName",
                  "src": "6941:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "6949:3:6",
                  "nodeType": "YulTypedName",
                  "src": "6949:3:6",
                  "type": ""
                }
              ],
              "src": "6807:366:6"
            },
            {
              "body": {
                "nativeSrc": "7350:248:6",
                "nodeType": "YulBlock",
                "src": "7350:248:6",
                "statements": [
                  {
                    "nativeSrc": "7360:26:6",
                    "nodeType": "YulAssignment",
                    "src": "7360:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "7372:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "7372:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "7383:2:6",
                          "nodeType": "YulLiteral",
                          "src": "7383:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "7368:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "7368:3:6"
                      },
                      "nativeSrc": "7368:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "7368:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "7360:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "7360:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "7407:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "7407:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "7418:1:6",
                              "nodeType": "YulLiteral",
                              "src": "7418:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "7403:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "7403:3:6"
                          },
                          "nativeSrc": "7403:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "7403:17:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "7426:4:6",
                              "nodeType": "YulIdentifier",
                              "src": "7426:4:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "7432:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "7432:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "7422:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "7422:3:6"
                          },
                          "nativeSrc": "7422:20:6",
                          "nodeType": "YulFunctionCall",
                          "src": "7422:20:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7396:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "7396:6:6"
                      },
                      "nativeSrc": "7396:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "7396:47:6"
                    },
                    "nativeSrc": "7396:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "7396:47:6"
                  },
                  {
                    "nativeSrc": "7452:139:6",
                    "nodeType": "YulAssignment",
                    "src": "7452:139:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "7586:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "7586:4:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "7460:124:6",
                        "nodeType": "YulIdentifier",
                        "src": "7460:124:6"
                      },
                      "nativeSrc": "7460:131:6",
                      "nodeType": "YulFunctionCall",
                      "src": "7460:131:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "7452:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "7452:4:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "7179:419:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "7330:9:6",
                  "nodeType": "YulTypedName",
                  "src": "7330:9:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "7345:4:6",
                  "nodeType": "YulTypedName",
                  "src": "7345:4:6",
                  "type": ""
                }
              ],
              "src": "7179:419:6"
            },
            {
              "body": {
                "nativeSrc": "7710:66:6",
                "nodeType": "YulBlock",
                "src": "7710:66:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "7732:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "7732:6:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "7740:1:6",
                              "nodeType": "YulLiteral",
                              "src": "7740:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "7728:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "7728:3:6"
                          },
                          "nativeSrc": "7728:14:6",
                          "nodeType": "YulFunctionCall",
                          "src": "7728:14:6"
                        },
                        {
                          "hexValue": "4e465420494420616c726561647920636c61696d6564",
                          "kind": "string",
                          "nativeSrc": "7744:24:6",
                          "nodeType": "YulLiteral",
                          "src": "7744:24:6",
                          "type": "",
                          "value": "NFT ID already claimed"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "7721:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "7721:6:6"
                      },
                      "nativeSrc": "7721:48:6",
                      "nodeType": "YulFunctionCall",
                      "src": "7721:48:6"
                    },
                    "nativeSrc": "7721:48:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "7721:48:6"
                  }
                ]
              },
              "name": "store_literal_in_memory_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798",
              "nativeSrc": "7604:172:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "7702:6:6",
                  "nodeType": "YulTypedName",
                  "src": "7702:6:6",
                  "type": ""
                }
              ],
              "src": "7604:172:6"
            },
            {
              "body": {
                "nativeSrc": "7928:220:6",
                "nodeType": "YulBlock",
                "src": "7928:220:6",
                "statements": [
                  {
                    "nativeSrc": "7938:74:6",
                    "nodeType": "YulAssignment",
                    "src": "7938:74:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "8004:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "8004:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "8009:2:6",
                          "nodeType": "YulLiteral",
                          "src": "8009:2:6",
                          "type": "",
                          "value": "22"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "7945:58:6",
                        "nodeType": "YulIdentifier",
                        "src": "7945:58:6"
                      },
                      "nativeSrc": "7945:67:6",
                      "nodeType": "YulFunctionCall",
                      "src": "7945:67:6"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "7938:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "7938:3:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "8110:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "8110:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798",
                        "nativeSrc": "8021:88:6",
                        "nodeType": "YulIdentifier",
                        "src": "8021:88:6"
                      },
                      "nativeSrc": "8021:93:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8021:93:6"
                    },
                    "nativeSrc": "8021:93:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "8021:93:6"
                  },
                  {
                    "nativeSrc": "8123:19:6",
                    "nodeType": "YulAssignment",
                    "src": "8123:19:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "8134:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "8134:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "8139:2:6",
                          "nodeType": "YulLiteral",
                          "src": "8139:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "8130:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "8130:3:6"
                      },
                      "nativeSrc": "8130:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8130:12:6"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "8123:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "8123:3:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "7782:366:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "7916:3:6",
                  "nodeType": "YulTypedName",
                  "src": "7916:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "7924:3:6",
                  "nodeType": "YulTypedName",
                  "src": "7924:3:6",
                  "type": ""
                }
              ],
              "src": "7782:366:6"
            },
            {
              "body": {
                "nativeSrc": "8325:248:6",
                "nodeType": "YulBlock",
                "src": "8325:248:6",
                "statements": [
                  {
                    "nativeSrc": "8335:26:6",
                    "nodeType": "YulAssignment",
                    "src": "8335:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "8347:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "8347:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "8358:2:6",
                          "nodeType": "YulLiteral",
                          "src": "8358:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "8343:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "8343:3:6"
                      },
                      "nativeSrc": "8343:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8343:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "8335:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "8335:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "8382:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "8382:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8393:1:6",
                              "nodeType": "YulLiteral",
                              "src": "8393:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "8378:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "8378:3:6"
                          },
                          "nativeSrc": "8378:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "8378:17:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "8401:4:6",
                              "nodeType": "YulIdentifier",
                              "src": "8401:4:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "8407:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "8407:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "8397:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "8397:3:6"
                          },
                          "nativeSrc": "8397:20:6",
                          "nodeType": "YulFunctionCall",
                          "src": "8397:20:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "8371:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "8371:6:6"
                      },
                      "nativeSrc": "8371:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8371:47:6"
                    },
                    "nativeSrc": "8371:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "8371:47:6"
                  },
                  {
                    "nativeSrc": "8427:139:6",
                    "nodeType": "YulAssignment",
                    "src": "8427:139:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "8561:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "8561:4:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "8435:124:6",
                        "nodeType": "YulIdentifier",
                        "src": "8435:124:6"
                      },
                      "nativeSrc": "8435:131:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8435:131:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "8427:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "8427:4:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "8154:419:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "8305:9:6",
                  "nodeType": "YulTypedName",
                  "src": "8305:9:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "8320:4:6",
                  "nodeType": "YulTypedName",
                  "src": "8320:4:6",
                  "type": ""
                }
              ],
              "src": "8154:419:6"
            },
            {
              "body": {
                "nativeSrc": "8705:206:6",
                "nodeType": "YulBlock",
                "src": "8705:206:6",
                "statements": [
                  {
                    "nativeSrc": "8715:26:6",
                    "nodeType": "YulAssignment",
                    "src": "8715:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "8727:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "8727:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "8738:2:6",
                          "nodeType": "YulLiteral",
                          "src": "8738:2:6",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "8723:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "8723:3:6"
                      },
                      "nativeSrc": "8723:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8723:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "8715:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "8715:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "8795:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "8795:6:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "8808:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "8808:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8819:1:6",
                              "nodeType": "YulLiteral",
                              "src": "8819:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "8804:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "8804:3:6"
                          },
                          "nativeSrc": "8804:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "8804:17:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nativeSrc": "8751:43:6",
                        "nodeType": "YulIdentifier",
                        "src": "8751:43:6"
                      },
                      "nativeSrc": "8751:71:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8751:71:6"
                    },
                    "nativeSrc": "8751:71:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "8751:71:6"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nativeSrc": "8876:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "8876:6:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "8889:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "8889:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "8900:2:6",
                              "nodeType": "YulLiteral",
                              "src": "8900:2:6",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "8885:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "8885:3:6"
                          },
                          "nativeSrc": "8885:18:6",
                          "nodeType": "YulFunctionCall",
                          "src": "8885:18:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nativeSrc": "8832:43:6",
                        "nodeType": "YulIdentifier",
                        "src": "8832:43:6"
                      },
                      "nativeSrc": "8832:72:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8832:72:6"
                    },
                    "nativeSrc": "8832:72:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "8832:72:6"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
              "nativeSrc": "8579:332:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "8669:9:6",
                  "nodeType": "YulTypedName",
                  "src": "8669:9:6",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nativeSrc": "8681:6:6",
                  "nodeType": "YulTypedName",
                  "src": "8681:6:6",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "8689:6:6",
                  "nodeType": "YulTypedName",
                  "src": "8689:6:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "8700:4:6",
                  "nodeType": "YulTypedName",
                  "src": "8700:4:6",
                  "type": ""
                }
              ],
              "src": "8579:332:6"
            },
            {
              "body": {
                "nativeSrc": "8957:76:6",
                "nodeType": "YulBlock",
                "src": "8957:76:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "9011:16:6",
                      "nodeType": "YulBlock",
                      "src": "9011:16:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nativeSrc": "9020:1:6",
                                "nodeType": "YulLiteral",
                                "src": "9020:1:6",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nativeSrc": "9023:1:6",
                                "nodeType": "YulLiteral",
                                "src": "9023:1:6",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nativeSrc": "9013:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "9013:6:6"
                            },
                            "nativeSrc": "9013:12:6",
                            "nodeType": "YulFunctionCall",
                            "src": "9013:12:6"
                          },
                          "nativeSrc": "9013:12:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "9013:12:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nativeSrc": "8980:5:6",
                              "nodeType": "YulIdentifier",
                              "src": "8980:5:6"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nativeSrc": "9002:5:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "9002:5:6"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nativeSrc": "8987:14:6",
                                "nodeType": "YulIdentifier",
                                "src": "8987:14:6"
                              },
                              "nativeSrc": "8987:21:6",
                              "nodeType": "YulFunctionCall",
                              "src": "8987:21:6"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nativeSrc": "8977:2:6",
                            "nodeType": "YulIdentifier",
                            "src": "8977:2:6"
                          },
                          "nativeSrc": "8977:32:6",
                          "nodeType": "YulFunctionCall",
                          "src": "8977:32:6"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nativeSrc": "8970:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "8970:6:6"
                      },
                      "nativeSrc": "8970:40:6",
                      "nodeType": "YulFunctionCall",
                      "src": "8970:40:6"
                    },
                    "nativeSrc": "8967:60:6",
                    "nodeType": "YulIf",
                    "src": "8967:60:6"
                  }
                ]
              },
              "name": "validator_revert_t_bool",
              "nativeSrc": "8917:116:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nativeSrc": "8950:5:6",
                  "nodeType": "YulTypedName",
                  "src": "8950:5:6",
                  "type": ""
                }
              ],
              "src": "8917:116:6"
            },
            {
              "body": {
                "nativeSrc": "9099:77:6",
                "nodeType": "YulBlock",
                "src": "9099:77:6",
                "statements": [
                  {
                    "nativeSrc": "9109:22:6",
                    "nodeType": "YulAssignment",
                    "src": "9109:22:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "9124:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "9124:6:6"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "9118:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "9118:5:6"
                      },
                      "nativeSrc": "9118:13:6",
                      "nodeType": "YulFunctionCall",
                      "src": "9118:13:6"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "9109:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "9109:5:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "9164:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "9164:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bool",
                        "nativeSrc": "9140:23:6",
                        "nodeType": "YulIdentifier",
                        "src": "9140:23:6"
                      },
                      "nativeSrc": "9140:30:6",
                      "nodeType": "YulFunctionCall",
                      "src": "9140:30:6"
                    },
                    "nativeSrc": "9140:30:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "9140:30:6"
                  }
                ]
              },
              "name": "abi_decode_t_bool_fromMemory",
              "nativeSrc": "9039:137:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "9077:6:6",
                  "nodeType": "YulTypedName",
                  "src": "9077:6:6",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "9085:3:6",
                  "nodeType": "YulTypedName",
                  "src": "9085:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "9093:5:6",
                  "nodeType": "YulTypedName",
                  "src": "9093:5:6",
                  "type": ""
                }
              ],
              "src": "9039:137:6"
            },
            {
              "body": {
                "nativeSrc": "9256:271:6",
                "nodeType": "YulBlock",
                "src": "9256:271:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "9302:83:6",
                      "nodeType": "YulBlock",
                      "src": "9302:83:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "9304:77:6",
                              "nodeType": "YulIdentifier",
                              "src": "9304:77:6"
                            },
                            "nativeSrc": "9304:79:6",
                            "nodeType": "YulFunctionCall",
                            "src": "9304:79:6"
                          },
                          "nativeSrc": "9304:79:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "9304:79:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "9277:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "9277:7:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "9286:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "9286:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "9273:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "9273:3:6"
                          },
                          "nativeSrc": "9273:23:6",
                          "nodeType": "YulFunctionCall",
                          "src": "9273:23:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "9298:2:6",
                          "nodeType": "YulLiteral",
                          "src": "9298:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "9269:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "9269:3:6"
                      },
                      "nativeSrc": "9269:32:6",
                      "nodeType": "YulFunctionCall",
                      "src": "9269:32:6"
                    },
                    "nativeSrc": "9266:119:6",
                    "nodeType": "YulIf",
                    "src": "9266:119:6"
                  },
                  {
                    "nativeSrc": "9395:125:6",
                    "nodeType": "YulBlock",
                    "src": "9395:125:6",
                    "statements": [
                      {
                        "nativeSrc": "9410:15:6",
                        "nodeType": "YulVariableDeclaration",
                        "src": "9410:15:6",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "9424:1:6",
                          "nodeType": "YulLiteral",
                          "src": "9424:1:6",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "9414:6:6",
                            "nodeType": "YulTypedName",
                            "src": "9414:6:6",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "9439:71:6",
                        "nodeType": "YulAssignment",
                        "src": "9439:71:6",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "9482:9:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "9482:9:6"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "9493:6:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "9493:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "9478:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "9478:3:6"
                              },
                              "nativeSrc": "9478:22:6",
                              "nodeType": "YulFunctionCall",
                              "src": "9478:22:6"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "9502:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "9502:7:6"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bool_fromMemory",
                            "nativeSrc": "9449:28:6",
                            "nodeType": "YulIdentifier",
                            "src": "9449:28:6"
                          },
                          "nativeSrc": "9449:61:6",
                          "nodeType": "YulFunctionCall",
                          "src": "9449:61:6"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "9439:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "9439:6:6"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bool_fromMemory",
              "nativeSrc": "9182:345:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "9226:9:6",
                  "nodeType": "YulTypedName",
                  "src": "9226:9:6",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "9237:7:6",
                  "nodeType": "YulTypedName",
                  "src": "9237:7:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "9249:6:6",
                  "nodeType": "YulTypedName",
                  "src": "9249:6:6",
                  "type": ""
                }
              ],
              "src": "9182:345:6"
            },
            {
              "body": {
                "nativeSrc": "9639:65:6",
                "nodeType": "YulBlock",
                "src": "9639:65:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "9661:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "9661:6:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "9669:1:6",
                              "nodeType": "YulLiteral",
                              "src": "9669:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "9657:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "9657:3:6"
                          },
                          "nativeSrc": "9657:14:6",
                          "nodeType": "YulFunctionCall",
                          "src": "9657:14:6"
                        },
                        {
                          "hexValue": "596f7520617265206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nativeSrc": "9673:23:6",
                          "nodeType": "YulLiteral",
                          "src": "9673:23:6",
                          "type": "",
                          "value": "You are not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "9650:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "9650:6:6"
                      },
                      "nativeSrc": "9650:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "9650:47:6"
                    },
                    "nativeSrc": "9650:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "9650:47:6"
                  }
                ]
              },
              "name": "store_literal_in_memory_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc",
              "nativeSrc": "9533:171:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "9631:6:6",
                  "nodeType": "YulTypedName",
                  "src": "9631:6:6",
                  "type": ""
                }
              ],
              "src": "9533:171:6"
            },
            {
              "body": {
                "nativeSrc": "9856:220:6",
                "nodeType": "YulBlock",
                "src": "9856:220:6",
                "statements": [
                  {
                    "nativeSrc": "9866:74:6",
                    "nodeType": "YulAssignment",
                    "src": "9866:74:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "9932:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "9932:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "9937:2:6",
                          "nodeType": "YulLiteral",
                          "src": "9937:2:6",
                          "type": "",
                          "value": "21"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "9873:58:6",
                        "nodeType": "YulIdentifier",
                        "src": "9873:58:6"
                      },
                      "nativeSrc": "9873:67:6",
                      "nodeType": "YulFunctionCall",
                      "src": "9873:67:6"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "9866:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "9866:3:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "10038:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "10038:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc",
                        "nativeSrc": "9949:88:6",
                        "nodeType": "YulIdentifier",
                        "src": "9949:88:6"
                      },
                      "nativeSrc": "9949:93:6",
                      "nodeType": "YulFunctionCall",
                      "src": "9949:93:6"
                    },
                    "nativeSrc": "9949:93:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "9949:93:6"
                  },
                  {
                    "nativeSrc": "10051:19:6",
                    "nodeType": "YulAssignment",
                    "src": "10051:19:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "10062:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "10062:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "10067:2:6",
                          "nodeType": "YulLiteral",
                          "src": "10067:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "10058:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "10058:3:6"
                      },
                      "nativeSrc": "10058:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10058:12:6"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "10051:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "10051:3:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "9710:366:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "9844:3:6",
                  "nodeType": "YulTypedName",
                  "src": "9844:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "9852:3:6",
                  "nodeType": "YulTypedName",
                  "src": "9852:3:6",
                  "type": ""
                }
              ],
              "src": "9710:366:6"
            },
            {
              "body": {
                "nativeSrc": "10253:248:6",
                "nodeType": "YulBlock",
                "src": "10253:248:6",
                "statements": [
                  {
                    "nativeSrc": "10263:26:6",
                    "nodeType": "YulAssignment",
                    "src": "10263:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "10275:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "10275:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "10286:2:6",
                          "nodeType": "YulLiteral",
                          "src": "10286:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "10271:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "10271:3:6"
                      },
                      "nativeSrc": "10271:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10271:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "10263:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "10263:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "10310:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "10310:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10321:1:6",
                              "nodeType": "YulLiteral",
                              "src": "10321:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10306:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "10306:3:6"
                          },
                          "nativeSrc": "10306:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "10306:17:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "10329:4:6",
                              "nodeType": "YulIdentifier",
                              "src": "10329:4:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "10335:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "10335:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "10325:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "10325:3:6"
                          },
                          "nativeSrc": "10325:20:6",
                          "nodeType": "YulFunctionCall",
                          "src": "10325:20:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "10299:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "10299:6:6"
                      },
                      "nativeSrc": "10299:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10299:47:6"
                    },
                    "nativeSrc": "10299:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "10299:47:6"
                  },
                  {
                    "nativeSrc": "10355:139:6",
                    "nodeType": "YulAssignment",
                    "src": "10355:139:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "10489:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "10489:4:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "10363:124:6",
                        "nodeType": "YulIdentifier",
                        "src": "10363:124:6"
                      },
                      "nativeSrc": "10363:131:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10363:131:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "10355:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "10355:4:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "10082:419:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "10233:9:6",
                  "nodeType": "YulTypedName",
                  "src": "10233:9:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "10248:4:6",
                  "nodeType": "YulTypedName",
                  "src": "10248:4:6",
                  "type": ""
                }
              ],
              "src": "10082:419:6"
            },
            {
              "body": {
                "nativeSrc": "10633:206:6",
                "nodeType": "YulBlock",
                "src": "10633:206:6",
                "statements": [
                  {
                    "nativeSrc": "10643:26:6",
                    "nodeType": "YulAssignment",
                    "src": "10643:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "10655:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "10655:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "10666:2:6",
                          "nodeType": "YulLiteral",
                          "src": "10666:2:6",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "10651:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "10651:3:6"
                      },
                      "nativeSrc": "10651:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10651:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "10643:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "10643:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nativeSrc": "10723:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "10723:6:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "10736:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "10736:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10747:1:6",
                              "nodeType": "YulLiteral",
                              "src": "10747:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10732:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "10732:3:6"
                          },
                          "nativeSrc": "10732:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "10732:17:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nativeSrc": "10679:43:6",
                        "nodeType": "YulIdentifier",
                        "src": "10679:43:6"
                      },
                      "nativeSrc": "10679:71:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10679:71:6"
                    },
                    "nativeSrc": "10679:71:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "10679:71:6"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nativeSrc": "10804:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "10804:6:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "10817:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "10817:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10828:2:6",
                              "nodeType": "YulLiteral",
                              "src": "10828:2:6",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10813:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "10813:3:6"
                          },
                          "nativeSrc": "10813:18:6",
                          "nodeType": "YulFunctionCall",
                          "src": "10813:18:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nativeSrc": "10760:43:6",
                        "nodeType": "YulIdentifier",
                        "src": "10760:43:6"
                      },
                      "nativeSrc": "10760:72:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10760:72:6"
                    },
                    "nativeSrc": "10760:72:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "10760:72:6"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
              "nativeSrc": "10507:332:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "10597:9:6",
                  "nodeType": "YulTypedName",
                  "src": "10597:9:6",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nativeSrc": "10609:6:6",
                  "nodeType": "YulTypedName",
                  "src": "10609:6:6",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nativeSrc": "10617:6:6",
                  "nodeType": "YulTypedName",
                  "src": "10617:6:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "10628:4:6",
                  "nodeType": "YulTypedName",
                  "src": "10628:4:6",
                  "type": ""
                }
              ],
              "src": "10507:332:6"
            },
            {
              "body": {
                "nativeSrc": "10951:57:6",
                "nodeType": "YulBlock",
                "src": "10951:57:6",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nativeSrc": "10973:6:6",
                              "nodeType": "YulIdentifier",
                              "src": "10973:6:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "10981:1:6",
                              "nodeType": "YulLiteral",
                              "src": "10981:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "10969:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "10969:3:6"
                          },
                          "nativeSrc": "10969:14:6",
                          "nodeType": "YulFunctionCall",
                          "src": "10969:14:6"
                        },
                        {
                          "hexValue": "4e6f7420746865206f776e6572",
                          "kind": "string",
                          "nativeSrc": "10985:15:6",
                          "nodeType": "YulLiteral",
                          "src": "10985:15:6",
                          "type": "",
                          "value": "Not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "10962:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "10962:6:6"
                      },
                      "nativeSrc": "10962:39:6",
                      "nodeType": "YulFunctionCall",
                      "src": "10962:39:6"
                    },
                    "nativeSrc": "10962:39:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "10962:39:6"
                  }
                ]
              },
              "name": "store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
              "nativeSrc": "10845:163:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nativeSrc": "10943:6:6",
                  "nodeType": "YulTypedName",
                  "src": "10943:6:6",
                  "type": ""
                }
              ],
              "src": "10845:163:6"
            },
            {
              "body": {
                "nativeSrc": "11160:220:6",
                "nodeType": "YulBlock",
                "src": "11160:220:6",
                "statements": [
                  {
                    "nativeSrc": "11170:74:6",
                    "nodeType": "YulAssignment",
                    "src": "11170:74:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "11236:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "11236:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "11241:2:6",
                          "nodeType": "YulLiteral",
                          "src": "11241:2:6",
                          "type": "",
                          "value": "13"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nativeSrc": "11177:58:6",
                        "nodeType": "YulIdentifier",
                        "src": "11177:58:6"
                      },
                      "nativeSrc": "11177:67:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11177:67:6"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nativeSrc": "11170:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "11170:3:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "11342:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "11342:3:6"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
                        "nativeSrc": "11253:88:6",
                        "nodeType": "YulIdentifier",
                        "src": "11253:88:6"
                      },
                      "nativeSrc": "11253:93:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11253:93:6"
                    },
                    "nativeSrc": "11253:93:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "11253:93:6"
                  },
                  {
                    "nativeSrc": "11355:19:6",
                    "nodeType": "YulAssignment",
                    "src": "11355:19:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nativeSrc": "11366:3:6",
                          "nodeType": "YulIdentifier",
                          "src": "11366:3:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "11371:2:6",
                          "nodeType": "YulLiteral",
                          "src": "11371:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "11362:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "11362:3:6"
                      },
                      "nativeSrc": "11362:12:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11362:12:6"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nativeSrc": "11355:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "11355:3:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack",
              "nativeSrc": "11014:366:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nativeSrc": "11148:3:6",
                  "nodeType": "YulTypedName",
                  "src": "11148:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nativeSrc": "11156:3:6",
                  "nodeType": "YulTypedName",
                  "src": "11156:3:6",
                  "type": ""
                }
              ],
              "src": "11014:366:6"
            },
            {
              "body": {
                "nativeSrc": "11557:248:6",
                "nodeType": "YulBlock",
                "src": "11557:248:6",
                "statements": [
                  {
                    "nativeSrc": "11567:26:6",
                    "nodeType": "YulAssignment",
                    "src": "11567:26:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nativeSrc": "11579:9:6",
                          "nodeType": "YulIdentifier",
                          "src": "11579:9:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "11590:2:6",
                          "nodeType": "YulLiteral",
                          "src": "11590:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nativeSrc": "11575:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "11575:3:6"
                      },
                      "nativeSrc": "11575:18:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11575:18:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "11567:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "11567:4:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nativeSrc": "11614:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "11614:9:6"
                            },
                            {
                              "kind": "number",
                              "nativeSrc": "11625:1:6",
                              "nodeType": "YulLiteral",
                              "src": "11625:1:6",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nativeSrc": "11610:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "11610:3:6"
                          },
                          "nativeSrc": "11610:17:6",
                          "nodeType": "YulFunctionCall",
                          "src": "11610:17:6"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nativeSrc": "11633:4:6",
                              "nodeType": "YulIdentifier",
                              "src": "11633:4:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "11639:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "11639:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "11629:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "11629:3:6"
                          },
                          "nativeSrc": "11629:20:6",
                          "nodeType": "YulFunctionCall",
                          "src": "11629:20:6"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nativeSrc": "11603:6:6",
                        "nodeType": "YulIdentifier",
                        "src": "11603:6:6"
                      },
                      "nativeSrc": "11603:47:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11603:47:6"
                    },
                    "nativeSrc": "11603:47:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "11603:47:6"
                  },
                  {
                    "nativeSrc": "11659:139:6",
                    "nodeType": "YulAssignment",
                    "src": "11659:139:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nativeSrc": "11793:4:6",
                          "nodeType": "YulIdentifier",
                          "src": "11793:4:6"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack",
                        "nativeSrc": "11667:124:6",
                        "nodeType": "YulIdentifier",
                        "src": "11667:124:6"
                      },
                      "nativeSrc": "11667:131:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11667:131:6"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nativeSrc": "11659:4:6",
                        "nodeType": "YulIdentifier",
                        "src": "11659:4:6"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5__to_t_string_memory_ptr__fromStack_reversed",
              "nativeSrc": "11386:419:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "11537:9:6",
                  "nodeType": "YulTypedName",
                  "src": "11537:9:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nativeSrc": "11552:4:6",
                  "nodeType": "YulTypedName",
                  "src": "11552:4:6",
                  "type": ""
                }
              ],
              "src": "11386:419:6"
            },
            {
              "body": {
                "nativeSrc": "11874:80:6",
                "nodeType": "YulBlock",
                "src": "11874:80:6",
                "statements": [
                  {
                    "nativeSrc": "11884:22:6",
                    "nodeType": "YulAssignment",
                    "src": "11884:22:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "11899:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "11899:6:6"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "11893:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "11893:5:6"
                      },
                      "nativeSrc": "11893:13:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11893:13:6"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "11884:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "11884:5:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "11942:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "11942:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nativeSrc": "11915:26:6",
                        "nodeType": "YulIdentifier",
                        "src": "11915:26:6"
                      },
                      "nativeSrc": "11915:33:6",
                      "nodeType": "YulFunctionCall",
                      "src": "11915:33:6"
                    },
                    "nativeSrc": "11915:33:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "11915:33:6"
                  }
                ]
              },
              "name": "abi_decode_t_uint256_fromMemory",
              "nativeSrc": "11811:143:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "11852:6:6",
                  "nodeType": "YulTypedName",
                  "src": "11852:6:6",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "11860:3:6",
                  "nodeType": "YulTypedName",
                  "src": "11860:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "11868:5:6",
                  "nodeType": "YulTypedName",
                  "src": "11868:5:6",
                  "type": ""
                }
              ],
              "src": "11811:143:6"
            },
            {
              "body": {
                "nativeSrc": "12037:274:6",
                "nodeType": "YulBlock",
                "src": "12037:274:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "12083:83:6",
                      "nodeType": "YulBlock",
                      "src": "12083:83:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "12085:77:6",
                              "nodeType": "YulIdentifier",
                              "src": "12085:77:6"
                            },
                            "nativeSrc": "12085:79:6",
                            "nodeType": "YulFunctionCall",
                            "src": "12085:79:6"
                          },
                          "nativeSrc": "12085:79:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "12085:79:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "12058:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "12058:7:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "12067:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "12067:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "12054:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "12054:3:6"
                          },
                          "nativeSrc": "12054:23:6",
                          "nodeType": "YulFunctionCall",
                          "src": "12054:23:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "12079:2:6",
                          "nodeType": "YulLiteral",
                          "src": "12079:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "12050:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "12050:3:6"
                      },
                      "nativeSrc": "12050:32:6",
                      "nodeType": "YulFunctionCall",
                      "src": "12050:32:6"
                    },
                    "nativeSrc": "12047:119:6",
                    "nodeType": "YulIf",
                    "src": "12047:119:6"
                  },
                  {
                    "nativeSrc": "12176:128:6",
                    "nodeType": "YulBlock",
                    "src": "12176:128:6",
                    "statements": [
                      {
                        "nativeSrc": "12191:15:6",
                        "nodeType": "YulVariableDeclaration",
                        "src": "12191:15:6",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "12205:1:6",
                          "nodeType": "YulLiteral",
                          "src": "12205:1:6",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "12195:6:6",
                            "nodeType": "YulTypedName",
                            "src": "12195:6:6",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "12220:74:6",
                        "nodeType": "YulAssignment",
                        "src": "12220:74:6",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "12266:9:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "12266:9:6"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "12277:6:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "12277:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "12262:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "12262:3:6"
                              },
                              "nativeSrc": "12262:22:6",
                              "nodeType": "YulFunctionCall",
                              "src": "12262:22:6"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "12286:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "12286:7:6"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256_fromMemory",
                            "nativeSrc": "12230:31:6",
                            "nodeType": "YulIdentifier",
                            "src": "12230:31:6"
                          },
                          "nativeSrc": "12230:64:6",
                          "nodeType": "YulFunctionCall",
                          "src": "12230:64:6"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "12220:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "12220:6:6"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256_fromMemory",
              "nativeSrc": "11960:351:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "12007:9:6",
                  "nodeType": "YulTypedName",
                  "src": "12007:9:6",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "12018:7:6",
                  "nodeType": "YulTypedName",
                  "src": "12018:7:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "12030:6:6",
                  "nodeType": "YulTypedName",
                  "src": "12030:6:6",
                  "type": ""
                }
              ],
              "src": "11960:351:6"
            },
            {
              "body": {
                "nativeSrc": "12380:80:6",
                "nodeType": "YulBlock",
                "src": "12380:80:6",
                "statements": [
                  {
                    "nativeSrc": "12390:22:6",
                    "nodeType": "YulAssignment",
                    "src": "12390:22:6",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nativeSrc": "12405:6:6",
                          "nodeType": "YulIdentifier",
                          "src": "12405:6:6"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nativeSrc": "12399:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "12399:5:6"
                      },
                      "nativeSrc": "12399:13:6",
                      "nodeType": "YulFunctionCall",
                      "src": "12399:13:6"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nativeSrc": "12390:5:6",
                        "nodeType": "YulIdentifier",
                        "src": "12390:5:6"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nativeSrc": "12448:5:6",
                          "nodeType": "YulIdentifier",
                          "src": "12448:5:6"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nativeSrc": "12421:26:6",
                        "nodeType": "YulIdentifier",
                        "src": "12421:26:6"
                      },
                      "nativeSrc": "12421:33:6",
                      "nodeType": "YulFunctionCall",
                      "src": "12421:33:6"
                    },
                    "nativeSrc": "12421:33:6",
                    "nodeType": "YulExpressionStatement",
                    "src": "12421:33:6"
                  }
                ]
              },
              "name": "abi_decode_t_address_fromMemory",
              "nativeSrc": "12317:143:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nativeSrc": "12358:6:6",
                  "nodeType": "YulTypedName",
                  "src": "12358:6:6",
                  "type": ""
                },
                {
                  "name": "end",
                  "nativeSrc": "12366:3:6",
                  "nodeType": "YulTypedName",
                  "src": "12366:3:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nativeSrc": "12374:5:6",
                  "nodeType": "YulTypedName",
                  "src": "12374:5:6",
                  "type": ""
                }
              ],
              "src": "12317:143:6"
            },
            {
              "body": {
                "nativeSrc": "12543:274:6",
                "nodeType": "YulBlock",
                "src": "12543:274:6",
                "statements": [
                  {
                    "body": {
                      "nativeSrc": "12589:83:6",
                      "nodeType": "YulBlock",
                      "src": "12589:83:6",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nativeSrc": "12591:77:6",
                              "nodeType": "YulIdentifier",
                              "src": "12591:77:6"
                            },
                            "nativeSrc": "12591:79:6",
                            "nodeType": "YulFunctionCall",
                            "src": "12591:79:6"
                          },
                          "nativeSrc": "12591:79:6",
                          "nodeType": "YulExpressionStatement",
                          "src": "12591:79:6"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nativeSrc": "12564:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "12564:7:6"
                            },
                            {
                              "name": "headStart",
                              "nativeSrc": "12573:9:6",
                              "nodeType": "YulIdentifier",
                              "src": "12573:9:6"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nativeSrc": "12560:3:6",
                            "nodeType": "YulIdentifier",
                            "src": "12560:3:6"
                          },
                          "nativeSrc": "12560:23:6",
                          "nodeType": "YulFunctionCall",
                          "src": "12560:23:6"
                        },
                        {
                          "kind": "number",
                          "nativeSrc": "12585:2:6",
                          "nodeType": "YulLiteral",
                          "src": "12585:2:6",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nativeSrc": "12556:3:6",
                        "nodeType": "YulIdentifier",
                        "src": "12556:3:6"
                      },
                      "nativeSrc": "12556:32:6",
                      "nodeType": "YulFunctionCall",
                      "src": "12556:32:6"
                    },
                    "nativeSrc": "12553:119:6",
                    "nodeType": "YulIf",
                    "src": "12553:119:6"
                  },
                  {
                    "nativeSrc": "12682:128:6",
                    "nodeType": "YulBlock",
                    "src": "12682:128:6",
                    "statements": [
                      {
                        "nativeSrc": "12697:15:6",
                        "nodeType": "YulVariableDeclaration",
                        "src": "12697:15:6",
                        "value": {
                          "kind": "number",
                          "nativeSrc": "12711:1:6",
                          "nodeType": "YulLiteral",
                          "src": "12711:1:6",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nativeSrc": "12701:6:6",
                            "nodeType": "YulTypedName",
                            "src": "12701:6:6",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nativeSrc": "12726:74:6",
                        "nodeType": "YulAssignment",
                        "src": "12726:74:6",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nativeSrc": "12772:9:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "12772:9:6"
                                },
                                {
                                  "name": "offset",
                                  "nativeSrc": "12783:6:6",
                                  "nodeType": "YulIdentifier",
                                  "src": "12783:6:6"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nativeSrc": "12768:3:6",
                                "nodeType": "YulIdentifier",
                                "src": "12768:3:6"
                              },
                              "nativeSrc": "12768:22:6",
                              "nodeType": "YulFunctionCall",
                              "src": "12768:22:6"
                            },
                            {
                              "name": "dataEnd",
                              "nativeSrc": "12792:7:6",
                              "nodeType": "YulIdentifier",
                              "src": "12792:7:6"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address_fromMemory",
                            "nativeSrc": "12736:31:6",
                            "nodeType": "YulIdentifier",
                            "src": "12736:31:6"
                          },
                          "nativeSrc": "12736:64:6",
                          "nodeType": "YulFunctionCall",
                          "src": "12736:64:6"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nativeSrc": "12726:6:6",
                            "nodeType": "YulIdentifier",
                            "src": "12726:6:6"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address_fromMemory",
              "nativeSrc": "12466:351:6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nativeSrc": "12513:9:6",
                  "nodeType": "YulTypedName",
                  "src": "12513:9:6",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nativeSrc": "12524:7:6",
                  "nodeType": "YulTypedName",
                  "src": "12524:7:6",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nativeSrc": "12536:6:6",
                  "nodeType": "YulTypedName",
                  "src": "12536:6:6",
                  "type": ""
                }
              ],
              "src": "12466:351:6"
            }
          ]
        },
        "contents": "{\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_uint256t_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151(memPtr) {\n\n        mstore(add(memPtr, 0), \"Claim period has ended\")\n\n    }\n\n    function abi_encode_t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n        store_literal_in_memory_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126(memPtr) {\n\n        mstore(add(memPtr, 0), \"No more tokens to be released\")\n\n    }\n\n    function abi_encode_t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297(memPtr) {\n\n        mstore(add(memPtr, 0), \"Invalid NFT address\")\n\n    }\n\n    function abi_encode_t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 19)\n        store_literal_in_memory_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6(memPtr) {\n\n        mstore(add(memPtr, 0), \"You are not the Owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 21)\n        store_literal_in_memory_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798(memPtr) {\n\n        mstore(add(memPtr, 0), \"NFT ID already claimed\")\n\n    }\n\n    function abi_encode_t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n        store_literal_in_memory_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc(memPtr) {\n\n        mstore(add(memPtr, 0), \"You are not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 21)\n        store_literal_in_memory_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5(memPtr) {\n\n        mstore(add(memPtr, 0), \"Not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 13)\n        store_literal_in_memory_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
        "id": 6,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "303:3332:4:-:0;;;598:6;571:33;;1274:393;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1746:1:5;1961:7;:21;;;;1331:11:4;1318:10;;:24;;;;;;;;;;;;;;;;;;1361:10;1353:5;;:18;;;;;;;;;;;;;;;;;;1401:10;1382:16;:29;;;;1441:9;1422:16;:28;;;;1486:15;1461:22;:40;;;;1538:42;1512:23;;:68;;;;;;;;;;;;;;;;;;1617:42;1591:23;;:68;;;;;;;;;;;;;;;;;;1274:393;303:3332;;88:117:6;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;303:3332:4:-;;;;;;;",
    "deployedSourceMap": "303:3332:4:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;658:38;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;424:31;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;527:37;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2349:958;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;902:48;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;392:25;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;500:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3315:309;;;:::i;:::-;;2214:127;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;571:33;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;462:31;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;613:38;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;957:49;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;658:38;;;;;;;;;;;;;:::o;424:31::-;;;;:::o;527:37::-;;;;:::o;2349:958::-;1210:9;;1185:22;;:34;;;;:::i;:::-;1166:15;:53;;1158:88;;;;;;;;;;;;:::i;:::-;;;;;;;;;2411:21:5::1;:19;:21::i;:::-;2484:1:4::2;2466:17;:15;:17::i;:::-;:19;2458:60;;;;;;;;;;;;:::i;:::-;;;;;;;;;2539:31;2558:11;2539:18;:31::i;:::-;2531:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;2626:23;;;;;;;;;;;2611:38;;:11;:38;;::::0;2607:629:::2;;2674:32;2699:6;2674:24;:32::i;:::-;2666:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;2755:16;:24;2772:6;2755:24;;;;;;;;;;;;;;;;;;;;;2754:25;2746:60;;;;;;;;;;;;:::i;:::-;;;;;;;;;2848:4;2821:16;:24;2838:6;2821:24;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;2874:10;;;;;;;;;;;2867:27;;;2895:10;2907:16;;2867:57;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2607:629;;;2967:28;2988:6;2967:20;:28::i;:::-;2959:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;3044:17;:25;3062:6;3044:25;;;;;;;;;;;;;;;;;;;;;3043:26;3035:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;3139:4;3111:17;:25;3129:6;3111:25;;;;;;;;;;;;:32;;;;;;;;;;;;;;;;;;3165:10;;;;;;;;;;;3158:27;;;3186:10;3198:16;;3158:57;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2607:629;3267:10;3253:46;;;3279:6;3287:11;3253:46;;;;;;;:::i;:::-;;;;;;;;2455:20:5::1;:18;:20::i;:::-;2349:958:4::0;;:::o;902:48::-;;;;;;;;;;;;;;;;;;;;;;:::o;392:25::-;;;;;;;;;;;;;:::o;500:20::-;;;;;;;;;;;;;:::o;3315:309::-;1069:5;;;;;;;;;;;1055:19;;:10;:19;;;1047:45;;;;;;;;;;;;:::i;:::-;;;;;;;;;2411:21:5::1;:19;:21::i;:::-;3396:18:4::2;3417:17;:15;:17::i;:::-;3396:38;;3466:1;3453:10;:14;3445:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;3518:10;;;;;;;;;;;3511:27;;;3539:5;;;;;;;;;;;3546:10;3511:46;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3600:5;;;;;;;;;;;3573:33;;;;;;;;;;;;3385:239;2455:20:5::1;:18;:20::i;:::-;3315:309:4:o:0;2214:127::-;2261:7;2295:10;;;;;;;;;;;2288:28;;;2325:4;2288:43;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2280:53;;2214:127;:::o;571:33::-;;;;:::o;462:31::-;;;;:::o;613:38::-;;;;;;;;;;;;;:::o;957:49::-;;;;;;;;;;;;;;;;;;;;;;:::o;2491:315:5:-;1789:1;2620:7;;:18;2616:88;;2662:30;;;;;;;;;;;;;;2616:88;1789:1;2781:7;:17;;;;2491:315::o;2023:183:4:-;2094:4;2132:23;;;;;;;;;;;2117:38;;:11;:38;;;:80;;;;2174:23;;;;;;;;;;;2159:38;;:11;:38;;;2117:80;2110:88;;2023:183;;;:::o;1847:168::-;1919:4;1995:10;1943:62;;1951:23;;;;;;;;;;;1943:40;;;1984:6;1943:48;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:62;;;1936:71;;1847:168;;;:::o;1675:164::-;1743:4;1819:10;1767:62;;1775:23;;;;;;;;;;;1767:40;;;1808:6;1767:48;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:62;;;1760:71;;1675:164;;;:::o;2814:212:5:-;1746:1;2997:7;:21;;;;2814:212::o;7:126:6:-;44:7;84:42;77:5;73:54;62:65;;7:126;;;:::o;139:96::-;176:7;205:24;223:5;205:24;:::i;:::-;194:35;;139:96;;;:::o;241:118::-;328:24;346:5;328:24;:::i;:::-;323:3;316:37;241:118;;:::o;365:222::-;458:4;496:2;485:9;481:18;473:26;;509:71;577:1;566:9;562:17;553:6;509:71;:::i;:::-;365:222;;;;:::o;593:77::-;630:7;659:5;648:16;;593:77;;;:::o;676:118::-;763:24;781:5;763:24;:::i;:::-;758:3;751:37;676:118;;:::o;800:222::-;893:4;931:2;920:9;916:18;908:26;;944:71;1012:1;1001:9;997:17;988:6;944:71;:::i;:::-;800:222;;;;:::o;1109:117::-;1218:1;1215;1208:12;1355:122;1428:24;1446:5;1428:24;:::i;:::-;1421:5;1418:35;1408:63;;1467:1;1464;1457:12;1408:63;1355:122;:::o;1483:139::-;1529:5;1567:6;1554:20;1545:29;;1583:33;1610:5;1583:33;:::i;:::-;1483:139;;;;:::o;1628:122::-;1701:24;1719:5;1701:24;:::i;:::-;1694:5;1691:35;1681:63;;1740:1;1737;1730:12;1681:63;1628:122;:::o;1756:139::-;1802:5;1840:6;1827:20;1818:29;;1856:33;1883:5;1856:33;:::i;:::-;1756:139;;;;:::o;1901:474::-;1969:6;1977;2026:2;2014:9;2005:7;2001:23;1997:32;1994:119;;;2032:79;;:::i;:::-;1994:119;2152:1;2177:53;2222:7;2213:6;2202:9;2198:22;2177:53;:::i;:::-;2167:63;;2123:117;2279:2;2305:53;2350:7;2341:6;2330:9;2326:22;2305:53;:::i;:::-;2295:63;;2250:118;1901:474;;;;;:::o;2381:329::-;2440:6;2489:2;2477:9;2468:7;2464:23;2460:32;2457:119;;;2495:79;;:::i;:::-;2457:119;2615:1;2640:53;2685:7;2676:6;2665:9;2661:22;2640:53;:::i;:::-;2630:63;;2586:117;2381:329;;;;:::o;2716:90::-;2750:7;2793:5;2786:13;2779:21;2768:32;;2716:90;;;:::o;2812:109::-;2893:21;2908:5;2893:21;:::i;:::-;2888:3;2881:34;2812:109;;:::o;2927:210::-;3014:4;3052:2;3041:9;3037:18;3029:26;;3065:65;3127:1;3116:9;3112:17;3103:6;3065:65;:::i;:::-;2927:210;;;;:::o;3143:180::-;3191:77;3188:1;3181:88;3288:4;3285:1;3278:15;3312:4;3309:1;3302:15;3329:191;3369:3;3388:20;3406:1;3388:20;:::i;:::-;3383:25;;3422:20;3440:1;3422:20;:::i;:::-;3417:25;;3465:1;3462;3458:9;3451:16;;3486:3;3483:1;3480:10;3477:36;;;3493:18;;:::i;:::-;3477:36;3329:191;;;;:::o;3526:169::-;3610:11;3644:6;3639:3;3632:19;3684:4;3679:3;3675:14;3660:29;;3526:169;;;;:::o;3701:172::-;3841:24;3837:1;3829:6;3825:14;3818:48;3701:172;:::o;3879:366::-;4021:3;4042:67;4106:2;4101:3;4042:67;:::i;:::-;4035:74;;4118:93;4207:3;4118:93;:::i;:::-;4236:2;4231:3;4227:12;4220:19;;3879:366;;;:::o;4251:419::-;4417:4;4455:2;4444:9;4440:18;4432:26;;4504:9;4498:4;4494:20;4490:1;4479:9;4475:17;4468:47;4532:131;4658:4;4532:131;:::i;:::-;4524:139;;4251:419;;;:::o;4676:179::-;4816:31;4812:1;4804:6;4800:14;4793:55;4676:179;:::o;4861:366::-;5003:3;5024:67;5088:2;5083:3;5024:67;:::i;:::-;5017:74;;5100:93;5189:3;5100:93;:::i;:::-;5218:2;5213:3;5209:12;5202:19;;4861:366;;;:::o;5233:419::-;5399:4;5437:2;5426:9;5422:18;5414:26;;5486:9;5480:4;5476:20;5472:1;5461:9;5457:17;5450:47;5514:131;5640:4;5514:131;:::i;:::-;5506:139;;5233:419;;;:::o;5658:169::-;5798:21;5794:1;5786:6;5782:14;5775:45;5658:169;:::o;5833:366::-;5975:3;5996:67;6060:2;6055:3;5996:67;:::i;:::-;5989:74;;6072:93;6161:3;6072:93;:::i;:::-;6190:2;6185:3;6181:12;6174:19;;5833:366;;;:::o;6205:419::-;6371:4;6409:2;6398:9;6394:18;6386:26;;6458:9;6452:4;6448:20;6444:1;6433:9;6429:17;6422:47;6486:131;6612:4;6486:131;:::i;:::-;6478:139;;6205:419;;;:::o;6630:171::-;6770:23;6766:1;6758:6;6754:14;6747:47;6630:171;:::o;6807:366::-;6949:3;6970:67;7034:2;7029:3;6970:67;:::i;:::-;6963:74;;7046:93;7135:3;7046:93;:::i;:::-;7164:2;7159:3;7155:12;7148:19;;6807:366;;;:::o;7179:419::-;7345:4;7383:2;7372:9;7368:18;7360:26;;7432:9;7426:4;7422:20;7418:1;7407:9;7403:17;7396:47;7460:131;7586:4;7460:131;:::i;:::-;7452:139;;7179:419;;;:::o;7604:172::-;7744:24;7740:1;7732:6;7728:14;7721:48;7604:172;:::o;7782:366::-;7924:3;7945:67;8009:2;8004:3;7945:67;:::i;:::-;7938:74;;8021:93;8110:3;8021:93;:::i;:::-;8139:2;8134:3;8130:12;8123:19;;7782:366;;;:::o;8154:419::-;8320:4;8358:2;8347:9;8343:18;8335:26;;8407:9;8401:4;8397:20;8393:1;8382:9;8378:17;8371:47;8435:131;8561:4;8435:131;:::i;:::-;8427:139;;8154:419;;;:::o;8579:332::-;8700:4;8738:2;8727:9;8723:18;8715:26;;8751:71;8819:1;8808:9;8804:17;8795:6;8751:71;:::i;:::-;8832:72;8900:2;8889:9;8885:18;8876:6;8832:72;:::i;:::-;8579:332;;;;;:::o;8917:116::-;8987:21;9002:5;8987:21;:::i;:::-;8980:5;8977:32;8967:60;;9023:1;9020;9013:12;8967:60;8917:116;:::o;9039:137::-;9093:5;9124:6;9118:13;9109:22;;9140:30;9164:5;9140:30;:::i;:::-;9039:137;;;;:::o;9182:345::-;9249:6;9298:2;9286:9;9277:7;9273:23;9269:32;9266:119;;;9304:79;;:::i;:::-;9266:119;9424:1;9449:61;9502:7;9493:6;9482:9;9478:22;9449:61;:::i;:::-;9439:71;;9395:125;9182:345;;;;:::o;9533:171::-;9673:23;9669:1;9661:6;9657:14;9650:47;9533:171;:::o;9710:366::-;9852:3;9873:67;9937:2;9932:3;9873:67;:::i;:::-;9866:74;;9949:93;10038:3;9949:93;:::i;:::-;10067:2;10062:3;10058:12;10051:19;;9710:366;;;:::o;10082:419::-;10248:4;10286:2;10275:9;10271:18;10263:26;;10335:9;10329:4;10325:20;10321:1;10310:9;10306:17;10299:47;10363:131;10489:4;10363:131;:::i;:::-;10355:139;;10082:419;;;:::o;10507:332::-;10628:4;10666:2;10655:9;10651:18;10643:26;;10679:71;10747:1;10736:9;10732:17;10723:6;10679:71;:::i;:::-;10760:72;10828:2;10817:9;10813:18;10804:6;10760:72;:::i;:::-;10507:332;;;;;:::o;10845:163::-;10985:15;10981:1;10973:6;10969:14;10962:39;10845:163;:::o;11014:366::-;11156:3;11177:67;11241:2;11236:3;11177:67;:::i;:::-;11170:74;;11253:93;11342:3;11253:93;:::i;:::-;11371:2;11366:3;11362:12;11355:19;;11014:366;;;:::o;11386:419::-;11552:4;11590:2;11579:9;11575:18;11567:26;;11639:9;11633:4;11629:20;11625:1;11614:9;11610:17;11603:47;11667:131;11793:4;11667:131;:::i;:::-;11659:139;;11386:419;;;:::o;11811:143::-;11868:5;11899:6;11893:13;11884:22;;11915:33;11942:5;11915:33;:::i;:::-;11811:143;;;;:::o;11960:351::-;12030:6;12079:2;12067:9;12058:7;12054:23;12050:32;12047:119;;;12085:79;;:::i;:::-;12047:119;12205:1;12230:64;12286:7;12277:6;12266:9;12262:22;12230:64;:::i;:::-;12220:74;;12176:128;11960:351;;;;:::o;12317:143::-;12374:5;12405:6;12399:13;12390:22;;12421:33;12448:5;12421:33;:::i;:::-;12317:143;;;;:::o;12466:351::-;12536:6;12585:2;12573:9;12564:7;12560:23;12556:32;12553:119;;;12591:79;;:::i;:::-;12553:119;12711:1;12736:64;12792:7;12783:6;12772:9;12768:22;12736:64;:::i;:::-;12726:74;;12682:128;12466:351;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC20/IERC20.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC721/IERC721.sol\";\r\nimport {ReentrancyGuard} from \"./imports/ReentrancyGuard.sol\";\r\nimport \"@openzeppelin/contracts/utils/math/SafeCast.sol\";\r\n\r\ncontract TokenClaimContract is ReentrancyGuard {\r\n    using SafeCast for uint256;\r\n\r\n    address public erc20Token;\r\n    uint256 public goldenPioneerNFT;\r\n    uint256 public silverPioneerNFT;\r\n    address public owner;\r\n    uint256 public contractDeploymentTime;\r\n    uint256 public sevenDays = 7 days;\r\n\r\n    address public goldenPioneerNFTAddress;\r\n    address public silverPioneerNFTAddress;\r\n                                             \r\n    event TokensClaimed(address indexed recipient, uint256 nftId, address nftAddress);\r\n    event RemainingTokensSentToOwner(address indexed owner);\r\n\r\n    mapping(uint256 => bool) public claimedFirstNFTs;\r\n    mapping(uint256 => bool) public claimedSecondNFTs;\r\n\r\n    modifier onlyOwner() {\r\n        require(msg.sender == owner, \"Not the owner\");\r\n        _;\r\n    }\r\n\r\n    modifier withinSevenDays() {\r\n        require(block.timestamp <= contractDeploymentTime + sevenDays, \"Claim period has ended\");\r\n        _;\r\n    }\r\n\r\n    constructor(address _erc20Token) {\r\n        erc20Token = _erc20Token;\r\n        owner = msg.sender;\r\n        goldenPioneerNFT = 2857 ether;\r\n        silverPioneerNFT = 586 ether;\r\n        contractDeploymentTime = block.timestamp;\r\n        goldenPioneerNFTAddress = 0xc5995Df3841D328e067680518779490dbD47311e;\r\n        silverPioneerNFTAddress = 0x228585D835745FDde074E9254631cE723112bfDB;\r\n    }\r\n\r\n    function validateNFTOwnership(uint256 _nftId) private view returns (bool) {\r\n        return(IERC721(silverPioneerNFTAddress).ownerOf(_nftId) == msg.sender );\r\n    }\r\n\r\n    function validateNFTGoldOwnership(uint256 _nftId) private view returns (bool) {\r\n        return(IERC721(goldenPioneerNFTAddress).ownerOf(_nftId) == msg.sender );\r\n    }\r\n\r\n    function validateNFTAddress(address _nftAddress) private view returns (bool){\r\n        return(_nftAddress == goldenPioneerNFTAddress || _nftAddress == silverPioneerNFTAddress);\r\n    }\r\n\r\n    function tokensRemaining() public view returns(uint256){\r\n        return((IERC20(erc20Token).balanceOf(address(this))));\r\n    }\r\n\r\n    function claimTokens(uint256 _nftId, address _nftAddress) external withinSevenDays nonReentrant {\r\n\r\n        require(tokensRemaining()>0,\"No more tokens to be released\");\r\n\r\n        require(validateNFTAddress(_nftAddress), \"Invalid NFT address\");\r\n\r\n        if (_nftAddress == goldenPioneerNFTAddress) {\r\n            require(validateNFTGoldOwnership(_nftId),\"You are not the Owner\");\r\n            require(!claimedFirstNFTs[_nftId], \"NFT ID already claimed\");\r\n            claimedFirstNFTs[_nftId] = true;\r\n            IERC20(erc20Token).transfer(msg.sender, goldenPioneerNFT);\r\n\r\n        } else {\r\n            require(validateNFTOwnership(_nftId),\"You are not the owner\");\r\n            require(!claimedSecondNFTs[_nftId], \"NFT ID already claimed\");\r\n            claimedSecondNFTs[_nftId] = true;\r\n            IERC20(erc20Token).transfer(msg.sender, silverPioneerNFT);\r\n       \r\n        }\r\n\r\n        emit TokensClaimed(msg.sender, _nftId, _nftAddress);\r\n    }\r\n\r\n    function sendRemainingTokensToOwner() external onlyOwner nonReentrant {\r\n        uint256 amountLeft = tokensRemaining();\r\n        require(amountLeft > 0,\"No more tokens to be released\");\r\n        IERC20(erc20Token).transfer(owner, amountLeft);\r\n        emit RemainingTokensSentToOwner(owner);\r\n        \r\n    }\r\n\r\n    \r\n}",
    "sourcePath": "C:\\Aventis-Intern\\ClaimApp\\back-end\\contracts\\TokenClaimContract.sol",
    "ast": {
      "absolutePath": "project:/contracts/TokenClaimContract.sol",
      "exportedSymbols": {
        "IERC165": [
          206
        ],
        "IERC20": [
          77
        ],
        "IERC721": [
          194
        ],
        "ReentrancyGuard": [
          2347
        ],
        "SafeCast": [
          1961
        ],
        "TokenClaimContract": [
          2278
        ]
      },
      "id": 2279,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1963,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:23:4"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/IERC20.sol",
          "id": 1964,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2279,
          "sourceUnit": 78,
          "src": "60:56:4",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
          "id": 1965,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2279,
          "sourceUnit": 195,
          "src": "118:58:4",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/contracts/imports/ReentrancyGuard.sol",
          "file": "./imports/ReentrancyGuard.sol",
          "id": 1967,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2279,
          "sourceUnit": 2348,
          "src": "178:62:4",
          "symbolAliases": [
            {
              "foreign": {
                "id": 1966,
                "name": "ReentrancyGuard",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 2347,
                "src": "186:15:4",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/math/SafeCast.sol",
          "file": "@openzeppelin/contracts/utils/math/SafeCast.sol",
          "id": 1968,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 2279,
          "sourceUnit": 1962,
          "src": "242:57:4",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 1969,
                "name": "ReentrancyGuard",
                "nameLocations": [
                  "334:15:4"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2347,
                "src": "334:15:4"
              },
              "id": 1970,
              "nodeType": "InheritanceSpecifier",
              "src": "334:15:4"
            }
          ],
          "canonicalName": "TokenClaimContract",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 2278,
          "linearizedBaseContracts": [
            2278,
            2347
          ],
          "name": "TokenClaimContract",
          "nameLocation": "312:18:4",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "global": false,
              "id": 1973,
              "libraryName": {
                "id": 1971,
                "name": "SafeCast",
                "nameLocations": [
                  "363:8:4"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1961,
                "src": "363:8:4"
              },
              "nodeType": "UsingForDirective",
              "src": "357:27:4",
              "typeName": {
                "id": 1972,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "376:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "constant": false,
              "functionSelector": "8a13eea7",
              "id": 1975,
              "mutability": "mutable",
              "name": "erc20Token",
              "nameLocation": "407:10:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "392:25:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 1974,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "392:7:4",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "393dd2d1",
              "id": 1977,
              "mutability": "mutable",
              "name": "goldenPioneerNFT",
              "nameLocation": "439:16:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "424:31:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 1976,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "424:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "d0723b9a",
              "id": 1979,
              "mutability": "mutable",
              "name": "silverPioneerNFT",
              "nameLocation": "477:16:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "462:31:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 1978,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "462:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "8da5cb5b",
              "id": 1981,
              "mutability": "mutable",
              "name": "owner",
              "nameLocation": "515:5:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "500:20:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 1980,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "500:7:4",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "5049485d",
              "id": 1983,
              "mutability": "mutable",
              "name": "contractDeploymentTime",
              "nameLocation": "542:22:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "527:37:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 1982,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "527:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "cfb65bed",
              "id": 1986,
              "mutability": "mutable",
              "name": "sevenDays",
              "nameLocation": "586:9:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "571:33:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 1984,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "571:7:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "37",
                "id": 1985,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "598:6:4",
                "subdenomination": "days",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_604800_by_1",
                  "typeString": "int_const 604800"
                },
                "value": "7"
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "ea7dde97",
              "id": 1988,
              "mutability": "mutable",
              "name": "goldenPioneerNFTAddress",
              "nameLocation": "628:23:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "613:38:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 1987,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "613:7:4",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "28ed7d27",
              "id": 1990,
              "mutability": "mutable",
              "name": "silverPioneerNFTAddress",
              "nameLocation": "673:23:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "658:38:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 1989,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "658:7:4",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "public"
            },
            {
              "anonymous": false,
              "eventSelector": "a96ccbd516e1bb3e6dad792a13a75e8afcf013d3ff446f07416945f5efd46062",
              "id": 1998,
              "name": "TokensClaimed",
              "nameLocation": "756:13:4",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 1997,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 1992,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "recipient",
                    "nameLocation": "786:9:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 1998,
                    "src": "770:25:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1991,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "770:7:4",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1994,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "nftId",
                    "nameLocation": "805:5:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 1998,
                    "src": "797:13:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 1993,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "797:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 1996,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "nftAddress",
                    "nameLocation": "820:10:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 1998,
                    "src": "812:18:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1995,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "812:7:4",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "769:62:4"
              },
              "src": "750:82:4"
            },
            {
              "anonymous": false,
              "eventSelector": "3d4c14465bbbcfde6f683d1e0d62f01fcddf8b5722555c0505ea85f005ebed8f",
              "id": 2002,
              "name": "RemainingTokensSentToOwner",
              "nameLocation": "844:26:4",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 2001,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2000,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "owner",
                    "nameLocation": "887:5:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 2002,
                    "src": "871:21:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 1999,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "871:7:4",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "870:23:4"
              },
              "src": "838:56:4"
            },
            {
              "constant": false,
              "functionSelector": "70bc9243",
              "id": 2006,
              "mutability": "mutable",
              "name": "claimedFirstNFTs",
              "nameLocation": "934:16:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "902:48:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                "typeString": "mapping(uint256 => bool)"
              },
              "typeName": {
                "id": 2005,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 2003,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "910:7:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "902:24:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                  "typeString": "mapping(uint256 => bool)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 2004,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "921:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "feb16477",
              "id": 2010,
              "mutability": "mutable",
              "name": "claimedSecondNFTs",
              "nameLocation": "989:17:4",
              "nodeType": "VariableDeclaration",
              "scope": 2278,
              "src": "957:49:4",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                "typeString": "mapping(uint256 => bool)"
              },
              "typeName": {
                "id": 2009,
                "keyName": "",
                "keyNameLocation": "-1:-1:-1",
                "keyType": {
                  "id": 2007,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "965:7:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "957:24:4",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                  "typeString": "mapping(uint256 => bool)"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 2008,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "976:4:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 2021,
                "nodeType": "Block",
                "src": "1036:76:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 2013,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1055:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2014,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1059:6:4",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1055:10:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 2015,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1981,
                            "src": "1069:5:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1055:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4e6f7420746865206f776e6572",
                          "id": 2017,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1076:15:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
                            "typeString": "literal_string \"Not the owner\""
                          },
                          "value": "Not the owner"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_72ec00def0a4f647f10f2a5c1742fab7d53364130edc365182f3ccef5864f2a5",
                            "typeString": "literal_string \"Not the owner\""
                          }
                        ],
                        "id": 2012,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1047:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 2018,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1047:45:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2019,
                    "nodeType": "ExpressionStatement",
                    "src": "1047:45:4"
                  },
                  {
                    "id": 2020,
                    "nodeType": "PlaceholderStatement",
                    "src": "1103:1:4"
                  }
                ]
              },
              "id": 2022,
              "name": "onlyOwner",
              "nameLocation": "1024:9:4",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 2011,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1033:2:4"
              },
              "src": "1015:97:4",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 2035,
                "nodeType": "Block",
                "src": "1147:119:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2030,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 2025,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967292,
                              "src": "1166:5:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 2026,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1172:9:4",
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "1166:15:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 2029,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 2027,
                              "name": "contractDeploymentTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1983,
                              "src": "1185:22:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 2028,
                              "name": "sevenDays",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1986,
                              "src": "1210:9:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1185:34:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1166:53:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "436c61696d20706572696f642068617320656e646564",
                          "id": 2031,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1221:24:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151",
                            "typeString": "literal_string \"Claim period has ended\""
                          },
                          "value": "Claim period has ended"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_72521483485197acd7eeac789b3cad9d282da10e18f71564b4f50969cc944151",
                            "typeString": "literal_string \"Claim period has ended\""
                          }
                        ],
                        "id": 2024,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1158:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 2032,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1158:88:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2033,
                    "nodeType": "ExpressionStatement",
                    "src": "1158:88:4"
                  },
                  {
                    "id": 2034,
                    "nodeType": "PlaceholderStatement",
                    "src": "1257:1:4"
                  }
                ]
              },
              "id": 2036,
              "name": "withinSevenDays",
              "nameLocation": "1129:15:4",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 2023,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1144:2:4"
              },
              "src": "1120:146:4",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 2071,
                "nodeType": "Block",
                "src": "1307:360:4",
                "statements": [
                  {
                    "expression": {
                      "id": 2043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2041,
                        "name": "erc20Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1975,
                        "src": "1318:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 2042,
                        "name": "_erc20Token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2038,
                        "src": "1331:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1318:24:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2044,
                    "nodeType": "ExpressionStatement",
                    "src": "1318:24:4"
                  },
                  {
                    "expression": {
                      "id": 2048,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2045,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1981,
                        "src": "1353:5:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 2046,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "1361:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 2047,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1365:6:4",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1361:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1353:18:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2049,
                    "nodeType": "ExpressionStatement",
                    "src": "1353:18:4"
                  },
                  {
                    "expression": {
                      "id": 2052,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2050,
                        "name": "goldenPioneerNFT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1977,
                        "src": "1382:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "32383537",
                        "id": 2051,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1401:10:4",
                        "subdenomination": "ether",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2857000000000000000000_by_1",
                          "typeString": "int_const 2857000000000000000000"
                        },
                        "value": "2857"
                      },
                      "src": "1382:29:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2053,
                    "nodeType": "ExpressionStatement",
                    "src": "1382:29:4"
                  },
                  {
                    "expression": {
                      "id": 2056,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2054,
                        "name": "silverPioneerNFT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1979,
                        "src": "1422:16:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "353836",
                        "id": 2055,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1441:9:4",
                        "subdenomination": "ether",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_586000000000000000000_by_1",
                          "typeString": "int_const 586000000000000000000"
                        },
                        "value": "586"
                      },
                      "src": "1422:28:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2057,
                    "nodeType": "ExpressionStatement",
                    "src": "1422:28:4"
                  },
                  {
                    "expression": {
                      "id": 2061,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2058,
                        "name": "contractDeploymentTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1983,
                        "src": "1461:22:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 2059,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967292,
                          "src": "1486:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 2060,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1492:9:4",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "1486:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1461:40:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 2062,
                    "nodeType": "ExpressionStatement",
                    "src": "1461:40:4"
                  },
                  {
                    "expression": {
                      "id": 2065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2063,
                        "name": "goldenPioneerNFTAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1988,
                        "src": "1512:23:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "307863353939354466333834314433323865303637363830353138373739343930646244343733313165",
                        "id": 2064,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1538:42:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "value": "0xc5995Df3841D328e067680518779490dbD47311e"
                      },
                      "src": "1512:68:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2066,
                    "nodeType": "ExpressionStatement",
                    "src": "1512:68:4"
                  },
                  {
                    "expression": {
                      "id": 2069,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 2067,
                        "name": "silverPioneerNFTAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1990,
                        "src": "1591:23:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "307832323835383544383335373435464464653037344539323534363331634537323331313262664442",
                        "id": 2068,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1617:42:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "value": "0x228585D835745FDde074E9254631cE723112bfDB"
                      },
                      "src": "1591:68:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 2070,
                    "nodeType": "ExpressionStatement",
                    "src": "1591:68:4"
                  }
                ]
              },
              "id": 2072,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2039,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2038,
                    "mutability": "mutable",
                    "name": "_erc20Token",
                    "nameLocation": "1294:11:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 2072,
                    "src": "1286:19:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2037,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1286:7:4",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1285:21:4"
              },
              "returnParameters": {
                "id": 2040,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1307:0:4"
              },
              "scope": 2278,
              "src": "1274:393:4",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2090,
                "nodeType": "Block",
                "src": "1749:90:4",
                "statements": [
                  {
                    "expression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2087,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 2083,
                                "name": "_nftId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2074,
                                "src": "1808:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 2080,
                                    "name": "silverPioneerNFTAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1990,
                                    "src": "1775:23:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 2079,
                                  "name": "IERC721",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 194,
                                  "src": "1767:7:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IERC721_$194_$",
                                    "typeString": "type(contract IERC721)"
                                  }
                                },
                                "id": 2081,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1767:32:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC721_$194",
                                  "typeString": "contract IERC721"
                                }
                              },
                              "id": 2082,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1800:7:4",
                              "memberName": "ownerOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 127,
                              "src": "1767:40:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                                "typeString": "function (uint256) view external returns (address)"
                              }
                            },
                            "id": 2084,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1767:48:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 2085,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1819:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2086,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1823:6:4",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1819:10:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1767:62:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 2088,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1766:65:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 2078,
                    "id": 2089,
                    "nodeType": "Return",
                    "src": "1760:71:4"
                  }
                ]
              },
              "id": 2091,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "validateNFTOwnership",
              "nameLocation": "1684:20:4",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2075,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2074,
                    "mutability": "mutable",
                    "name": "_nftId",
                    "nameLocation": "1713:6:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 2091,
                    "src": "1705:14:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2073,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1705:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1704:16:4"
              },
              "returnParameters": {
                "id": 2078,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2077,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 2091,
                    "src": "1743:4:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 2076,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1743:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1742:6:4"
              },
              "scope": 2278,
              "src": "1675:164:4",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 2109,
                "nodeType": "Block",
                "src": "1925:90:4",
                "statements": [
                  {
                    "expression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 2106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 2102,
                                "name": "_nftId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2093,
                                "src": "1984:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 2099,
                                    "name": "goldenPioneerNFTAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1988,
                                    "src": "1951:23:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 2098,
                                  "name": "IERC721",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 194,
                                  "src": "1943:7:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IERC721_$194_$",
                                    "typeString": "type(contract IERC721)"
                                  }
                                },
                                "id": 2100,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1943:32:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC721_$194",
                                  "typeString": "contract IERC721"
                                }
                              },
                              "id": 2101,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1976:7:4",
                              "memberName": "ownerOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 127,
                              "src": "1943:40:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                                "typeString": "function (uint256) view external returns (address)"
                              }
                            },
                            "id": 2103,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1943:48:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "expression": {
                              "id": 2104,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1995:3:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 2105,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1999:6:4",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1995:10:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1943:62:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 2107,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1942:65:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 2097,
                    "id": 2108,
                    "nodeType": "Return",
                    "src": "1936:71:4"
                  }
                ]
              },
              "id": 2110,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "validateNFTGoldOwnership",
              "nameLocation": "1856:24:4",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2094,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2093,
                    "mutability": "mutable",
                    "name": "_nftId",
                    "nameLocation": "1889:6:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 2110,
                    "src": "1881:14:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2092,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1881:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1880:16:4"
              },
              "returnParameters": {
                "id": 2097,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2096,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 2110,
                    "src": "1919:4:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 2095,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1919:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1918:6:4"
              },
              "scope": 2278,
              "src": "1847:168:4",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 2126,
                "nodeType": "Block",
                "src": "2099:107:4",
                "statements": [
                  {
                    "expression": {
                      "components": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 2123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 2119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 2117,
                              "name": "_nftAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2112,
                              "src": "2117:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 2118,
                              "name": "goldenPioneerNFTAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1988,
                              "src": "2132:23:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "2117:38:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 2122,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 2120,
                              "name": "_nftAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2112,
                              "src": "2159:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "id": 2121,
                              "name": "silverPioneerNFTAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1990,
                              "src": "2174:23:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "2159:38:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2117:80:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 2124,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2116:82:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 2116,
                    "id": 2125,
                    "nodeType": "Return",
                    "src": "2110:88:4"
                  }
                ]
              },
              "id": 2127,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "validateNFTAddress",
              "nameLocation": "2032:18:4",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2113,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2112,
                    "mutability": "mutable",
                    "name": "_nftAddress",
                    "nameLocation": "2059:11:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 2127,
                    "src": "2051:19:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2111,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2051:7:4",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2050:21:4"
              },
              "returnParameters": {
                "id": 2116,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2115,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 2127,
                    "src": "2094:4:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 2114,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2094:4:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2093:6:4"
              },
              "scope": 2278,
              "src": "2023:183:4",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 2144,
                "nodeType": "Block",
                "src": "2269:72:4",
                "statements": [
                  {
                    "expression": {
                      "components": [
                        {
                          "components": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 2138,
                                      "name": "this",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967268,
                                      "src": "2325:4:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_TokenClaimContract_$2278",
                                        "typeString": "contract TokenClaimContract"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_TokenClaimContract_$2278",
                                        "typeString": "contract TokenClaimContract"
                                      }
                                    ],
                                    "id": 2137,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2317:7:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2136,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2317:7:4",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2139,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2317:13:4",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 2133,
                                      "name": "erc20Token",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1975,
                                      "src": "2295:10:4",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 2132,
                                    "name": "IERC20",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 77,
                                    "src": "2288:6:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                      "typeString": "type(contract IERC20)"
                                    }
                                  },
                                  "id": 2134,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2288:18:4",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC20_$77",
                                    "typeString": "contract IERC20"
                                  }
                                },
                                "id": 2135,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2307:9:4",
                                "memberName": "balanceOf",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 34,
                                "src": "2288:28:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                  "typeString": "function (address) view external returns (uint256)"
                                }
                              },
                              "id": 2140,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2288:43:4",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 2141,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2287:45:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 2142,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2286:47:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 2131,
                    "id": 2143,
                    "nodeType": "Return",
                    "src": "2280:53:4"
                  }
                ]
              },
              "functionSelector": "c8b08125",
              "id": 2145,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tokensRemaining",
              "nameLocation": "2223:15:4",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2128,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2238:2:4"
              },
              "returnParameters": {
                "id": 2131,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2130,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 2145,
                    "src": "2261:7:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2129,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2261:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2260:9:4"
              },
              "scope": 2278,
              "src": "2214:127:4",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2244,
                "nodeType": "Block",
                "src": "2445:862:4",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2160,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 2157,
                              "name": "tokensRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2145,
                              "src": "2466:15:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 2158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2466:17:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 2159,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2484:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2466:19:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4e6f206d6f726520746f6b656e7320746f2062652072656c6561736564",
                          "id": 2161,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2486:31:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126",
                            "typeString": "literal_string \"No more tokens to be released\""
                          },
                          "value": "No more tokens to be released"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126",
                            "typeString": "literal_string \"No more tokens to be released\""
                          }
                        ],
                        "id": 2156,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2458:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 2162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2458:60:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2163,
                    "nodeType": "ExpressionStatement",
                    "src": "2458:60:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 2166,
                              "name": "_nftAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2149,
                              "src": "2558:11:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 2165,
                            "name": "validateNFTAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2127,
                            "src": "2539:18:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                              "typeString": "function (address) view returns (bool)"
                            }
                          },
                          "id": 2167,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2539:31:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "496e76616c6964204e46542061646472657373",
                          "id": 2168,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2572:21:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297",
                            "typeString": "literal_string \"Invalid NFT address\""
                          },
                          "value": "Invalid NFT address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_5e2e8bcb17c0653bfffe0aa1399200282587f4ebd447cf69b0fd25779a95b297",
                            "typeString": "literal_string \"Invalid NFT address\""
                          }
                        ],
                        "id": 2164,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2531:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 2169,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2531:63:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2170,
                    "nodeType": "ExpressionStatement",
                    "src": "2531:63:4"
                  },
                  {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "id": 2173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 2171,
                        "name": "_nftAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2149,
                        "src": "2611:11:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 2172,
                        "name": "goldenPioneerNFTAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1988,
                        "src": "2626:23:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "2611:38:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "id": 2235,
                      "nodeType": "Block",
                      "src": "2944:292:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 2207,
                                    "name": "_nftId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2147,
                                    "src": "2988:6:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 2206,
                                  "name": "validateNFTOwnership",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2091,
                                  "src": "2967:20:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (uint256) view returns (bool)"
                                  }
                                },
                                "id": 2208,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2967:28:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              {
                                "hexValue": "596f7520617265206e6f7420746865206f776e6572",
                                "id": 2209,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2996:23:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc",
                                  "typeString": "literal_string \"You are not the owner\""
                                },
                                "value": "You are not the owner"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_54087df48532e530810543784e49c855ce792e1f48abc8afd291ecd3c5a906fc",
                                  "typeString": "literal_string \"You are not the owner\""
                                }
                              ],
                              "id": 2205,
                              "name": "require",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "src": "2959:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (bool,string memory) pure"
                              }
                            },
                            "id": 2210,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2959:61:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 2211,
                          "nodeType": "ExpressionStatement",
                          "src": "2959:61:4"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 2216,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "3043:26:4",
                                "subExpression": {
                                  "baseExpression": {
                                    "id": 2213,
                                    "name": "claimedSecondNFTs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2010,
                                    "src": "3044:17:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                      "typeString": "mapping(uint256 => bool)"
                                    }
                                  },
                                  "id": 2215,
                                  "indexExpression": {
                                    "id": 2214,
                                    "name": "_nftId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2147,
                                    "src": "3062:6:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3044:25:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              {
                                "hexValue": "4e465420494420616c726561647920636c61696d6564",
                                "id": 2217,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3071:24:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798",
                                  "typeString": "literal_string \"NFT ID already claimed\""
                                },
                                "value": "NFT ID already claimed"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798",
                                  "typeString": "literal_string \"NFT ID already claimed\""
                                }
                              ],
                              "id": 2212,
                              "name": "require",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "src": "3035:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (bool,string memory) pure"
                              }
                            },
                            "id": 2218,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3035:61:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 2219,
                          "nodeType": "ExpressionStatement",
                          "src": "3035:61:4"
                        },
                        {
                          "expression": {
                            "id": 2224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 2220,
                                "name": "claimedSecondNFTs",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2010,
                                "src": "3111:17:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                  "typeString": "mapping(uint256 => bool)"
                                }
                              },
                              "id": 2222,
                              "indexExpression": {
                                "id": 2221,
                                "name": "_nftId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2147,
                                "src": "3129:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "3111:25:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "74727565",
                              "id": 2223,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3139:4:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "3111:32:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 2225,
                          "nodeType": "ExpressionStatement",
                          "src": "3111:32:4"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 2230,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "3186:3:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 2231,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3190:6:4",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "3186:10:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 2232,
                                "name": "silverPioneerNFT",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1979,
                                "src": "3198:16:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 2227,
                                    "name": "erc20Token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1975,
                                    "src": "3165:10:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 2226,
                                  "name": "IERC20",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 77,
                                  "src": "3158:6:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                    "typeString": "type(contract IERC20)"
                                  }
                                },
                                "id": 2228,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3158:18:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$77",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 2229,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3177:8:4",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 44,
                              "src": "3158:27:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 2233,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3158:57:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 2234,
                          "nodeType": "ExpressionStatement",
                          "src": "3158:57:4"
                        }
                      ]
                    },
                    "id": 2236,
                    "nodeType": "IfStatement",
                    "src": "2607:629:4",
                    "trueBody": {
                      "id": 2204,
                      "nodeType": "Block",
                      "src": "2651:287:4",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "id": 2176,
                                    "name": "_nftId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2147,
                                    "src": "2699:6:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 2175,
                                  "name": "validateNFTGoldOwnership",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2110,
                                  "src": "2674:24:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                                    "typeString": "function (uint256) view returns (bool)"
                                  }
                                },
                                "id": 2177,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2674:32:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              {
                                "hexValue": "596f7520617265206e6f7420746865204f776e6572",
                                "id": 2178,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2707:23:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6",
                                  "typeString": "literal_string \"You are not the Owner\""
                                },
                                "value": "You are not the Owner"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_6cb7e56be27ab78d2aa61344d2147c5cb476ba4d208026c23e09378ae4275fb6",
                                  "typeString": "literal_string \"You are not the Owner\""
                                }
                              ],
                              "id": 2174,
                              "name": "require",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "src": "2666:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (bool,string memory) pure"
                              }
                            },
                            "id": 2179,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2666:65:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 2180,
                          "nodeType": "ExpressionStatement",
                          "src": "2666:65:4"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 2185,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "!",
                                "prefix": true,
                                "src": "2754:25:4",
                                "subExpression": {
                                  "baseExpression": {
                                    "id": 2182,
                                    "name": "claimedFirstNFTs",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2006,
                                    "src": "2755:16:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                      "typeString": "mapping(uint256 => bool)"
                                    }
                                  },
                                  "id": 2184,
                                  "indexExpression": {
                                    "id": 2183,
                                    "name": "_nftId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2147,
                                    "src": "2772:6:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2755:24:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              {
                                "hexValue": "4e465420494420616c726561647920636c61696d6564",
                                "id": 2186,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2781:24:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798",
                                  "typeString": "literal_string \"NFT ID already claimed\""
                                },
                                "value": "NFT ID already claimed"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_1d79900ce88520567106022ea4fb69dc3321fc2e3c9037e2f6456af9431f5798",
                                  "typeString": "literal_string \"NFT ID already claimed\""
                                }
                              ],
                              "id": 2181,
                              "name": "require",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                4294967278,
                                4294967278
                              ],
                              "referencedDeclaration": 4294967278,
                              "src": "2746:7:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                "typeString": "function (bool,string memory) pure"
                              }
                            },
                            "id": 2187,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2746:60:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 2188,
                          "nodeType": "ExpressionStatement",
                          "src": "2746:60:4"
                        },
                        {
                          "expression": {
                            "id": 2193,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "baseExpression": {
                                "id": 2189,
                                "name": "claimedFirstNFTs",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2006,
                                "src": "2821:16:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                  "typeString": "mapping(uint256 => bool)"
                                }
                              },
                              "id": 2191,
                              "indexExpression": {
                                "id": 2190,
                                "name": "_nftId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2147,
                                "src": "2838:6:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "nodeType": "IndexAccess",
                              "src": "2821:24:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "hexValue": "74727565",
                              "id": 2192,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2848:4:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
                            },
                            "src": "2821:31:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 2194,
                          "nodeType": "ExpressionStatement",
                          "src": "2821:31:4"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 2199,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "2895:3:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 2200,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2899:6:4",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "2895:10:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 2201,
                                "name": "goldenPioneerNFT",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1977,
                                "src": "2907:16:4",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 2196,
                                    "name": "erc20Token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1975,
                                    "src": "2874:10:4",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 2195,
                                  "name": "IERC20",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 77,
                                  "src": "2867:6:4",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                                    "typeString": "type(contract IERC20)"
                                  }
                                },
                                "id": 2197,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2867:18:4",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC20_$77",
                                  "typeString": "contract IERC20"
                                }
                              },
                              "id": 2198,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2886:8:4",
                              "memberName": "transfer",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 44,
                              "src": "2867:27:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) external returns (bool)"
                              }
                            },
                            "id": 2202,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2867:57:4",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 2203,
                          "nodeType": "ExpressionStatement",
                          "src": "2867:57:4"
                        }
                      ]
                    }
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 2238,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3267:3:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2239,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3271:6:4",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3267:10:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 2240,
                          "name": "_nftId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2147,
                          "src": "3279:6:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 2241,
                          "name": "_nftAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2149,
                          "src": "3287:11:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 2237,
                        "name": "TokensClaimed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1998,
                        "src": "3253:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_address_$returns$__$",
                          "typeString": "function (address,uint256,address)"
                        }
                      },
                      "id": 2242,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3253:46:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2243,
                    "nodeType": "EmitStatement",
                    "src": "3248:51:4"
                  }
                ]
              },
              "functionSelector": "6e164e23",
              "id": 2245,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 2152,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 2151,
                    "name": "withinSevenDays",
                    "nameLocations": [
                      "2416:15:4"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2036,
                    "src": "2416:15:4"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2416:15:4"
                },
                {
                  "id": 2154,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 2153,
                    "name": "nonReentrant",
                    "nameLocations": [
                      "2432:12:4"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2311,
                    "src": "2432:12:4"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2432:12:4"
                }
              ],
              "name": "claimTokens",
              "nameLocation": "2358:11:4",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2150,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2147,
                    "mutability": "mutable",
                    "name": "_nftId",
                    "nameLocation": "2378:6:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 2245,
                    "src": "2370:14:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2146,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2370:7:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 2149,
                    "mutability": "mutable",
                    "name": "_nftAddress",
                    "nameLocation": "2394:11:4",
                    "nodeType": "VariableDeclaration",
                    "scope": 2245,
                    "src": "2386:19:4",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2148,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2386:7:4",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2369:37:4"
              },
              "returnParameters": {
                "id": 2155,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2445:0:4"
              },
              "scope": 2278,
              "src": "2349:958:4",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 2276,
                "nodeType": "Block",
                "src": "3385:239:4",
                "statements": [
                  {
                    "assignments": [
                      2253
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 2253,
                        "mutability": "mutable",
                        "name": "amountLeft",
                        "nameLocation": "3404:10:4",
                        "nodeType": "VariableDeclaration",
                        "scope": 2276,
                        "src": "3396:18:4",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2252,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3396:7:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 2256,
                    "initialValue": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 2254,
                        "name": "tokensRemaining",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2145,
                        "src": "3417:15:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2255,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3417:17:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3396:38:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 2260,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 2258,
                            "name": "amountLeft",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2253,
                            "src": "3453:10:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 2259,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3466:1:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3453:14:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4e6f206d6f726520746f6b656e7320746f2062652072656c6561736564",
                          "id": 2261,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3468:31:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126",
                            "typeString": "literal_string \"No more tokens to be released\""
                          },
                          "value": "No more tokens to be released"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_7df112db2688af13f384e24fa8bd4c3f0efb299c0513b1f171dcc73cf3abd126",
                            "typeString": "literal_string \"No more tokens to be released\""
                          }
                        ],
                        "id": 2257,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "3445:7:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 2262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3445:55:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2263,
                    "nodeType": "ExpressionStatement",
                    "src": "3445:55:4"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 2268,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1981,
                          "src": "3539:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 2269,
                          "name": "amountLeft",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2253,
                          "src": "3546:10:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 2265,
                              "name": "erc20Token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1975,
                              "src": "3518:10:4",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 2264,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 77,
                            "src": "3511:6:4",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_IERC20_$77_$",
                              "typeString": "type(contract IERC20)"
                            }
                          },
                          "id": 2266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3511:18:4",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC20_$77",
                            "typeString": "contract IERC20"
                          }
                        },
                        "id": 2267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3530:8:4",
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 44,
                        "src": "3511:27:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 2270,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3511:46:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 2271,
                    "nodeType": "ExpressionStatement",
                    "src": "3511:46:4"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 2273,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1981,
                          "src": "3600:5:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 2272,
                        "name": "RemainingTokensSentToOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2002,
                        "src": "3573:26:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                          "typeString": "function (address)"
                        }
                      },
                      "id": 2274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3573:33:4",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2275,
                    "nodeType": "EmitStatement",
                    "src": "3568:38:4"
                  }
                ]
              },
              "functionSelector": "a48d79f5",
              "id": 2277,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 2248,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 2247,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "3362:9:4"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2022,
                    "src": "3362:9:4"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3362:9:4"
                },
                {
                  "id": 2250,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 2249,
                    "name": "nonReentrant",
                    "nameLocations": [
                      "3372:12:4"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2311,
                    "src": "3372:12:4"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3372:12:4"
                }
              ],
              "name": "sendRemainingTokensToOwner",
              "nameLocation": "3324:26:4",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 2246,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3350:2:4"
              },
              "returnParameters": {
                "id": 2251,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3385:0:4"
              },
              "scope": 2278,
              "src": "3315:309:4",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 2279,
          "src": "303:3332:4",
          "usedErrors": [
            2292
          ],
          "usedEvents": [
            1998,
            2002
          ]
        }
      ],
      "src": "33:3602:4"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.21+commit.d9974bed.Emscripten.clang"
    },
    "networks": {
      "137": {
        "events": {},
        "links": {},
        "address": "0x8ed21b710d88dd1e4b643e1644ec8a725ba8ebdf",
        "transactionHash": "0x92d0d00943ae89d73cf919e353450fdae7054e82caade94a1031e5cff6294e53"
      }
    },
    "schemaVersion": "3.4.16",
    "updatedAt": "2023-12-04T01:42:10.612Z",
    "devdoc": {
      "errors": {
        "ReentrancyGuardReentrantCall()": [
          {
            "details": "Unauthorized reentrant call."
          }
        ]
      },
      "kind": "dev",
      "methods": {},
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
]