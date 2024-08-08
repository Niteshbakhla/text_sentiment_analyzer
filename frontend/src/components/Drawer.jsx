import React from "react";
import {
            Drawer,
            Button,
            Typography,
            IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export function DrawerPlacement({ name }) {

            const [openLeft, setOpenLeft] = React.useState(false);
            const openDrawerLeft = () => setOpenLeft(true);
            const closeDrawerLeft = () => setOpenLeft(false);
            const navigate = useNavigate()

            const logoutHandle = () => {
                        localStorage.removeItem("name")
                        toast.success("logged out")
                        setTimeout(() => {
                                    navigate("/")
                        }, 2000)
            }


            return (
                        <React.Fragment>
                                    <Toaster position="top-center" />
                                    <div className="flex flex-wrap gap-4 fixed left-2 top-4 ">
                                                <Button onClick={openDrawerLeft} className="rounded-full text-center text-2xl">{name.charAt(0)}</Button>
                                    </div>
                                    <Drawer
                                                placement="left"
                                                open={openLeft}
                                                onClose={closeDrawerLeft}
                                                className="p-4"
                                    >
                                                <div className="mb-6 flex items-center justify-between">
                                                            <Typography variant="h5" color="blue-gray">
                                                                        {name.charAt(0).toUpperCase() + name.slice(1)}
                                                            </Typography>
                                                            <IconButton
                                                                        variant="text"
                                                                        color="blue-gray"
                                                                        onClick={closeDrawerLeft}
                                                            >
                                                                        <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth={2}
                                                                                    stroke="currentColor"
                                                                                    className="h-5 w-5"
                                                                        >
                                                                                    <path
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                d="M6 18L18 6M6 6l12 12"
                                                                                    />
                                                                        </svg>
                                                            </IconButton>
                                                </div>

                                                <div className="flex gap-2">
                                                            <Link to="/history">
                                                                        <Button size="sm" variant="outlined">
                                                                                    History
                                                                        </Button>
                                                            </Link>


                                                            <Button onClick={logoutHandle} size="sm" variant="outlined">
                                                                        logout
                                                            </Button>

                                                </div>
                                    </Drawer>
                        </React.Fragment>
            );
}