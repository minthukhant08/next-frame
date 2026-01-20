import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type item = {
  value: string,
  text: string
}

export type SelectBoxProp = {
  placeholder?: string,
  value?: string,
  onValueChange: (value: string) => void
  items: item[]
}

export default function SelectBox({ placeholder, items, value , onValueChange }: SelectBoxProp) {
  return <Select value={value} onValueChange={onValueChange}>
    <SelectTrigger className="w-45">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {
        items && items.map((item) => <SelectItem key={item.value} value={item.value}>{item.text}</SelectItem>)
      }
    </SelectContent>
  </Select>
}