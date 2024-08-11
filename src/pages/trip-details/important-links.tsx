import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-1">
                    <div className="space-y-1.5">
                        <span className="text-sm text-zinc-100 block">
                            Reserva do arbnb
                        </span>
                        <a href="#"
                            className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                        >
                            https://www.airbnb.com.br/jfisjhgirjgojivgshigjfiduvhfsuihfgirejgihduhgfighufhgyuhgdfhughtghithgk
                        </a>
                    </div>
                    <Link2 className='size-5 text-zinc-400 shrink-0' />
                </div>
            </div>
            <button
                className='bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center'
            >
                <Plus className='size-5' />
                Cadastrar novo link
            </button>
        </div>
    )
}