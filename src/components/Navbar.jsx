import { AppBar, Box, Button, IconButton, Toolbar, Typography, InputBase } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const Navbar = () => {
    return (
        <>
            <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #f5f5f5", padding: "1em 2em" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ pr: 8 }}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: "bold", flexGrow: 1, color: "#100000" }}>
                                Hekto
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Button sx={{ textTransform: "none", color: "#eb34a1" }}>
                                Home
                            </Button>
                            <Button color="inherit" sx={{ textTransform: "none", color: "#100000" }}>
                                Pages
                            </Button>
                            <Button color="inherit" sx={{ textTransform: "none", color: "#100000" }}>
                                Products
                            </Button>
                            <Button color="inherit" sx={{ textTransform: "none", color: "#100000" }}>
                                Blog
                            </Button>
                            <Button color="inherit" sx={{ textTransform: "none", color: "#100000" }}>
                                Shop
                            </Button>
                            <Button color="inherit" sx={{ textTransform: "none", color: "#100000" }}>
                                Contact
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #f5f5f5", borderRadius: "5px", padding: "1px" }}>
                        <InputBase sx={{ pl: 1, width: "16em" }} />
                        <IconButton sx={{ backgroundColor: "#eb34a1", color: "#fff", borderRadius: "0 4px 4px 0" }}>
                            <SearchIcon sx={{ fontSize: 24 }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
