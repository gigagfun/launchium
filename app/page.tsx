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
        
        {/* Presale CTA Section */}
        <div className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-30 animate-pulse"></div>
              <a 
                href="/presale"
                className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-primary to-accent rounded-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Join LNCHM Presale - Live Now!
              </a>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
              Don't miss out on the exclusive presale opportunity
            </p>
          </div>
        </div>
        
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
        <div className="pt-32" id="security">
          <Security />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white dark:bg-black -mt-32">
        <div className="pt-32" id="roadmap">
          <Roadmap />
        </div>
      </div>
      
      <div className="bg-white dark:bg-black">
        <Footer />
      </div>
    </main>
  )
} 