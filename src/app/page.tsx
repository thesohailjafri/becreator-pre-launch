import { WaitlistForm } from '@/components/waitlist-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BeCreator - Join the Waitlist',
  description: 'Get early access to BeCreator - The ultimate creator platform',
  openGraph: {
    title: 'BeCreator - Join the Waitlist',
    description:
      'Get early access to BeCreator - The ultimate creator platform',
    images: ['/logo.png'],
  },
  twitter: {
    title: 'BeCreator - Join the Waitlist',
    description:
      'Get early access to BeCreator - The ultimate creator platform',
    images: ['/logo.png'],
  },
  keywords: [
    'BeCreator',
    'Waitlist',
    'Creator Platform',
    'Creator Tools',
    'Creator Economy',
    'Creator Tools',
  ],
  authors: [{ name: 'Sohail', url: 'https://thesohailjafri.me' }],
  creator: 'Sohail',
  publisher: 'Sohail',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://becreator.app',
  },
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0e1a] font-sans antialiased overflow-x-hidden">
      <Content />
    </div>
  )
}

function Content() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute -left-[150px] -top-[100px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,#4c6ef5,#3b5bdb)] opacity-55 blur-[80px]" />
        <div className="absolute -right-[100px] top-[100px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,#7950f2,#6741d9)] opacity-55 blur-[80px]" />
        <div className="absolute bottom-0 left-[30%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,#1971c2,#1864ab)] opacity-55 blur-[80px]" />
        <div className="absolute bottom-[100px] right-[20%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,#2f9e44,#2b8a3e)] opacity-55 blur-[80px]" />
      </div>
      {/* Centered container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
        <WaitlistForm />
      </div>
    </>
  )
}
