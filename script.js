// alert("Hello World!")
const input = document.getElementById('input');
const scrambled = document.getElementById('scrambled');
const redactedText = document.getElementById('redacted_text');
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const redactedContent = input.value.replace(new RegExp(scrambled.value, 'g'), '*');
  redactedText.innerHTML = redactedContent;
});