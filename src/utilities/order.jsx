export async function postMealOrder(data) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order: data }),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to insert Order");
  }

  return resData.message;
}
