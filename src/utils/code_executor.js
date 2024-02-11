export default async function runCodeonCompilerAPI(
  input_code,
  input,
  selected_language
) {
  try {
    const apiUrl = "https://api.jdoodle.com/v1/execute/";

    const requestBody = {
      script: input_code,
      language: selected_language.language_code,
      versionIndex: selected_language.version_index,
      stdin: input,
      clientId: "5bef564559302e2eb6b7e835433e09d6",
      clientSecret:
        "151f31d046c4c804f4f3a53b5b909be8d3feda417feb079f0889e0a61ddb0eab",
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
  }
}
