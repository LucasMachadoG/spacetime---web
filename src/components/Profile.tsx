import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default function Profile(){
  const name = cookies().get('name')
  const avatarUrl = cookies().get('avatarUrl')

  console.log(name?.value)
  console.log(avatarUrl?.value)

  return(
    <div className="flex items-center gap-3 text-left">
      <Image src={`${avatarUrl?.value}`} width={40} height={40} alt="" className="w-10 h-10 rounded-full" />

    <p className="text-sm leading-snug max-w-[140px]">
      {name?.value}
      <Link href='/api/auth/logout' className="block text-red-400 hover:text-red-300 transition-colors">Sair</Link>
    </p>
  </div>
  )
}