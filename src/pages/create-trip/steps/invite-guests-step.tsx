import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
    openGuestsModal: () => void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestsStep({ openGuestsModal, emailsToInvite, openConfirmTripModal }: InviteGuestsStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button
                type='button'
                className='flex items-center gap-2 flex-1'
                onClick={openGuestsModal}
            >
                <UserRoundPlus className='size-5 text-zinc-400' />
                {emailsToInvite.length > 0 ? (
                    <span className="text-lg text-zinc-100 flex-1 text-left">
                        {emailsToInvite.length} pessoa(s) convidadas
                    </span>
                ) : (
                    <span className="text-lg text-zinc-400 flex-1 text-left">
                        Quem estará na viagem?
                    </span>
                )}
            </button>

            <div className='w-px h-6 bg-zinc-800' />

            <Button
                variant="primary"
                onClick={openConfirmTripModal}
            >
                Confirmar viagem
                <ArrowRight className='size-5' />
            </Button>
        </div>
    )
}