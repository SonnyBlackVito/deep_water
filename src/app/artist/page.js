// import HeroSection from "@/components/sections/art/HeroSection";
// import AboutSection from "@/components/sections/art/AboutSection";
// import CollectionSection from "@/components/sections/art/CollectionSection";
// import CurtainReveal from "@/components/sections/art/CurtainReveal";
// import AboutCollectionSection from "@/components/sections/art/AboutCollectionSection";
import AboutCollectionSection from "@/sections/art/AboutCollectionSection";
import AboutSection from "@/sections/art/AboutSection";
import CollectionSection from "@/sections/art/CollectionSection copy";
import HeroSection from "@/sections/art/HeroSection";
import { Box } from "@chakra-ui/react";

export default function ArtistPage() {
  return (
    <>
      {/* <CurtainReveal /> */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}>
        <HeroSection />
      </motion.div> */}
      <Box as="main">
        <HeroSection />
        <AboutSection />
        <AboutCollectionSection />
        <CollectionSection />
      </Box>
    </>
  );
}
