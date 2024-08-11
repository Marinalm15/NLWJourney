import { Plus } from "lucide-react";
import { useState } from "react";
import { ModalCreateActivityModal } from "./create-acttivity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activitys } from "./activitys";
import { DestinatioAndDateHeader } from "./destination-anddate-header";

export function TripDetailsPage() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true);
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false);
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinatioAndDateHeader />

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button
                            className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'
                            onClick={openCreateActivityModal}
                        >
                            <Plus className='size-5' />
                            Cadastrar atividade
                        </button>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 09</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-xs text-zinc-500">
                                Nenhuma atividade registrada neste dia
                            </p>
                        </div>

                        <Activitys />
                    </div>
                </div>

                <div className="w-80 space-y-6">
                    <ImportantLinks />

                    <div className='w-full h-px bg-zinc-800' />

                    <Guests />
                </div>
            </main>

            {isCreateActivityModalOpen && (
                <ModalCreateActivityModal
                    closeCreateActivityModal={closeCreateActivityModal}
                />
            )}
        </div>
    )
}