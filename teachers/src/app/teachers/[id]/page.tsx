'use client'
import { LogoCubos } from '@/components/LogoCubos';
import { api } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import btnBack from "../../../assets/arrow-back.png"

interface Teacher {
  id: number
  name: string
  avatar: string
  stack: string
  bio: string
}

export default function Teacherdetail() {
  const pathName = usePathname()
  const id = pathName.slice(-1)
  const [teacher, setTeacher] = useState<Teacher | null>(null)

  async function getTeacherDetail() {
    const { data } = await api.get(`/teachers/${id}`)
    setTeacher(data)
    return data
  }

  useEffect(() => {
    getTeacherDetail()

  }, [])

  if (!teacher) {
    return (
      <h1>loading</h1>
    )

  } else {

    return (
      <div className="flex flex-col items-center h-screen w-screen">
        <div className="flex justify-center relative w-full mt-8">
          <Link href="/">
            <Image src={btnBack} alt="botão voltar" width={48} height={48} className="absolute left-12" />
          </Link>
          <LogoCubos />
        </div>
        <div
          key={teacher.id}
          className="flex flex-col items-center h-[562px] w-[467px] mt-24 bg-pink-600 rounded-lg"
        >
          <Image
            src={teacher.avatar}
            alt=""
            width={177}
            height={177}
            className="border-4 my-6 border-white rounded-full"
          />
          <span className="text-3xl font-semibold">{teacher.name}</span>
          <span className="text-lg font-light leading-tight mt-3 mb-12">{teacher.stack}</span>

          <div className="w-[336px] flex flex-col border-t border-t-white">
            <span className="underline text-xl self-center pb-6 pt-4">Bio</span>
            <p className="text-sm leading-4">{teacher.bio}</p>
          </div>
        </div>
      </div>
    )
  }
}