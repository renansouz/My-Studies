const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then((response) => {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    // Work with the fetched data
    console.log("Fetched data:", data);

    // Example: Log the titles of the posts
    data.forEach((post) => {
      console.log(`Post #${post.id}: ${post.title}`);
    });
  })
  .catch((error) => {
    // Handle errors (e.g., network issues, invalid JSON)
    console.error("Fetch error:", error.message);
  });
