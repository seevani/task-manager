
import { Button } from './ui/button';
import { useState } from 'react';
interface Props {
    onAdd: (title: string) => void;
}

function TaskInput({onAdd}: Props) {
    const [value, setValue] = useState("");
    const handleAdd = () => {
        if (!value.trim()) return;
        onAdd(value);
        setValue("");
    };
  return (
    <div>
      <input 
      placeholder="Add new task"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
       <Button onClick={handleAdd}>Add</Button>
        </div>
  );
}

export default TaskInput;