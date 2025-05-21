export default function Button ({children, ...props}) {
  return <button className="px-4 py-2 font-semibold uppercase rounded bg-amber-400 text-stone-900 hover:bg-amber-500dd" {...props}>{children}</button>
}