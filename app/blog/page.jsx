export default async function Page() {
  const responsive = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responsive.json();
  console.log(data);
  return (
    <main>
      <h1>Blog </h1>
    </main>
  );
}

export const relative = 30;
