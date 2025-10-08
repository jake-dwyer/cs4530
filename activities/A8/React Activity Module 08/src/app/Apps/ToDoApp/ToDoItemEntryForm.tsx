import * as React from 'react';
import { useState } from 'react';
import { Button, Box, FormControl, FormLabel, Input, VStack, HStack, NumberInput, NumberInputField } from '@chakra-ui/react';

export function ToDoItemEntryForm (props: {onAdd:(title:string, priority:number)=>void}) {
    // state variables for this form
    const [title,setTitle] = useState<string>("")
    const [priority,setPriority] = useState<number | undefined>(undefined)

    function handleClick(event: React.FormEvent) {
      event.preventDefault()  // magic, sorry.

      if (title === '' || priority === undefined || Number.isNaN(priority)) {return}   // ignore blank button presses
      props.onAdd(title, priority)    // tell the parent about the new item
      setTitle('')   // resetting the values redisplays the placeholder
      setPriority(undefined)   // resetting the values redisplays the placeholder
    }
  
    return (    
      <VStack spacing={0} align='left' w='100%'>
        <form style={{width:'100%'}}>
          <FormControl>
            <VStack align='left' spacing={0} w='100%'>
            <FormLabel as="b">Add TODO item here:</FormLabel>
            {/* Inputs sized to align with table column widths: 50% / 25% / 25% */}
            <HStack w='100%' align='flex-start'>
              <Input
                name="title"
                value={title}
                placeholder='type item name here'
                onChange={(event => {
                  setTitle(event.target.value);
                  console.log('setting Title to:', event.target.value)
                })}
                flex={2}
              />
              <NumberInput
                value={priority ?? ''}
                onChange={(_, valueNumber) => setPriority(Number.isNaN(valueNumber) ? undefined : valueNumber)}
                flex={1}
              >
                <NumberInputField name="priority" placeholder='type priority here' />
              </NumberInput>
              <Box flex={1} display='flex'>
                <Button bg='lightblue' type="submit" onClick={handleClick} w='100%'> Add TODO item</Button>
              </Box>
            </HStack>
            </VStack>
          </FormControl>
        </form>
      </VStack>
    )

  }

  //<Box h='4'></Box>
