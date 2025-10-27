import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {loginUser} from '../firebaseConfig'
import { toast } from '../toast';
 
const Login: React.FC = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()

    async function login() {
        try {
            const res = await loginUser(username, password)
            if (!res) {
                await toast('Login failed. Please check your credentials and try again.')
            } else {
                await toast('Login successful!')
                history.push('/home')
            }
        } catch (error) {
            console.error('Login error:', error)
            await toast('Login failed. Please try again.')
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Log in</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
                <IonInput placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                <IonButton onClick={() => login()} expand="block" className="ion-margin-top">Log in</IonButton>
                <p>New here? <Link to="/register">Register</Link> 
                                </p>
            </IonContent>
        </IonPage>
    );
}
 
export default Login;