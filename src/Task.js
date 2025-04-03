import React from "react";
import { IconButton } from '@mui/material'; 
import DeleteIcon from '@mui/icons-material/Delete'; 

export default function Task({ id, title, date_time, onDelete }) {
  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{date_time}</p>
     
      <IconButton 
        aria-label="delete" 
        size="small" 
        onClick={() => onDelete(id)} 
      >
        <DeleteIcon fontSize="small" /> 
      </IconButton>
    </div>
  );
}
