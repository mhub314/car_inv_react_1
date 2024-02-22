import React from 'react'
import InventoryForm from './InventoryForm'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if (!props.open) return (<></>)
    return (
        <div
            onClick={props.onClose}
            className='fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-lime-300 bg-opacity-25'
        >
            <div
            className='max-w-600px w-1/4 flex z-1 mt-3 bg-white shadow-xl rounded'
            onClick={(e) => {
                e.stopPropagation()
            }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 bg-lime-700 p-2 rounded hover:bg-lime-900 text-white"
                        onClick={props.onClose}>
                        X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <InventoryForm id={props.id } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal