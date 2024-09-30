const Detail = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const d = await data.json();

  return (
    <div>
      name:{d.name}
      id:{d.id}
    </div>
  );
};

export default Detail;
