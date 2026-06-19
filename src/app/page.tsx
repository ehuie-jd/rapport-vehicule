'use client'
import dynamic from 'next/dynamic'

// Dynamic import to avoid SSR issues with Firebase and browser APIs
const RapportApp = dynamic(() => import('@/components/RapportApp'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-amber-900 font-bold">Chargement...</p>
      </div>
    </div>
  ),
})

export default function Home() {
  return <RapportApp />
}
