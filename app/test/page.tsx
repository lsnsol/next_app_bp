export default function Test() {
  fetch('http://localhost:3000/api/test').then((res) =>
    res.json().then(data => {
      console.log(data)
    })).catch((err) => console.error(err));
  return (
    <div className="flex align-middle flex-wrap content-center justify-center h-screen">
      This is Test route
    </div>
  )
}