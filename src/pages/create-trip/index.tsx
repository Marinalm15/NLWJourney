import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTripPage() {

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState([
        "marinalm15@yahoo.com.br",
    ])
    const [isConfirmMoodalTripOpen, setIsConfirmMoodalTripOpen] = useState(false)
    const navigate = useNavigate()

    function openGuestsInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestsModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }

    function openConfirmTripModal() {
        setIsConfirmMoodalTripOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmMoodalTripOpen(false)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        navigate('/trips/1')
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([...emailsToInvite, email])

        event.currentTarget.reset()
    }

    function removeEmailFromInvite(emailToRemove: string) {
        const newEmailsList = emailsToInvite.filter(invited => invited !== emailToRemove)

        setEmailsToInvite(newEmailsList)
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="plann.er" />
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className='space-y-4'>
                    <DestinationAndDateStep
                        isGuestsInputOpen={isGuestsInputOpen}
                        closeGuestsInput={closeGuestsInput}
                        openGuestsInput={openGuestsInput}
                    />

                    {isGuestsInputOpen && (
                        <InviteGuestsStep
                            openGuestsModal={openGuestsModal}
                            emailsToInvite={emailsToInvite}
                            openConfirmTripModal={openConfirmTripModal}
                        />
                    )}
                </div>

                <p className="text-zinc-500 text-sm">Ao planejar a sua viagem pela plann.er você automaticamente concorda <br /> com os nossos
                    <a href="#" className="text-zinc-300 underline"> termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a></p>
            </div>

            {isGuestsModalOpen && (
                <InviteGuestsModal
                    closeGuestsModal={closeGuestsModal}
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    removeEmailFromInvite={removeEmailFromInvite}
                />
            )}


            {isConfirmMoodalTripOpen && (
                <ConfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                />
            )}

        </div>
    )
}

