import { useEffect, useState } from "react"

export const useTypewriterEffect = (words: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState("")

  useEffect(() => {
    const wordIndex = currentIndex % words.length
    const word = words[wordIndex]
    let wordTimer: any

    const typeWriter = (word: string, index: number, typingSpeed: number) => {
      if (index < word.length) {
        setCurrentWord((prevWord) => prevWord + word[index])
        wordTimer = setTimeout(() => {
          typeWriter(word, index + 1, typingSpeed)
        }, typingSpeed)
      } else {
        setTimeout(() => {
          deleteWord(word, word.length - 1, 50)
        }, 2000) // Delay before starting the delete effect
      }
    }

    const deleteWord = (word: string, index: number, deletingSpeed: number) => {
      if (index >= 1) {
        setCurrentWord((prevWord) => prevWord.slice(0, -1))
        setTimeout(() => {
          deleteWord(word, index - 1, deletingSpeed)
        }, deletingSpeed)
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }
    }

    setCurrentWord(word[0]) // Set initial letter at position [0]
    typeWriter(word, 1, 150) // Typing speed: 150 milliseconds per character

    return () => {
      clearTimeout(wordTimer)
    }
  }, [currentIndex])

  return { currentWord }
}
