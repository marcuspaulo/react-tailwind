import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="·grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/marcuspaulo.png"
        alt="User photo"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Marcus Paulo
        </span>
        <span className="truncate text-sm text-zinc-500">
          <label title="email@email.comasdadasaasdasdass">
            email@example.com
          </label>
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
