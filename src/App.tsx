/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Experience from "./components/Experience";
import MenuPreview from "./components/MenuPreview";
import Reservation from "./components/Reservation";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative bg-ink">
      <Navbar />
      <Hero />
      <Story />
      <Experience />
      <MenuPreview />
      <Reservation />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
