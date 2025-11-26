export default function toast(message) {
  const div = document.createElement("div");
  div.className =
    "fixed bottom-6 right-6 bg-purple-700 text-white px-4 py-2 rounded shadow-lg animate-bounce";
  div.innerText = message;

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2200);
}
