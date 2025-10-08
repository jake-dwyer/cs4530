import { ChakraProvider } from '@chakra-ui/react'
import ToDoApp from './app/Apps/ToDoApp/ToDoApp'

function App() {
  return (
    <ChakraProvider>
      <ToDoApp />
    </ChakraProvider>
  )
}

export default App
