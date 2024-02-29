import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const SignIn = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function signIn() {
        //sign in funciton here
    }

    return(
        <div>
            <NavBar />
            <Box className="boundingBox" sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Box className="signinBox" sx={{
                    width: "30%",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000000",
                    backgroundColor: "#CCCCCC"
                }}>
                    <Typography variant="h3">
                        Sign In
                    </Typography>
                    <form onSubmit={signIn}>
                        <InputLabel>
                            Username
                        </InputLabel>
                        <TextField
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <InputLabel>
                            Password
                        </InputLabel>
                        <TextField
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Box>
                            <Button
                                type="submit"
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        </Box>
                    </form>
                    <p>detecting input: {username} {password}</p>
                </Box>
            </Box>
        </div>
    )
}

export default SignIn;