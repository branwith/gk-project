"use client"
import Nav from '@/components/ui/Nav'
import React, { useState, useEffect } from 'react'
import Hero_bg from "@/assets/images/hero/bg3.jpg"
import { supabase } from '@/utils/supabase'

const Page = () => {

  const [datas, setDatas] = useState<any | null>(null)

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('job_listings')
        .select('job_title, company_name')

      if (error) throw error
      setDatas(data)
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {/* <Nav/> */}
      <form action="" method="get">
        <input type="text" name='text' />
        <input type="submit" value="text" />
      </form>
      <div>
        {datas && datas.map((item: any, index: number) => (
          <div key={index}>
            <h3>{item.job_title}</h3>
            <p>{item.company_name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
