import React, { useContext, useState } from 'react';
import {View, Text, Platform, ActivityIndicator} from 'react-native';
import { AuthContext } from '../../Contexts/Auth'

import {Background, Container, AreaInput, Input, Submit, SubmitText, SubmitButton} from '../SignIn/styled';


export default function SignUp(){

    const {signUp, loadingAuth} = useContext(AuthContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        if(nome === '' || email === '' || password === ''){alert('Preencha todos os campos'); return;}
        signUp(email, password, nome);
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                    placeholder='Nome'
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
                 
                <AreaInput>
                    <Input
                    placeholder='Seu email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder='Sua senha'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {loadingAuth ? (
                        <ActivityIndicator size={45} color={'#fff'}/>
                    ):
                        <SubmitText>Cadastrar</SubmitText>
                    }
                </SubmitButton>

            </Container>
        </Background>
    )
}