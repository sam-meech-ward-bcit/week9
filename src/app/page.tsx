import Link from "next/link";
import DateChanger from "./date-changer";

export default async function Home({
  searchParams,
}: {
  searchParams: { date: string };
}) {
  const date = searchParams.date ? new Date(searchParams.date) : new Date();

  await new Promise((resolve) => setTimeout(resolve, 5000));
  let query = `
  select * from some_table
  where date = ${date}
  `;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <p className="text-center">
          {date.toLocaleDateString("en-US", { weekday: "long" })}
        </p>
        {/* next and previous day buttons */}
        <DateChanger date={searchParams.date} />
        <pre>{query}</pre>
      </div>
    </div>
  );
}
