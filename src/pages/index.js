import React from "react"

import Head from "next/head"

import dynamic from "next/dynamic"

const AlgoConnect = dynamic(() => import("../components/AlgoConnect"), {ssr: false})

import ActiveWallet from "../components/ActiveWallet"

import Socials from "../components/Socials"

import { Grid, Card, Modal, Typography, Button } from "@mui/material"

export default class Index extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            activeAddress: null
        };
        
    }

   

    render() {

        console.log(this.state.activeAddress)
        return (
            <div>
                <Head>
                <title>Dark Coin</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />

                
                </Head>

                <img src="./Polygon.svg" style={{display: "flex", margin: "auto", width: "80%"}}/>


                <Typography align="center" variant="h1" style={{color: "#FFFFFF", fontFamily: "Jacques", padding: 30}}>
                    Dark Coin
                </Typography>
                <img src="./DarkCoinLogo.svg" style={{display: "flex", margin: "auto", padding: 30, width: "100%", maxWidth: 350}}/>
                
                <Typography align="center" variant="h2" style={{color: "#FFFFFF", fontFamily: "JacquesShadow", padding: 30}}>
                To the dark side of the moon
                
                </Typography>

                <div style={{border: "3px solid white", borderRadius: 15, margin: 30}}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={12} md={6}>
                            {this.state.activeAddress ?
                            <Typography align="center" variant="h3" style={{color: "#FFFFFF", fontFamily: "JacquesShadow", padding: 30}}>
                            Welcome
                            </Typography>
                            :
                            <Typography align="center" variant="h3" style={{color: "#FFFFFF", fontFamily: "Jacques", padding: 30}}>
                            Connect with an Algorand Wallet
                            </Typography>
                            }
                        
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <AlgoConnect activeAddress={this.state.activeAddress} setActiveAddress={(account) => this.setState({activeAddress: account})} />
                        </Grid>

                    </Grid>

                    {this.state.activeAddress ? 
                        <ActiveWallet activeAddress={this.state.activeAddress} />
                        :
                        null
                    }

                </div>

                <Socials />

                



                  
            </div>
        )
    }
    
}