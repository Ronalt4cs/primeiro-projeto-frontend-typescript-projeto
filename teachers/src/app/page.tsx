import { LogoCubos } from "@/components/LogoCubos";
import { api } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

interface Teacher {
  id: number
  name: string
  avatar: string
  stack: string
  bio: string
}

export default async function Home() {

  const response = await api.get('/teachers')
  const teachers = response.data


  return (
    <div className="flex flex-col items-center justify-center gap-16 h-screen w-screen ">
      <LogoCubos />

      <div className="grid grid-cols-5 gap-6">
        {
          teachers.map((teacher: Teacher) => {
            return (
              <Link
                key={teacher.id}
                href={`/teachers/${teacher.id}`}
                className="flex flex-col justify-center items-center gap-1 h-64 w-52 bg-pink-600 rounded-lg"
              >
                <Image
                  src={teacher.avatar}
                  alt=""
                  width={150}
                  height={150}
                  className="border-4 border-white rounded-full hover:border-green-300"
                />
                <span>{teacher.name}</span>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
