export async function GET() {
  try {
    const response = await fetch("https://dummyjson.com/users"); // Replace with your real backend
    const data = await response.json();

    return new Response(JSON.stringify(data.users), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}
