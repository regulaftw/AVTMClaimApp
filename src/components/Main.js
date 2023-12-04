/**
 * @goals 
 * 
 * 1) Incoporate Keith's Front End
 * 2)Work on the Error Display and Success Display
 * 
 */

import React, { useEffect, useState } from "react";
import "./Main.css"
import ParticleSettings from "./Particles.js";

function FormPage({ claimTokens }) {

    //Set Inputs to be Maintained
    const [inputFields, setInputFields] = useState({
        nftAddress: "0xc5995Df3841D328e067680518779490dbD47311e",
        nftID: ""
    })
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [headerText, setHeaderText] = useState("Rules");

    //Fun Function for Easter Egg
    const activateEasterEgg = () => {
        setClickCount(clickCount + 1);
        if (clickCount === 3) {
            setClickCount(0);
            setHeaderText("By Keith and Eugene")
        }
    }

    //Function for Validating User Input
    const validateInputs = (inputValues) => {
        let errors = {};
        if (inputValues.nftAddress.length < 34 || inputValues.nftAddress.length > 62) {
            errors.nftAddress = "Wallet Address Length is Invalid"
        }
        if (isNaN(inputValues.nftID)) {
            errors.nftID = "ID of NFT is not Valid"
        }
        return errors;
    }

    //Function to check for Input Change
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
        console.log(inputFields)
    }

    //Function for Submit Handle
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateInputs(inputFields));
        console.log(inputFields);


        try {
            claimTokens(inputFields.nftID, inputFields.nftAddress);
            setSubmitting(true);
        } catch (e) {
            console.log(e);
            window.alert("Error has Occured, Refreshing...")
            window.location.reload(false);
        };


    }

    //Functions to Submit only when no error is present
    const finishSubmit = () => {
        setSubmitted(true);
        console.log(inputFields);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);


    return (

        <div className="main-container">

            <ParticleSettings />
            
            <h5 className="card-header" style={{ color: "white", fontSize: "1.5rem", textAlign: "center", alignSelf: "center" }}>
                {headerText}
            </h5>
            <div className="card-body">
                <div className="instruction-box">
                    <p className="card-text" style={{ textAlign: "center" }}>
                        <b><ul className="list" style={{ listStyle: "none", padding: "0", fontSize: "1.5rem" }}>
                            <li>1. Connect your MetaMask wallet to participate.</li><br></br>
                            <li>2. AVTM is on Polygon Network!</li><br></br>
                            <li>3. Must have ownership of a Pioneer NFT</li><br></br>
                            <li>4. Enter the Address and Unique ID of NFT</li><br></br>
                            <li>5. One NFT gives you one claim, no more no less...</li><br></br>
                            <li>6. Receive your <span onClick={activateEasterEgg}>AVTM!</span></li><br></br>
                            <li>   Selected Address : {inputFields.nftAddress}</li><br></br>
                            <li>   Selected ID : {inputFields.nftID}</li><br></br>
                            <li>   If Connection Error Try Reloading...</li>
                            <br></br><br></br>
                            <a
                                href="https://avtm.gitbook.io/whitepaper/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="readmorebtn"
                                style={
                                    {

                                        fontSize: "1.5rem"
                                    }
                                }

                            >
                                Read more
                            </a>
                        </ul></b>
                    </p>

                </div>

            </div>
            {Object.keys(errors).length === 0 && submitting ? (
                <div class="container">
                    <div
                        class="message-box">
                        <p>Transaction Complete</p>
                    </div>
                </div>
            ) :
                <form
                    onSubmit={
                        handleSubmit
                    }
                >
                    <div className="input-container">
                        <div className="group dropdown-position">

                            <select name="nftAddress" required className="dropdown" value={inputFields.nftAddress} onChange={handleChange}> 
                                <option value="0xc5995Df3841D328e067680518779490dbD47311e">Gold NFT</option>
                                <option value="0x228585D835745FDde074E9254631cE723112bfDB">Silver NFT</option>
                            </select>

                        </div>
                        <div className="group">
                            <input
                                name="nftID"
                                type="number"
                                value={inputFields.nftID}
                                placeholder=""
                                onChange={handleChange}

                                style={{
                                    border: "1px solid azure",
                                    borderRadius: ".2rem",
                                }}
                                required
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Enter NFT ID</label>
                        </div>

                        {errors.nftID ? (
                            <p className="error">
                                NFT ID is Invalid!
                            </p>
                        ) : null}
                    </div>

                    <button type="submit" className="submitbutton">Claim AVTM</button>
                </form>
            }



        </div>

    )

}

export default FormPage;