import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";

import { useForm } from "react-hook-form";
import PhoneInput from "react-native-phone-number-input";

const SignUpScreen = () => {
  const { register, setValue, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [brith, setBrith] = useState();
  const [gender, setGender] = useState();


  const submitStep1 = (data) => {
    console.log(data);
    // setError(true);
  };

  const submitStep2 = (data) => {
    console.log(data);
    // setError(true);
  };

  const submitStep3 = (data) => {
    console.log(data);
    // setError(true);
  };

  const submitStep4 = (data) => {
    console.log(data);
    // setError(true);
  };

  const onSubmitFinal = (data) => {
    register("accept_terms", { value: true });
    console.log(data);
    // // setError(true);
  };

  useEffect(() => {
    register("type");
    register("country");
    register("accept_terms");
    register("name");
    register("email");
    register("cpf");
    register("phone");
    register("birth_date");
    register("postalcode_residence");
    register("number_residence");
    register("complement_residence");
    register("cnh");
    register("license_plate");
    register("vehicle_model_id");
    register("year");
    register("color");
  }, [register]);

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={{ flex: 1, marginLeft: 10, }}>
      <ProgressSteps labelFontSize={10}>
        <ProgressStep
          label="Dados Pessoais"
          onNext={handleSubmit(submitStep1)}
          nextBtnText="Próximo"
          errors={error}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.root}>
            <TextInput
              style={styles.input}
              label={"name"}
              type="text"
              placeholder={"Nome Completo"}
              onChangeText={(text) => setValue("name", text)}
              placeholderTextColor={'#000'}
            />

            <TextInput
              style={styles.input}
              label={"email"}
              placeholder={"Email"}
              onChangeText={(text) => setValue("email", text)}
            />
            <TextInput
              style={styles.input}
              label={"cpf"}
              placeholder={"CPF"}
              onChangeText={(text) => setValue("cpf", text)}
            />
            <PhoneInput
              containerStyle={styles.input_phone}
              placeholder={"Telefone"}
              defaultCode="BR"
              onChangeFormattedText={(text) => setValue("phone", text)}
            />
            <TextInput
              style={styles.input}
              label={"birth_date"}
              placeholder={"Data de nascimento"}
              onChangeText={(text) => setValue("birth_date", text)}
            />
            <TextInput
              style={styles.input}
              label={"gender"}
              placeholder={"Gênero"}
              onChangeText={(text) => setValue("gender", text)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Endereço"
          onNext={handleSubmit(submitStep2)}
          nextBtnText="Próximo"
          errors={error}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.root}>
            <TextInput
              style={styles.input}
              label={"postalcode_residence"}
              placeholder={"Digite seu CEP."}
              onChangeText={(text) => setValue("postalcode_residence", text)}
            />
            <TextInput
              style={styles.input}
              label={"number_residence"}
              placeholder={"Número da casa."}
              onChangeText={(text) => setValue("number_residence", text)}
            />
            <TextInput
              style={styles.input}
              label={"complement_residence"}
              placeholder={"Complemento do endereço."}
              onChangeText={(text) => setValue("complement_residence", text)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Carro"
          onNext={handleSubmit(submitStep3)}
          nextBtnText="Próximo"
          errors={error}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.root}>
            <TextInput
              style={styles.input}
              label={"cnh"}
              placeholder={"Digite o numero da sua CNH."}
              onChangeText={(text) => setValue("cnh", text)}
            />

            <TextInput
              style={styles.input}
              label={"license_plate"}
              placeholder={"Placa do Carro."}
              onChangeText={(text) => setValue("license_plate", text)}
            />
            <TextInput
              style={styles.input}
              label={"vehicle_model_id"}
              placeholder={"Modelo do carro."}
              onChangeText={(text) => setValue("vehicle_model_id", text)}
            />
            <TextInput
              style={styles.input}
              label={"year"}
              placeholder={"Ano do carro."}
              onChangeText={(text) => setValue("year", text)}
            />
            <TextInput
              style={styles.input}
              label={"color"}
              placeholder={"Cor do carro."}
              onChangeText={(text) => setValue("color", text)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Documentos"
          onNext={handleSubmit(submitStep4)}
          nextBtnText="Próximo"
          errors={error}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        ></ProgressStep>
        <ProgressStep
          label="Politica de Privacidade"
          onSubmit={handleSubmit(onSubmitFinal)}
          finishBtnText="Finalizar"
          errors={error}
          nextBtnDisabled={!isSelected}
          previousBtnText="Voltar"
          previousBtnStyle={styles_button.container_PRIMARY}
          previousBtnTextStyle={styles_button.text_TERTIARY}
          nextBtnStyle={styles_button.container_PRIMARY}
          nextBtnTextStyle={styles_button.text_TERTIARY}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Termos e condições</Text>
            <View style={styles.containerk}>
            </View>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerk: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 10,
  },
  title: {
    fontSize: 22,
    alignSelf: "center",
  },
  titletermos: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    textAlign: "justify",
  },
  tcP: {
    marginTop: 10,
    fontSize: 12,

  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,

  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,

  },

  button: {
    backgroundColor: "#136AC7",
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: "#999",
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: "#FFF",
    alignSelf: "center",
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    textalign: "justify",
  },
  root: {
    alignItems: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 40,
    margin: 1,
    padding: 1,
  },
  input_phone: {
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});

const styles_button = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    height: 40,
    width: 90,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 5,
  },
  container_SECONDARY: {
    borderColor: "black",
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_TERTIARY: {
    color: "white",
  },
  text_SECONDARY: {
    color: "blue",
  },
});
export default SignUpScreen;
