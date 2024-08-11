import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-1">
                    <div className="space-y-1.5">
                        <span className="text-sm text-zinc-100 block">
                            Vinicius Ramos
                        </span>
                        <span className="block text-sm text-zinc-400 truncate">
                            vini@gmail.com
                        </span>
                    </div>
                    <CircleDashed className='size-5 text-zinc-400 shrink-0' />
                </div>
            </div>
            <button
                className='bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center'
            >
                <UserCog className='size-5' />
                Gerenciar convidados
            </button>
        </div>
    )

}