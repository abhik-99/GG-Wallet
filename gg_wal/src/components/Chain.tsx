import { useDraggable } from "@dnd-kit/core";
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import IconButton from "@mui/material/IconButton";

export function Chain() {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable({
    id: "chain",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <IconButton
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      color={active?.id === "chain" ? "success" : "secondary"}
    >
      <AccountTreeOutlinedIcon />      
    </IconButton>
  );
}
