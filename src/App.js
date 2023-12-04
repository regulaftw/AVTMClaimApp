//Next Ineration has to Have Refresh Instructions when Loading

import React, { Component } from "react";

import { TokenClaimContract } from './abi/abi.js';

import Web3 from "web3";

import ParticleSettings from "./components/Particles.js";
import CircularProgress from '@mui/material/CircularProgress';

import Navbar from "./components/Navbar.js";
import FormPage from "./components/Main.js";
import "./components/Main.css"


class App extends Component {
    //Awaiting Web3 Components from Loading
    async componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    async loadBlockchainData() {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();

        this.setState({ account: accounts[0] });
        const networkId = await web3.eth.net.getId();

        const tokenClaimContractData = TokenClaimContract[0].networks[networkId];


        if (tokenClaimContractData) {
            const tokenClaimContract = new web3.eth.Contract(
                TokenClaimContract[0].abi,
                tokenClaimContractData.address
            );
            this.setState({ tokenClaimContract });
        } else {
            window.alert("Contract not Deployed on this Network. Please Switch to a Compatible Network");
        }

        this.setState({ loading: false });


    }
    //Get Wallet Information
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert("No virtual wallet detected. You should install Metamask!");
        }
    }

    //Function to Interact with Web3 Interface
    claimTokens = (id, address) => {

        this.setState({ loading: true });
        this.state.tokenClaimContract.methods.claimTokens(id, address)
            .send({ from: this.state.account })
            .on("transactionHash", (hash) => {
                this.setState({ loading: false });
            }).catch((e) => {
                console.log(e);
                window.location.reload(false);
            });

    };

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            tokenClaimContract: '',
            userNFTaddress: '',
            userNFTid: '',
            loading: true
        }
        this.claimTokens = this.claimTokens.bind(this);
    }

    render() {
        let content;

        this.state.loading
            ? (content = (
                <div className="main-container">

                    <ParticleSettings />

                    <h5 className="card-header" style={{ color: "white", fontSize: "1.5rem", textAlign: "center", alignSelf: "center" }}>
                        Rules
                    </h5>
                    <div className="card-body">
                        <div className="instruction-box">
                            <p className="card-text" style={{ textAlign: "center" }}>
                                <ul className="list" style={{ listStyle: "none", padding: "0", }}>
                                    <li>1. Connect your MetaMask wallet to participate.</li>
                                    <li>2. AVTM is on Polygon Network!</li>
                                    <li>3. Must have ownership of a Pioneer NFT</li>
                                    <li>4. Enter the Address and Unique ID of NFT</li>
                                    <li>5. Enjoy the Stars.</li>
                                    <li>6. Refreshing the page goes a long way....</li>
                                    <br></br><br></br>
                                    <div>
                                        <CircularProgress size={100} thickness={5} color="secondary" />


                                    </div>
                                    <br></br><br></br><br></br>
                                    <a
                                        href="https://avtm.gitbook.io/whitepaper/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="readmorebtn"

                                    >
                                        Read more
                                    </a>
                                </ul>
                            </p>

                        </div>
                        
                    </div>
                </div>
            ))
            : (content = (
                <FormPage
                    claimTokens={this.claimTokens}
                />
            ));

        return (
            <div className="App" style={{ position: "relative" }}>
                <div style={{ position: "absolute" }}>
                    <ParticleSettings />
                </div>
                <Navbar account={this.state.account} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main
                            role="main"
                            className="col-lg-5 ml-auto mr-auto"
                            style={{ maxWidth: "100%", minHeight: "100vm" }}
                        >
                            <div>{content}</div>
                        </main>

                    </div>
                </div>
            </div>
        )
    }

}

/**
 * 
 * NEXT DRAFT MOVE TO SINGLE PAGE DONNIT IMPORT NONSESE ALREADY
 */


/** 
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <main role="main" className="col-lg-12 d-flex justify-content-center">

                        <div id="content">
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();

                                    let userNFTaddress = this.userNFTaddress;
                                    let userNFTiD = this.userNFTid;

                                    //STOPEED HERE LAST FRIDAY NEED TO ADD FUNCTION TO MAKE THIS.CLAIMTOKENS FUNCTION

                                    this.props
                                }}
                            >
                                <input
                                     ref={(input)=>{
                                        this.userNFTaddress = input;
                                    }
                                    }

                                    id="getuserNFTaddress"
                                    type="address"
                                    placeholder="00x00"

                                    style={{
                                        border: "1px solid azure",
                                        borderRadius: ".2rem",
                                    }}
                                    required
                                ></input>

                                <input 
                                    ref={(input)=>{
                                        this.userNFTid = input;
                                    }
                                    }
                                    id="getuserNFTiD"
                                    type="uint256"
                                        placeholder="ID?"

                                        style={{
                                            border: "1px solid azure",
                                            borderRadius: ".2rem",
                                        }}
                                        required
                                    ></input>

                                <button type="submit">Claim AVTM</button>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        )
    }


}
*/

export default App; 