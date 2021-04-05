import React, { useState, useEffect } from 'react';
import axios from 'axios';
import URL from '../../const';

export default function FormSocial(props){

    const getSocialNets = async(id) => {

        console.log(id);
        await axios.get(URL + '/social/getSocialNets.php?id=' + id)
        .then(res => {

            console.log(res.data);

        })
        .catch(error => {

            console.log(error);

        })

    }

    const handleChange = e => {

        setTimeout(() => {
            getSocialNets(e.target.value)
        }, 500);

    }

    /*useEffect(() => {

        console.log('Funcionando');

    });*/

    return(

        <div className='container-fluid pt-4'>
            <div className='row'>
                <div className='col-10 col-md-8 m-auto bg-dark-blue py-2 border-radius'>
                    <h3 className='text-center'>Editar Contactos</h3>
                </div>
                <div className='col-10 col-md-8 mx-auto'>
                    <form className='form-inline mx-auto' onSubmit=''>
                        
                        <div className='col-12 mt-4 text-center'>
                            <label className='col-form-label text-center mb-2' htmlFor='owner'>
                                <strong>Seleccione el propietario de la cuenta a editar</strong>
                            </label>
                            <select id='owner' name='owner' className='form-control px-4' onChange={ handleChange }>

                                <option value={ false }>----</option>
                                { props.owners.map(owner => <option key={ owner.id } value={ owner.id }>{ owner.name }</option>) }

                            </select>
                        </div>
                        
                        <div className='col-12 mt-2'>
                            <div className='col-4 col-md-auto float-right'>
                                <button type='submit' className='btn btn-success'>Editar</button>
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

    );

}