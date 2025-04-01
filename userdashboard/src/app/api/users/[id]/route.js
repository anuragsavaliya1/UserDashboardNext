// /app/api/users/[id]/route.js

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await response.json();

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
    });
  }
}
