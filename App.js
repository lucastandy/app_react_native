// Importando useState: para adicionar estado a componentes funcioais
import { useState } from 'react';
// Incluindo os componentes do React Native
import { Alert, ScrollView} from 'react-native';
// Incluindo os componentes CSS criado com styled componentes
import {Container, Logo, ImageLogo, List, RowData, Bmi, Classification, InputForm, BtnSubmitForm, TxtSubmitForm} from './app/src/styles/custom';

export default function App() {
  // Criando variável de estado
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  
  // Função para calcular IMC
  const calcularBMI = () => {

    // Chamando a função para validar os campos do formulário
    if(!validade()) return;

    // Convertendo para um número float
    const heightFloat = parseFloat(height);
    const weightFloat = parseFloat(weight);

    // Verificando se os números são válidos
    if(isNaN(heightFloat) || isNaN(weightFloat) || heightFloat <=0 || weightFloat <=0){
      Alert.alert('','Erro: Por favor, insira valores válidos para peso e altura.');
      return;
    }

    // Calculando o índice de Massa Corporal (IMC)
    const bmi = weightFloat / Math.pow(heightFloat, 2);

    // Atualizando o estado de um componente
    setBmi("Seu IMC/BMI: " + bmi.toFixed(2));
  }

  // Função para validar os campos
  const validade = () => {
    if(!height){
      Alert.alert('','Erro: Necessário preencher o campo altura!');
      return false;
    }
    if(!weight){
      Alert.alert('','Erro: Necessário preencher o campo peso!');
      return false;
    }
    return true;
  }
  
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
        <BtnSubmitForm onPress={calcularBMI}>
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
