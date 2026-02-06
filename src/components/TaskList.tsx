import type { Task } from '@/Types/tasks';

import TaskItems from './TaskItems';
interface Props{
    tasks: Task[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TaskList({ tasks, onToggle, onDelete }: Props) {
  return (
   <div>
       {tasks.map((t) => (
       <TaskItems
       onToggle={onToggle}
       onDelete={onDelete}
        id={t.id}
         title={t.title} 
         completed={t.completed} />
        ))}
        </div>
  );
  
}

export default TaskList;