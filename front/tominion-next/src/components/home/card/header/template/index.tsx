import { RectangleButton } from "@/components/common/atoms/rectangleButton"

export default function Header() {
  return(<>
      <div className="flex justify-between items-center border h-24 p-4">
      <div>
        <RectangleButton text="検索に戻る" color="bg-blue-500"/>
      </div>
      <div>
        <RectangleButton text="Cancel" color="bg-blue-500"/>
        <RectangleButton text="Save" color="bg-yellow-500"/>
      </div>
    </div>
  </>)
}