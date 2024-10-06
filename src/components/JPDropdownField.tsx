'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, SharedSelection} from "@nextui-org/react";

export type DropdownData = Record<string, string>;

interface IJPDropdownField {
    data : DropdownData,
    onSelectionChange?: (key: string, label: string) => void;
}

export const JPDropdownField : React.FC<IJPDropdownField> = ({ data }) => {
  const [selectedKeys, setSelectedKeys] = React.useState<SharedSelection>(new Set([]));

  const selectedValue = React.useMemo(() => {
    const selectedKey = Array.from(selectedKeys)[0]; // Weź pierwszy wybrany klucz
    return selectedKey ? data[selectedKey] : "Wybierz opcję"; // Zwróć etykietę lub domyślny tekst
}, [selectedKeys]);

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          className="capitalize w-full bg-white h-14" 
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        className="w-full"
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {
            Object.entries(data).map(([key, label]) => (
                <DropdownItem key={key}>
                    {label}
                </DropdownItem>
            ))
        }
      </DropdownMenu>
    </Dropdown>
  );
}