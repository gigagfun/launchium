import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSolution from '@/components/ProblemSolution'
import KeyMetrics from '@/components/KeyMetrics'
import TechStack from '@/components/TechStack'
import TokenEconomics from '@/components/TokenEconomics'
import Security from '@/components/Security'
import Roadmap from '@/components/Roadmap'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* White background for light mode, black for dark mode */}
      <div className="bg-white dark:bg-black">
        <Navbar />
        <HeroSection />
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white dark:bg-black -mt-32">
        <div className="pt-32">
          <ProblemSolution />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white dark:bg-black -mt-32">
        <div className="pt-32">
          <KeyMetrics />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white dark:bg-black -mt-32">
        <div className="pt-32">
          <TechStack />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white dark:bg-black -mt-32">
        <div className="pt-32">
          <TokenEconomics />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white dark:bg-black -mt-32">
        <div className="pt-32">
          <Security />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white dark:bg-black -mt-32">
        <div className="pt-32">
          <Roadmap />
        </div>
      </div>
      
      <div className="bg-white dark:bg-black">
        <Footer />
      </div>
    </main>
  )
} 