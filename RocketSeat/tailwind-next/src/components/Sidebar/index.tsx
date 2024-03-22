import { Logo } from "./logo";
import { Search, BarChart, CheckSquare, Flag, Home, SquareStack, User, Cog, LifeBuoy} from "lucide-react"
import { NavItem } from "./NavItem"
import { UsedSpaceWidget } from "./UsedSpaceWidget.";

export function Sidebar () {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
            <Logo />

    <div className="flex mx-1 wp-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
      <Search className="h-5 w-5 text-zinc-500" />
      <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Search" />
    </div>
        
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={User} />
    </nav>

    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <UsedSpaceWidget/>
    </div>
    </aside>
  )
}