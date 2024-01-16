import Link from "next/link";
import { User } from "lucide-react";
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='grid grid-cols-2 min-h-screen'>
      <div className='flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10'>
        <div className='absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-[220px]' />
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes " />

        <Link href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="text-sm leading-snug max-w-[140px]"><span className="underline">Crie sua conta</span> e salve suas memórias!</p>
        </Link>

        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />
          <div className="max-w[420px] space-y-4">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">Sua cápsula do tempo</h1>
            <p className="mt-1 text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <Link href={""} className="inline-block rounded-full bg-green-500 px-5 py-5 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors">
            CADASTRAR LEMBRANÇA
          </Link>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da <Link href={""} className="underline hover:text-gray-100" target="_blank" rel="noreferrer">Rocketseat</Link>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <span className='text-center leading-relaxed'>
          Você ainda não registrou nenhuma lembrança, <br />comece a<span className='underline hover:text-gray-50 delay-100'> criar agora!</span>
        </span>
      </div>
    </div>
  )
}
