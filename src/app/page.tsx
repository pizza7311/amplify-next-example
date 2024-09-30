import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  const names = data.data;
  return (
    <div>
      <title>this is main</title>
      <ul>
        {names.map(({ name, id }) => {
          return (
            <li key={id}>
              <Link href={`/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
