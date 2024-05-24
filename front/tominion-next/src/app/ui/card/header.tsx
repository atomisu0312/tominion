export default function Header() {
  return(<>
      <div className="flex justify-between items-center border h-24 p-4">
      <div>
        <button className="bg-blue-500 text-white px-4 py-1">検索に戻る</button>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-1">Cancel</button>
        <button className="bg-yellow-400 text-white px-4 py-1">Save</button>
      </div>
    </div>
  </>)
}