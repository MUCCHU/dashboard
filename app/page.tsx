"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import "@radix-ui/themes/styles.css";
import { ChartSpline } from "lucide-react";
import { useState } from "react";
import Details from "./components/details";
import { ExampleLineChart } from "./components/line_chart";
import Navbar from "./components/navbar";
import ExamplePieChart from "./components/pie_chart";
// import { PieChart, Pie, Cell } from "recharts";
import { Check, NotepadText, Trophy } from "lucide-react";
import Subanalysis from "./components/subanalysis";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export default function DashboardPage() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);
  return (
    <>
      <div className="flex-col md:flex">
        <Navbar />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-xl tracking-tight">Skill Test</h2>
          </div>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4 gap-4 flex flex-col">
              <Details
                rank={rank}
                setRank={setRank}
                percentile={percentile}
                setPercentile={setPercentile}
                score={score}
                setScore={setScore}
              />
              <Card className="">
                <CardHeader>
                  <CardTitle>Quick Statistics</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row p-3 pt-0">
                  <div className="sm:border-r p-3 flex gap-4">
                    <div className="rounded-full h-14 w-14 min-w-14 flex justify-center items-center bg-gray-100 p-2">
                      <Trophy />
                    </div>
                    <div>
                      <h2 className="font-black text-xl">{rank}</h2>
                      <p className="uppercase text-gray-400 text-sm">
                        your rank
                      </p>
                    </div>
                  </div>
                  <div className="sm:border-r p-3 flex gap-4">
                    <div className="rounded-full h-14 w-14 min-w-14 flex justify-center items-center bg-gray-100 p-2">
                      <NotepadText />
                    </div>
                    <div>
                      <h2 className="font-black text-xl">{percentile}%</h2>
                      <p className="uppercase text-gray-400 text-sm">
                        Percentile
                      </p>
                    </div>
                  </div>
                  <div className="p-3 flex gap-4">
                    <div className="rounded-full h-14 w-14 min-w-14 flex justify-center items-center bg-gray-100 p-2">
                      <Check />
                    </div>
                    <div>
                      <h2 className="font-black text-xl">{score} / 15</h2>
                      <p className="uppercase text-gray-400 text-sm">
                        correct answers
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Comparision Graph</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between gap-3">
                  <p className="">
                    Who scored {percentile}% which is {percentile>72? "higher":"lower"} than the average percentile
                    72% of all the Engineers who took the assessment
                  </p>
                  <div className="w-10 h-10 min-w-10 rounded-full flex items-center justify-center bg-gray-300">
                    <ChartSpline className="" />
                  </div>
                  </div>
                  <ExampleLineChart percentile={percentile} />
                </CardContent>
              </Card>
            </div>
            <div className="col-span-3 flex flex-col gap-4">
              <Subanalysis />
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle>Question Analysis</CardTitle>
                  <p>{score}/15</p>
                </CardHeader>
                <CardContent>
                  <div className="">
                    <span className="font-extrabold">
                      {" "}
                      You scored {score} questions correct out of 15.
                    </span>{" "}
                    However it still needs some improvements.
                  </div>
                  <div className="flex justify-center">
                  <ExamplePieChart score={score} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
