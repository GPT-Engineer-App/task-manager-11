import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center space-x-2">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <Input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === "Enter" && handleEdit()}
          className="flex-grow"
        />
      ) : (
        <span
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setIsEditing(!isEditing)}
      >
        <Pencil className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => onDelete(todo.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
};

export default TodoItem;