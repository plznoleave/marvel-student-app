import img from './error.gif';

const ErrorMessage = () => {
    return (
        <div>
            <img src={img} alt="Error" style={{display: 'block', margin: '10px auto'}}/>
            <h2 style={{margin: '15px', textAlign: 'center', fontWeight: '400'}}>Sorry, there seems to be an error, please reload the page.</h2>
        </div>
    )
}

export default ErrorMessage;