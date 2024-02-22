import { useSubmit } from 'react-router-dom'
import Button from './Button'
import Input from './Input'

import { useForm } from 'react-hook-form'

interface InventoryFormProps {
    id?: string[]
}

const InventoryForm = ( props:InventoryFormProps) => {
    const { register, handleSubmit } = useForm({})

    return (
        <div>
            <form  onSubmit={ handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name='make' placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name='model' placeholder='Model' />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name='year' placeholder='Year' />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name='color' placeholder='Color' />
                </div>
                <div>
                    <label htmlFor="interior">Interior</label>
                    <Input {...register('interior')} name='interior' placeholder='Interior' />
                </div>
                <div>
                    <label htmlFor="cost">Cost</label>
                    <Input {...register('cost')} name='cost' placeholder='Cost' />
                </div>
                <div className="flex p-1">
                    <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default InventoryForm