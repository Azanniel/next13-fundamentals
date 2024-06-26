export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/azanniel')
  const user = await response.json()

  return (
    <div>
      <h1>Hello world</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
