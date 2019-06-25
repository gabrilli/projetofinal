/* This is for example purposes */
const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "paramlocador",
				"type": "string"
			},
			{
				"name": "paramDigidLocador",
				"type": "uint256"
			},
			{
				"name": "paramContaLocador",
				"type": "address"
			},
			{
				"name": "paramEnderecoImovel",
				"type": "string"
			},
			{
				"name": "paramValorLocacao",
				"type": "uint256"
			},
			{
				"name": "paramvalorGarantia",
				"type": "uint256"
			},
			{
				"name": "paramDataInicialLocacao",
				"type": "uint256"
			},
			{
				"name": "paramDataFinalLocacao",
				"type": "uint256"
			}
		],
		"name": "a_criarContrato",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numeroDoContrato",
				"type": "uint256"
			},
			{
				"name": "paramcontaLocatario",
				"type": "address"
			},
			{
				"name": "paramLocatario",
				"type": "string"
			},
			{
				"name": "paramdigidLocatario",
				"type": "uint256"
			}
		],
		"name": "b_registraLocatario",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numeroDoContrato",
				"type": "uint256"
			}
		],
		"name": "c_depositaGarantia",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contratoGarantido",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contratoPago",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numeroDoContrato",
				"type": "uint256"
			}
		],
		"name": "d_pagamento",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numeroDoContrato",
				"type": "uint256"
			}
		],
		"name": "e_estornaGarantia",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint256"
			}
		],
		"name": "locatarioRegistrado",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "",
				"type": "uint256"
			}
		],
		"name": "garantiaEstornada",
		"type": "event"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "numeroDoContrato",
				"type": "uint256"
			}
		],
		"name": "buscaContratoPorNumero",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "digidCadastrada",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "garantiaDepositada",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListaDeContratos",
		"outputs": [
			{
				"name": "locador",
				"type": "string"
			},
			{
				"name": "digidLocador",
				"type": "uint256"
			},
			{
				"name": "contaLocador",
				"type": "address"
			},
			{
				"name": "locatario",
				"type": "string"
			},
			{
				"name": "digidLocatario",
				"type": "uint256"
			},
			{
				"name": "contaLocatario",
				"type": "address"
			},
			{
				"name": "enderecoImovel",
				"type": "string"
			},
			{
				"name": "valorLocacao",
				"type": "uint256"
			},
			{
				"name": "valorGarantia",
				"type": "uint256"
			},
			{
				"name": "dataInicialLocacao",
				"type": "uint256"
			},
			{
				"name": "dataFinalLocacao",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "pagamentosEfetuados",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "percentualComissaoRegistrador",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

if (network === "4") {
    contractAddress = "0x8b18C0e91b8d029DB5f826b7801A29C399FBcB98"; 
} else {
    contractAddress = "0xbbf289d846208c16edc8474705c748aff07732db"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
