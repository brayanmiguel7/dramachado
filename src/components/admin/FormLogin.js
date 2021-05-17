import React, { useState } from 'react';

export default function FormLogin(props){

    const [ data, setData ] = useState({

        username: '',
        pass: ''

    });

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.name ] : e.target.value

        })

    }

    const handleSubmit = e => {

        e.preventDefault();
        e.target.reset();
        props.submit(data.username, data.pass);

    }

    return(

        <div className='container-fluid pt-4'>
            <div className='row'>
                <div className='col-10 col-md-8 m-auto bg-dark-blue py-2 border-radius'>
                    <h3 className='text-center'>Ingresar al Sistema</h3>
                </div>
                <div className='col-10 col-md-8 mx-auto'>
                    <form className='form-inline mx-auto' onSubmit={ handleSubmit }>
                        
                        <div className='form-group col-10 mx-auto mt-3'>
                            <label className='col-form-label col-md-6 text-center' htmlFor='username'>
                                <strong>Usuario</strong>
                            </label>
                            <input type='text' id='username' name='username' className='form-control col-md-6 ml-auto'
                             onChange={ handleChange } />
                        </div>
                        <div className='form-group col-10 mx-auto mt-2'>
                            <label className='col-form-label col-md-6 text-center' htmlFor='pass'>
                                <strong>Contraseña</strong>
                            </label>
                            <input type='password' id='pass' name='pass' className='form-control col-md-6 ml-auto'
                             onChange={ handleChange } />
                        </div>
                        <div className='col-12 mt-2'>
                            <div className='col-4 col-md-auto float-right'>
                                <button type='submit' className='btn btn-success'>Ingresar</button>
                            </div>
                            {   props.loading ? 
                            
                                <div className='col-auto col-md-2 float-right'>
                                    <div className='spinner-border border-spinner-blue'></div>
                                </div>

                                :

                                ''

                            }
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )

}