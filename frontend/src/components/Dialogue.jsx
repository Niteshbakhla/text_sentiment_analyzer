import React from "react";
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

export function DialogDefault({ name }) {
            const navigate = useNavigate();
            const [open, setOpen] = React.useState(false);

            const handleOpen = () => {
                        setOpen(!open);
                        open && handleSubmit()
            }

            const handleSubmit = async () => {

                        try {
                                    const { data } = await axios.post("http://localhost:3000/username", { name });
                                    localStorage.setItem("name", data.data.name);
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
                                                <DialogHeader>Its a simple dialog.</DialogHeader>
                                                <DialogBody>
                                                            The key to more success is to have a lot of pillows. Put it this way,
                                                            it took me twenty five years to get these plants, twenty five years of
                                                            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                                                            getting started. I&apos;m up to something. Fan luv.
                                                </DialogBody>
                                                <DialogFooter>

                                                            {/* <Button onClick={handleSubmit} >Submit</Button> */}
                                                            <Button
                                                                        variant="text"
                                                                        color="red"
                                                                        onClick={handleOpen}
                                                                        className="mr-1"
                                                            >
                                                                        <span>Cancel</span>
                                                            </Button>
                                                            <Button variant="gradient" color="green" onClick={handleOpen}>
                                                                        <span>Confirm</span>
                                                            </Button>
                                                </DialogFooter>
                                    </Dialog>
                        </>
            );
}