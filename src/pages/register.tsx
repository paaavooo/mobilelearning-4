import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from '../toast';
import { registerUser } from '../firebaseConfig';
 
const Register: React.FC = () => {
    const history = useHistory()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [cpassword, setCPassword] = React.useState('')

    async function register() {
        if (password !== cpassword) {
            toast('Passwords do not match. Please try again.')
            return
        }
        if (username.trim() === '' || password.trim() === '') {
            return toast('Username and password cannot be empty.')
        }

        try {
            const res = await registerUser(username, password)
            if (res) {
                await toast('Registration successful! Redirecting to login...')
                history.push('/login')
            } else {
                toast('Registration failed. Please try again.')
            }
        } catch (error) {
            console.error('Registration error:', error)
            toast('Registration failed. Please try again.')
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonInput 
                    placeholder="Username?" 
                    onIonChange={(e) => setUsername(e.detail.value ?? '')}
                    type="text"
                ></IonInput>
                <IonInput 
                    placeholder="Password?" 
                    onIonChange={(e) => setPassword(e.detail.value ?? '')}
                    type="password"
                ></IonInput>
                <IonInput 
                    placeholder="Confirm Password?" 
                    onIonChange={(e) => setCPassword(e.detail.value ?? '')}
                    type="password"
                ></IonInput>
                <IonButton onClick={register} expand="block" className="ion-margin-top">Register</IonButton>
                <p>Alredy have an account? <Link to="/login">Login</Link> 
                </p>
            </IonContent>
        </IonPage>
    );
}
 
export default Register;