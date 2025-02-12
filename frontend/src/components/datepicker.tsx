"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  value?: Date,
  onChange?: (date: Date) => void,
  className?: string,
  style?: React.CSSProperties,
  placeholder?: string,
}
export default function DatePicker({ value, onChange, className, style, placeholder = "Pick a date" }: DatePickerProps) {
  const changeDate = (date: Date | undefined) => {
    if (date && onChange) {
      onChange(date)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          style={style}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            className,
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {value ? format(value, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={changeDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
