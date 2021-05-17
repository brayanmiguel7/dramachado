import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Loading(){

    return(

        <div className='row justify-content-center m-0' style={{ 'minHeight': '90vh',
        'width': '100%' }}>

            <div className='col-8 align-self-center text-center'>

                <div className='spinner-border text-primary' role='status'>

                    <span className='sr-only'>Loading...</span>

                </div>

            </div>

        </div>

    )

}