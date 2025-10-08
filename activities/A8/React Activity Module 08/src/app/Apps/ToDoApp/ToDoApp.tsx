// illustrates forms, lists, etc.
// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE

import * as React from 'react';
import { useState } from 'react';
import { Heading, VStack, Button, HStack, NumberInput, NumberInputField } from '@chakra-ui/react';

import { ToDoItem } from './types'
import { ToDoItemEntryForm } from './ToDoItemEntryForm'
import { ToDoListDisplay } from './ToDoListDisplay'
// import { ToDoListDisplay } from './ToDoListDisplayBad';

export default function ToDoApp () {
  const [todoList,setTodolist] = useState<ToDoItem[]>([])
  const [itemKey,setItemKey] = useState<number>(0)   // first unused key
  const [priorityThreshold,setPriorityThreshold] = useState<number | undefined>(undefined)

  function handleAdd (title:string, priority:number) {
    if (title === '') {return}   // ignore blank button presses
    setTodolist(todoList.concat({title: title, priority: priority, key: itemKey}))
    setItemKey(itemKey + 1)
  }

  function handleDelete(targetKey:number) {
    const newList = todoList.filter(item => item.key != targetKey)
    setTodolist(newList)
  }

  function handleSortByPriority() {
    const sortedList = [...todoList].sort((first, second) => first.priority - second.priority)
    setTodolist(sortedList)
  }

  function handleDeleteAbovePriority() {
    if (priorityThreshold === undefined || Number.isNaN(priorityThreshold)) {return}
    const filteredList = todoList.filter(item => item.priority <= priorityThreshold)
    setTodolist(filteredList)
  }

  return (
  <VStack>
    <Heading>TODO List</Heading>
    <ToDoItemEntryForm onAdd={handleAdd}/>
    <HStack w='100%'>
      <Button onClick={handleSortByPriority}>Sort by Priority</Button>
      <NumberInput
        value={priorityThreshold ?? ''}
        onChange={(_, valueNumber) => setPriorityThreshold(Number.isNaN(valueNumber) ? undefined : valueNumber)}
        flex={1}
      >
        <NumberInputField placeholder='max priority to keep' />
      </NumberInput>
      <Button onClick={handleDeleteAbovePriority}>Delete Priorities Above</Button>
    </HStack>
    <ToDoListDisplay items={todoList} onDelete={handleDelete}/>
  </VStack>
  )
}
