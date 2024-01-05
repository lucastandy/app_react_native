// Importando useState: para adicionar estado a componentes funcioais
import { useState } from 'react';
// Incluindo os componentes do React Native
import { ScrollView} from 'react-native';
// Incluindo os componentes CSS criado com styled componentes
import {Container, Logo, ImageLogo, List, RowData, Bmi, Classification, InputForm, BtnSubmitForm, TxtSubmitForm} from './app/src/styles/custom';

export default function App() {
  // Criando variável de estado
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Container>
        {/*Carregar a logo*/}
        <Logo>
          <ImageLogo source={require('./app/assets/logo.png')} />
        </Logo>
        {/* Criando o campo */}
        <InputForm placeholder="Altura (ex.: 1.70)" value={height} onChangeText={text => setHeight(text)}/>
        <InputForm placeholder="Peso (ex. 67.2)" value={weight} onChangeText={text => setWeight(text)}/>

        {/* Criando o botão */}
        <BtnSubmitForm>
          <TxtSubmitForm>
            Calcular
          </TxtSubmitForm>
        </BtnSubmitForm>
        {/* Criando o campo */}
        <InputForm placeholder="Seu IMC/BMI é" value={bmi} editable={false}/>


        {/* Criando a lista de classificação do IMC */}
        <List>
          <RowData>
            <Bmi>
              Menor que 18,5
            </Bmi>
            <Classification>
              Magreza
            </Classification>
          </RowData>
          <RowData>
            <Bmi>
              Entre 18,5 e 24,9
            </Bmi>
            <Classification>
              Normal
            </Classification>
          </RowData>
          <RowData>
            <Bmi>
              Entre 25,0 e 29,9
            </Bmi>
            <Classification>
              Sobrepeso
            </Classification>
          </RowData>
          <RowData>
            <Bmi>
              Entre 30,0 e 39,9
            </Bmi>
            <Classification>
              Obesidade
            </Classification>
          </RowData>
          <RowData>
            <Bmi>
              Maior que 40,00
            </Bmi>
            <Classification>
              Obesidade Grave
            </Classification>
          </RowData>
        </List>
      </Container>
    </ScrollView>
  );
}
