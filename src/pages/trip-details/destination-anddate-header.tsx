import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinatioAndDateHeader() {
    return (
        <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
            <div className="flex items-center gap-2">
                <MapPin className='size-5 text-zinc-400' />
                <span className="text-lg text-zinc-100">
                    Florinópolis, Brasil
                </span>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className='size-5 text-zinc-400' />
                    <span className="text-sm text-zinc-100">
                        09 a 11 de Agosto
                    </span>
                </div>
                <div className='w-px h-6 bg-zinc-800' />
                <Button variant="secundary">
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>
            </div>
        </div>
    )
}