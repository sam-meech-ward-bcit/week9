"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DateChanger({ date }: { date: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, [date]);

  const yesterday = previousDay(new Date(date)).toISOString().split("T")[0];
  const tomorrow = nextDay(new Date(date)).toISOString().split("T")[0];

  if (loading) {
    // loading indicator
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex justify-between gap-x-2">
      <button
        onClick={() => {
          setLoading(true);
          const newURL = `?date=${yesterday}`;
          router.push(newURL);
        }}
      >
        previous
      </button>
      <button
        onClick={() => {
          setLoading(true);
          const newURL = `?date=${tomorrow}`;
          router.push(newURL);
        }}
      >
        Next
      </button>
    </div>
  );
}

function nextDay(date: Date) {
  const nextDate = new Date(date); // create a new date object
  nextDate.setDate(date.getDate() + 1); // increment the day by 1
  return nextDate; // return the new date
}

function previousDay(date: Date) {
  const previousDate = new Date(date); // create a new date object
  previousDate.setDate(date.getDate() - 1); // decrement the day by 1
  return previousDate; // return the new date
}
