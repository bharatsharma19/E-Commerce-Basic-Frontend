import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";

const slides = [
    { discount: "50% off" },
    { discount: "30% off" },
    { discount: "20% off" }
];

const HeroSlider = () => {
    return (
        <Box sx={{ width: "98.4vw", height: "764px", overflow: "hidden", backgroundColor: "#F2F0FF", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            {/* Hanging Lamp Image */}
            <Box sx={{ position: "absolute", top: "-50px", left: "100px", width: "150px", height: "200px", backgroundSize: "cover", backgroundImage: "url('/path-to-lamp-image.png')" }}></Box>
            <Swiper navigation modules={[Navigation]} className="mySwiper">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ display: "flex", flexDirection: "row", height: "100%", alignItems: "center", justifyContent: "space-between", padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
                            {/* Left Side: Text */}
                            <Box sx={{ flex: 0.5, padding: 4, textAlign: "left" }}>
                                <Typography sx={{ color: "#FB2E86", marginBottom: 2, fontSize: "16px", fontWeight: "bold" }}>Best Furniture For Your Castle...</Typography>
                                <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, fontSize: "53px", lineHeight: "82px" }}>New Furniture Collection Trends in 2020</Typography>
                                <Typography sx={{ color: "#8A8FB9", marginBottom: 3, fontSize: "16px", maxWidth: "559px", lineHeight: "28px", fontWeight: "700" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.</Typography>
                                <Button sx={{ backgroundColor: "#FB2E86", color: "#fff", padding: "12px 24px", fontSize: "17px", borderRadius: "2px", textTransform: "none", width: "163px", height: "50px" }}>Shop Now</Button>
                            </Box>
                            {/* Right Side: Placeholder for Image */}
                            <Box sx={{ flex: 0.5, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ width: "629px", height: "629px", borderRadius: "20px" }}></Box>
                                <Box sx={{ position: "absolute", top: "216px", right: "50px", backgroundColor: "#00C1FE", color: "#fff", padding: "10px", borderRadius: "50%", fontSize: "35px", fontWeight: "bold", width: "136.56px", height: "138.49px", textAlign: "center", lineHeight: "44px" }}>
                                    {slide.discount}
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default HeroSlider;
