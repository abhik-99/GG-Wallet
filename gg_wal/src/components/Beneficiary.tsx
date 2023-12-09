import { useDraggable } from "@dnd-kit/core";
import Person4Icon from "@mui/icons-material/Person4";
import IconButton from "@mui/material/IconButton";

export function Beneficiary() {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable(
    {
      id: "beneficiary",
    }
  );
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
      color={active?.id === "beneficiary" ? "info" : "primary"}
    >
      <Person4Icon />
    </IconButton>
  );
}
