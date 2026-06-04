"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import * as React from "react"

interface Props {
    className?: string;
    value?: Date;
    onChange?: (date: Date | undefined) => void;
}

export const DatePickerInput: React.FC<Props> = ({ className, value, onChange }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Field className={cn("max-w-xs", className)}>
            <FieldLabel htmlFor="date-picker-optional" className="font-bold text-[14px]">
                Дата
            </FieldLabel>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date-picker-optional"
                        className="w-full justify-between font-normal cursor-pointer"
                    >
                        {value ? format(value, "PPP") : "Выбрать дату доставки"}
                        <ChevronDownIcon className="h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={value}
                        defaultMonth={value}
                        onSelect={(date) => {
                            onChange?.(date)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>
        </Field>
    )
}