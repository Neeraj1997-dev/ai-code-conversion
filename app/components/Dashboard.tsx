'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from 'next/dynamic'

const DynamicBarChart = dynamic(
  () => import('./DynamicBarChart'),
  { ssr: false }
)

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
]

export default function Dashboard() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-indigo-900 to-blue-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Conversion Dashboard</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54,231</div>
            <p className="text-xs text-blue-300">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lines of Code Processed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345,678</div>
            <p className="text-xs text-blue-300">+15% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <p className="text-xs text-blue-300">+0.3% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-blue-300">+201 since last month</p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-12 bg-white/10 backdrop-blur-lg border-none text-white">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Monthly Conversions</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[350px]">
            <DynamicBarChart data={data} />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

