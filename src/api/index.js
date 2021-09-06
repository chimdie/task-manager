const apiUrl = "https://jsonplaceholder.typicode.com/todos/";

export async function getTodos() {
  const res = await fetch(`${apiUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  return res.json();
}

export const fetchTodos = async () => {
  const _fetch = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", _fetch);
  // const resData = await res.json();
  // setData(resData);
  // console.log(resData)
  return res.json();
};
