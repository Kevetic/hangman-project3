var programming_languages = [
	'escape',
	
]

function randomWord() {
  return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }