export const revalidate = 10000;

import dayjs from "dayjs";

const Detail = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const d = await data.json();

  const time = dayjs().format("hh:mm:ss");

  return (
    <div>
      name:{d.name}
      id:{d.id}
      this time is : {time}
    </div>
  );
};

export default Detail;
