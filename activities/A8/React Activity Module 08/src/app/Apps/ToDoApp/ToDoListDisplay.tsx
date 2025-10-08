// illustrates 'key' attribute
import * as React from 'react';
import {
    Table, Th, Tbody, Tr, Thead
} from '@chakra-ui/react';

import { ToDoItem } from './types'
import { ToDoItemDisplay } from './ToDoItemDisplay'

export function ToDoListDisplay(props: { items: ToDoItem[] , onDelete:(key:number) => void }) {
  return (
    <Table w='100%' style={{tableLayout: 'fixed'}} size='sm'>
      <colgroup>
        <col style={{width:'50%'}} />
        <col style={{width:'25%'}} />
        <col style={{width:'25%'}} />
      </colgroup>
      <Thead>
        <Tr>
          <Th>Title</Th>
            <Th>Priority</Th>
            <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        { props.items.map((eachItem) =>
          <ToDoItemDisplay item={eachItem} key={eachItem.key} onDelete={props.onDelete} />)
        }
      </Tbody>
    </Table>
  )
}
