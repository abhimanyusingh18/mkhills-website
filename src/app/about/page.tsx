import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 pt-12 md:pt-24 bg-background">
                <About />
            </div>
            <Footer />
        </main>
    );
}
