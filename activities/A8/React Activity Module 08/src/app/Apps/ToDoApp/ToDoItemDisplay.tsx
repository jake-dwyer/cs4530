import * as React from 'react';
import { IconButton, Tr, Td } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';

import { ToDoItem } from './types'

export function ToDoItemDisplay (props: {item: ToDoItem, onDelete:(key:number) => void} ) {
  function handleDelete() {
    console.log('deleting:', props.item)
    props.onDelete(props.item.key)
  }

  return (
    <Tr>
      <Td>{props.item.title}</Td>
      <Td>{props.item.priority}</Td>
      <Td><ItemDeleteButton onClick={handleDelete} /></Td>
    </Tr>
  )
}
 
function ItemDeleteButton(props: { onClick: () => void }) {
  return (
    <IconButton aria-label='delete' icon={<AiOutlineDelete />} onClick={props.onClick} />
  )
}