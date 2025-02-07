import Advertisement from "./components/Advertisement"
import DiscountedProducts from "./components/DiscountedProducts"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Products from "./components/Products"
import TopCategories from "./components/TopCategories"

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <Hero />

      {/* Products */}
      <Products />

      {/* Advertisement */}
      <Advertisement />

      {/* Discounted Products */}
      <DiscountedProducts />

      {/* Top Categories */}
      <TopCategories />

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}

export default App
