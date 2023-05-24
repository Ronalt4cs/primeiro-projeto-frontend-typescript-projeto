import { LogoCubos } from "@/components/LogoCubos"
import Link from "next/link"

export default function Login() {
  return (
    <div className="h-screen w-screen rounded-sm flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[494px] h-[475px] bg-zinc-700 ">
        <LogoCubos />
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="E-mail" className="h-12 w-72 pl-4 mt-11 rounded-sm bg-zinc-800" />
          <input type="text" placeholder="Password" className="h-12 w-72 pl-4 rounded-sm bg-zinc-800" />
          <span className="text-sm font-light leading-tight">Não tem cadastro? clique aqui</span>

          <Link href="/" className="flex items-center justify-center h-12 w-72 mt-11 bg-pink-600">Login</Link>
        </form>
      </div>
    </div>
  )
}