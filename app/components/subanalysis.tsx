import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

function Subanalysis() {
  return (
    <Card>
                <CardHeader>
                  <CardTitle className="font-black text-xl">
                    Syllabus Wise Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700 mb-2 font-medium">
                    HTML Tools, Forms, History
                  </div>
                  <div className="flex gap-4 mb-5">
                    <div className="flex-grow flex items-center">
                      <Progress value={80} />
                    </div>
                    <div className="w-5 text-right font-extrabold text-blue-600">
                      80%
                    </div>
                  </div>
                  <div className="text-gray-700 mb-2 font-medium">
                    Tags & References in HTML
                  </div>
                  <div className="flex gap-4 mb-5">
                    <div className="flex-grow flex items-center">
                      <Progress value={60} />
                    </div>
                    <div className="w-5 text-right text-yellow-600 font-extrabold">
                      60%
                    </div>
                  </div>
                  <div className="text-gray-700 mb-2 font-medium">
                    Tables & References in HTML
                  </div>
                  <div className="flex gap-4 mb-5">
                    <div className="flex-grow flex items-center">
                      <Progress value={24} />
                    </div>
                    <div className="w-5 text-right font-extrabold text-red-600">
                      24%
                    </div>
                  </div>
                  <div className="text-gray-700 mb-2 font-medium">
                    Tables & CSS Basics
                  </div>
                  <div className="flex gap-4 mb-5">
                    <div className="flex-grow flex items-center">
                      <Progress value={96} />
                    </div>
                    <div className="w-5 text-right font-extrabold text-green-500">
                      96%
                    </div>
                  </div>
                </CardContent>
              </Card>
  )
}

export default Subanalysis