// Sidebar.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface SidebarProps {
  categories: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
  return (
    <div>
      <List>
        {categories.map((category, index) => (
          <ListItem button key={index}>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
