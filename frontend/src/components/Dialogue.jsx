import React, { useState } from "react";
import { Loader } from 'semantic-ui-react'
import {
            Button,
            Dialog,
            DialogHeader,
            DialogBody,
            DialogFooter,
} from "@material-tailwind/react";
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export function DialogDefault({ name, username }) {
            const navigate = useNavigate();
            const [open, setOpen] = React.useState(false);
            const [loader, setLoader] = useState(false)

            const handleOpen = () => {
                        setOpen(true)
                        open && handleSubmit()
            }

            const cancleOpen = () => {
                        setOpen(false)
            }

            const handleSubmit = async () => {
                        setLoader(true)

                        try {
                                    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/username`, { name, username });
                                    localStorage.setItem("name", data.data.name);
                                    localStorage.setItem("token", data.token)
                                    setLoader(false)
                                    setTimeout(() => {
                                                navigate("/write_text")
                                    }, 1000)

                        } catch (error) {
                                    if (error.response) {
                                                // Server responded with a status other than 2xx
                                                if (error.response.status === 404) {
                                                            toast.error(error.response.data.message); // "Enter your name"
                                                } else if (error.response.status === 500) {
                                                            toast.error(error.response.data.message); // "Internal Server error"
                                                } else {
                                                            toast.error("Unexpected error: ", error.response.data.message);
                                                }
                                    } else {
                                                // Network or other error
                                                console.error("Error: ", error.message);
                                    }
                        }
            }


            return (
                        <>
                                    <Button onClick={handleOpen} variant="gradient">
                                                Submit
                                    </Button>
                                    <Dialog open={open} handler={handleOpen}>
                                                <DialogHeader>Confirm your name: {name.charAt(0).toUpperCase() + name.slice(1)}</DialogHeader>
                                                <DialogBody>

                                                </DialogBody>
                                                <DialogFooter>

                                                            {/* <Button onClick={handleSubmit} >Submit</Button> */}
                                                            <Button
                                                                        variant="text"
                                                                        color="red"
                                                                        onClick={cancleOpen}
                                                                        className="mr-1"
                                                            >
                                                                        <span>Cancel</span>
                                                            </Button>
                                                            <Button variant="gradient" color={loader ? "white" : "green"} onClick={() => handleOpen()}>
                                                                        <span>{loader ? <Loader active inline /> : "Confirm"}</span>

                                                            </Button>
                                                </DialogFooter>
                                    </Dialog>
                        </>
            );
}