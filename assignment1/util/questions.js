export { questions, formatCode };
const questions = await getQuestions();

// load the json file
function getQuestions() {
  return new Promise((resolve, reject) => {
    try {
      fetch("./util/static/ass.json")
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
}

function formatCode(text) {
  return text
    .replace(/\\/g, "\\\\") // Escape backslashes
    .replace(/"/g, '\\"') // Escape double quotes
    .replace(/\n/g, "\\n") // Escape newlines
    .replace(/\r/g, "\\r"); // Escape carriage returns
}
